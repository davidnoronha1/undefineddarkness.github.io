#!/usr/bin/env -S uv run --script
# /// script
# requires-python = ">=3.11"
# dependencies = [
#   "markdown-it-py==4.3.0",
#   "mdit-py-plugins==0.7.0",
#   "pygments==2.21.0",
#   "latex2mathml==3.81.1",
# ]
# ///
"""The site generator: src/**/*.md (GitHub-flavoured Markdown) -> out/.

Posts are Markdown, plus:
  - front matter: title, description, date, image (header image), icon (social image)
  - callouts:   > [!NOTE] / [!TIP] / [!IMPORTANT] / [!WARNING] / [!CAUTION]
  - math:       \\( inline \\), \\[ display \\] and ```math fences -> MathML (no JS)
  - code:       fenced blocks, highlighted at build time (pygments)
  - <x-fold>, <x-table>, <x-chart>, <x-plot>, <x-code>: reusable custom
    elements (assets_src/other/elements.ts); pages using them get
    /assets/elements.js. <x-code> is pre-highlighted here, so it needs none
  - anything else is plain HTML (<video>, <object>, <div class="split">, ...)
Markdown inside HTML tags (e.g. <x-fold>, <div>) works without CommonMark's
blank-line rules; <x-table>/<x-chart>/<x-plot> content is passed through raw.
Line breaks in the source are kept; an image on its own line becomes a
<figure> captioned by its alt text.

Usage: build.py [src files...]   (no args: build everything)
"""
import hashlib
import html
import re
import subprocess
import sys
import textwrap
from datetime import datetime, timezone
from email.utils import format_datetime
from pathlib import Path

import latex2mathml.converter
from markdown_it import MarkdownIt
from mdit_py_plugins.anchors import anchors_plugin
from mdit_py_plugins.gfm import gfm_plugin
from mdit_py_plugins.texmath import texmath_plugin
from pygments import highlight as pyg_highlight
from pygments.formatters import HtmlFormatter
from pygments.lexers import get_lexer_by_name
from pygments.util import ClassNotFound

ROOT = Path(__file__).resolve().parent
SRC, OUT = ROOT / "src", ROOT / "out"
SITE = "https://nes.is-a.dev"
SITE_TITLE = "nes"
SITE_DESC = "Notes on hardware, software, and whatever else I'm tinkering with."
DEFAULT_IMAGE = f"{SITE}/assets/images/nes-export.avif"
CSS_LINK = '<link rel="stylesheet" href="/assets/styles.css" />'


# -- Markdown ---------------------------------------------------------------

def mathml(tex: str, display: bool) -> str:
    if not tex.strip():
        return ""
    # Browsers' MathML Core ignores line-break hints, so render each line of
    # an aligned/gathered block as its own centred equation.
    rows = re.fullmatch(r"\s*\\begin\{(aligned|gathered)\}(.*)\\end\{\1\}\s*", tex, re.S)
    if rows and display:
        return "".join(mathml(r.replace("&", ""), True) for r in re.split(r"\\\\", rows[2]))
    try:
        return latex2mathml.converter.convert(tex.strip(), display="block" if display else "inline")
    except Exception as e:  # keep building; show the source instead
        print(f"warning: math failed ({e}): {tex!r}", file=sys.stderr)
        return f"<code>{html.escape(tex)}</code>"


def fence(self, tokens, idx, options, env):
    tok = tokens[idx]
    lang = tok.info.strip().split(" ")[0]
    if lang == "math":
        return mathml(tok.content, True) + "\n"
    return code_block(tok.content, lang) + "\n"


def code_block(code: str, lang: str) -> str:
    """Pygments-highlighted <pre><code>; no/unknown language: plain, escaped."""
    try:
        body = pyg_highlight(code, get_lexer_by_name(lang), HtmlFormatter(nowrap=True)) if lang else html.escape(code)
    except ClassNotFound:
        body = html.escape(code)
    cls = f' class="language-{html.escape(lang)}"' if lang else ""
    return f"<pre><code{cls}>{body.rstrip(chr(10))}</code></pre>"


md = (
    MarkdownIt("commonmark", {"html": True})
    .use(gfm_plugin, front_matter=True)
    .use(texmath_plugin, delimiters="brackets")
    .use(anchors_plugin, max_level=6)
)
md.add_render_rule("fence", fence)
md.add_render_rule("math_inline", lambda s, t, i, o, e: mathml(t[i].content, False))
md.add_render_rule("math_single", lambda s, t, i, o, e: mathml(t[i].content, False))
md.add_render_rule("math_block", lambda s, t, i, o, e: mathml(t[i].content, True) + "\n")
md.add_render_rule("math_block_eqno", lambda s, t, i, o, e: mathml(t[i].content, True) + "\n")

IMG_LINE = re.compile(r'^<img src="[^"]*" alt="([^"]*)"[^>]*>$')


def figures(m: re.Match) -> str:
    """An image on its own line becomes a <figure> captioned by its alt text;
    the text lines around it stay paragraphs."""
    out, para = [], []
    for line in m[1].split("\n"):
        img = IMG_LINE.match(line)
        if img:
            if para:
                out.append("<p>" + "\n".join(para) + "</p>")
                para = []
            out.append(f"<figure>{line}" + (f"<figcaption>{img[1]}</figcaption>" if img[1] else "") + "</figure>")
        else:
            para.append(line)
    if para:
        out.append("<p>" + "\n".join(para) + "</p>")
    return "\n".join(out)


# Block-level tags that may wrap Markdown. CommonMark only parses Markdown
# inside them when separated by blank lines; pad_html() adds those so posts
# can be written without them. RAW_TAG elements take tab-separated rows that
# their custom element parses itself, so they're kept as one untouched HTML
# block instead (blank line before and after, none added inside).
BLOCK_TAG = re.compile(r"^\s*</?(div|section|aside|figure|figcaption|details|summary|header|footer|"
                       r"nav|main|article|blockquote|center|x-fold)\b[^>]*>.*>?\s*$", re.I)


RAW_TAG = re.compile(r"^\s*<(x-table|x-chart|x-plot)\b")


X_CODE = re.compile(r'^\s*<x-code\b([^>]*)>(.*)$')


def x_code(text: str, slots: list[str]) -> str:
    """Pre-highlight <x-code language=".."> with Pygments (so posts need no JS
    for it). Code may contain blank lines, which would end a raw HTML block,
    so each one becomes an <!--x-code:N--> placeholder that render() fills in."""
    out, lines, fence, i = [], text.split("\n"), None, 0
    while i < len(lines):
        line, s = lines[i], lines[i].strip()
        m = None if fence else X_CODE.match(line)
        if fence:
            fence = None if s.startswith(fence) else fence
        elif s.startswith(("```", "~~~")):
            fence = s[:3]
        if not m:
            out.append(line)
            i += 1
            continue
        attrs, body = m[1], [m[2]]
        while "</x-code>" not in body[-1] and i + 1 < len(lines):
            i += 1
            body.append(lines[i])
        code = "\n".join(body).split("</x-code>")[0]
        code = re.sub(r'^\s*<script type="text/plain">|</script>\s*$', "", code.strip("\n"))
        lang = re.search(r'\blanguage="([^"]*)"', attrs)
        slots.append(f"<x-code{attrs}>{code_block(textwrap.dedent(code).strip(chr(10)), lang[1] if lang else '')}</x-code>")
        out += ["", f"<!--x-code:{len(slots) - 1}-->", ""]
        i += 1
    return "\n".join(out)


def pad_html(text: str) -> str:
    out, fence, raw = [], None, None
    for line in text.split("\n"):
        s = line.strip()
        if raw:
            out.append(line)
            if s.startswith(f"</{raw}>"):
                out.append("")
                raw = None
            continue
        m = RAW_TAG.match(line) if not fence else None
        if m:
            if out and out[-1].strip():
                out.append("")
            out.append(line)
            raw = None if f"</{m[1]}>" in s else m[1]
            if not raw:
                out.append("")
            continue
        if fence:
            fence = None if s.startswith(fence) else fence
            out.append(line)
            continue
        if BLOCK_TAG.match(line) and out and out[-1].strip() and not out[-1].lstrip().startswith("<"):
            out.append("")  # Markdown line followed by a block tag
        elif s and not s.startswith("<") and out and BLOCK_TAG.match(out[-1]):
            out.append("")  # block tag followed by Markdown (incl. a code fence)
        if s.startswith(("```", "~~~")):
            fence = s[:3]
        out.append(line)
    return "\n".join(out)


def render(text: str) -> tuple[dict, str]:
    slots: list[str] = []
    tokens = md.parse(pad_html(x_code(text, slots)))
    meta = {}
    if tokens and tokens[0].type == "front_matter":
        for line in tokens[0].content.splitlines():
            k, sep, v = line.partition(":")
            if sep:
                meta[k.strip()] = v.strip().strip('"')
    body = md.renderer.render(tokens, md.options, {})
    body = re.sub(r"<!--x-code:(\d+)-->", lambda m: slots[int(m[1])], body)
    body = re.sub(r"<p>(.*?)</p>", lambda m: figures(m) if "<img" in m[1] else m[0], body, flags=re.S)
    body = re.sub(r"<img (?![^>]*loading=)", '<img loading="lazy" ', body)
    # Paragraphs and list items use `white-space: pre-line` so source line
    # breaks show; drop the newlines markdown-it puts beside block tags so
    # they don't turn into blank lines (e.g. "<li>\n<p>" in loose lists).
    body = re.sub(r"\n+(?=</?(?:p|ul|ol|li|pre|div|figure|blockquote|table|details)\b)|(?<=<li>)\n+", "", body)
    if re.search(r"<x-(fold|table|chart|plot)\b", body):
        body += '<script type="module" src="/assets/elements.js"></script>\n'
    return meta, body


# -- Pages ------------------------------------------------------------------

def css() -> str:
    s = (ROOT / "assets_src/styles/styles.css").read_text()
    s = re.sub(r"/\*.*?\*/", "", s, flags=re.S)
    s = re.sub(r"\s+", " ", s)
    s = re.sub(r"\s*([{}:;,>])\s*", r"\1", s)
    return s.replace(";}", "}").strip()


def git_date(path: Path) -> float:
    out = subprocess.run(["git", "log", "--follow", "--diff-filter=A", "--format=%at", "--", str(path)],
                         cwd=ROOT, capture_output=True, text=True).stdout.split()
    return float(out[-1]) if out else path.stat().st_mtime


def post_date(meta: dict, path: Path) -> float:
    if meta.get("date"):
        return datetime.fromisoformat(meta["date"]).replace(tzinfo=timezone.utc).timestamp()
    return git_date(path)


def absolute(url: str) -> str:
    return url if url.startswith("http") else SITE + url


def page(template: str, style: str, meta: dict, body: str, url: str) -> str:
    e = lambda s: html.escape(s, quote=True)
    head = template
    for key, val in {
        "!TITLE!": meta.get("title", SITE_TITLE),
        "!DESCRIPTION!": meta.get("description", SITE_DESC),
        "!URL!": url,
        "!IMAGE!": absolute(meta.get("icon") or meta.get("image") or DEFAULT_IMAGE),
    }.items():
        head = head.replace(key, e(val))
    header = "<header>"
    if meta.get("image"):
        header += f'<img src="{e(meta["image"])}" alt="">'
    header += f"<h1>{e(meta.get('title', ''))}</h1></header>\n"
    return head.replace(CSS_LINK, f"<style>{style}</style>").replace("!CONTENT!", header + body)


def build_post(src: Path, template: str, style: str) -> dict:
    meta, body = render(src.read_text())
    rel = src.relative_to(SRC).with_suffix(".html")
    dest = OUT / rel
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(page(template, style, meta, body, f"{SITE}/out/{rel}"))
    return {"meta": meta, "rel": rel, "date": post_date(meta, src)}


def build_html(src: Path, style: str) -> None:
    dest = OUT / src.relative_to(SRC)
    dest.parent.mkdir(parents=True, exist_ok=True)
    dest.write_text(src.read_text().replace(CSS_LINK, f"<style>{style}</style>"))


# -- Index / feeds ----------------------------------------------------------

def all_posts() -> list[dict]:
    posts = []
    for src in sorted(SRC.glob("*/*.md")):
        meta, _ = render(src.read_text())
        rel = src.relative_to(SRC).with_suffix(".html")
        posts.append({"meta": meta, "rel": rel, "date": post_date(meta, src)})
    return sorted(posts, key=lambda p: (p["date"], str(p["rel"])), reverse=True)


def build_index(posts: list[dict], style: str) -> list[dict]:
    """Fill each !POSTS-<FOLDER>! in src/index.html. Folders without a
    placeholder (drafts in todo/) stay off the index, RSS and sitemap."""
    text = (SRC / "index.html").read_text()
    public = []
    for folder in sorted({p["rel"].parts[0] for p in posts}):
        key = f"!POSTS-{folder.upper()}!"
        if key not in text:
            continue
        items = []
        for p in (p for p in posts if p["rel"].parts[0] == folder):
            public.append(p)
            t, d = html.escape(p["meta"].get("title", p["rel"].stem)), p["meta"].get("description", "")
            icon = p["meta"].get("icon") or p["meta"].get("image")
            img = f'<img src="{html.escape(icon)}" alt="" width="40" height="40" loading="lazy">' if icon else ""
            when = datetime.fromtimestamp(p["date"], timezone.utc)
            # Icon-less posts get a 2x2 "pixel" glyph: one of the 15 non-empty
            # patterns, picked from the path so it stays put (see styles.css).
            bits = int(hashlib.md5(str(p["rel"]).encode()).hexdigest(), 16) % 15 + 1
            px = "" if icon else "".join(f" data-{q}" for i, q in enumerate(("tl", "tr", "bl", "br")) if bits >> i & 1)
            items.append(f'<li{px}>{img}<div><a href="/out/{p["rel"]}">{t}</a>' + (f"<p>{html.escape(d)}</p>" if d else "")
                         + f'</div><time datetime="{when:%Y-%m-%d}">{when:%b}</time></li>')
        text = text.replace(key, "\n".join(items))
    text = text.replace(CSS_LINK, f"<style>{style}</style>")
    (OUT / "index.html").write_text(text)
    (ROOT / "index.html").write_text(text)
    return sorted(public, key=lambda p: (p["date"], str(p["rel"])), reverse=True)


def build_feeds(posts: list[dict]) -> None:
    e = html.escape
    now = datetime.now(timezone.utc)
    items = "".join(
        f"<item><title>{e(p['meta'].get('title', ''))}</title><link>{SITE}/out/{p['rel']}</link>"
        f"<description>{e(p['meta'].get('description', ''))}</description>"
        f"<pubDate>{format_datetime(datetime.fromtimestamp(p['date'], timezone.utc))}</pubDate>"
        f"<guid>{SITE}/out/{p['rel']}</guid></item>\n"
        for p in posts)
    (ROOT / "rss.xml").write_text(
        f'<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0"><channel><title>{SITE_TITLE}</title>'
        f"<link>{SITE}</link><description>{e(SITE_DESC)}</description><language>en-us</language>"
        f"<lastBuildDate>{format_datetime(now)}</lastBuildDate>\n{items}</channel></rss>\n")

    day = lambda ts: datetime.fromtimestamp(ts, timezone.utc).strftime("%Y-%m-%d")
    urls = [(f"{SITE}/", now.timestamp()), (f"{SITE}/out/about.html", now.timestamp()), (f"{SITE}/portfolio.html", now.timestamp())]
    urls += [(f"{SITE}/out/{p['rel']}", p["date"]) for p in posts]
    urls += [(f"{SITE}/{f.relative_to(ROOT)}", git_date(f)) for f in sorted((ROOT / "experiments").rglob("*.html"))]
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        + "".join(f"<url><loc>{u}</loc><lastmod>{day(t)}</lastmod></url>\n" for u, t in urls) + "</urlset>\n")


def main(args: list[str]) -> None:
    template, style = (ROOT / "template.html").read_text(), css()
    (OUT / ".assets").mkdir(parents=True, exist_ok=True)
    (OUT / ".assets/styles.css").write_text(style)  # for hand-written pages (portfolio, experiments)

    targets = [Path(a).resolve() for a in args] or sorted(SRC.rglob("*.md")) + sorted(SRC.rglob("*.html"))
    for src in targets:
        if src.suffix == ".md":
            build_post(src, template, style)
        elif src.suffix == ".html" and src.name != "index.html":
            build_html(src, style)
        print(f"built {src.relative_to(ROOT)}")

    build_feeds(build_index(all_posts(), style))


if __name__ == "__main__":
    main(sys.argv[1:])
