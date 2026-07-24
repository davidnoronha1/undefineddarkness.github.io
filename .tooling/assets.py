#!/usr/bin/env -S uv run --script
#
# /// script
# requires-python = ">=3.12"
# dependencies = []
# ///
"""
Unified asset pipeline.

  assets.py sync <dir> [<dir> ...] [--source assets_src] [--posts src] [--output out/.assets]

Does everything in one process, one pass:
1. Walks the one asset source folder (assets_src/) plus co-located post
   images sitting next to markdown source (src/<dir>/*.<ext>, so authors
   can keep just dropping a screenshot beside the post — no manual move)
   and populates the one flat asset output folder:
     - image/video files get hashed (content-addressed) and, if they're a
       raster image, transcoded to AVIF: out/.assets/<slug>-<hash>.<ext>
     - everything else is copied through verbatim, flattened, keeping its
       original filename: out/.assets/<original-basename>
2. Immediately uses the resulting manifest (kept in memory only — nothing
   is written to disk beyond the actual output assets) to rewrite every
   asset reference (src=, href=, content=, url(...), import "...", and
   quoted /assets/... strings generally) under each given <dir>, plus
   rss.xml and a root-level index.html if present.
"""

import argparse
import hashlib
import re
import shutil
import subprocess
import sys
import unicodedata
from pathlib import Path

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".jfif", ".webp", ".gif", ".bmp", ".tiff", ".avif"}
# No video assets exist in the repo yet, but treat them the same way
# (hashed, not transcoded) so a future drop-in doesn't need pipeline changes.
VIDEO_EXTS = {".mp4", ".webm", ".mov", ".mkv"}
MEDIA_EXTS = IMAGE_EXTS | VIDEO_EXTS

# Files/dirs under the source folder that aren't shippable media at all.
SKIP_DIR_NAMES = {".tooling", "styles"}
SKIP_FILE_NAMES = {"Makefile"}
SKIP_SUFFIXES = {".ts"}

# Build outputs that live in the same flat output folder but aren't
# produced by this script (postcss/bun handle these) — never prune them.
PROTECTED_NAMES = {"styles.css", "ascii-3d-viewer.js"}

HASH_HEXLEN = 10


def slugify(stem: str) -> str:
    ascii_stem = unicodedata.normalize("NFKD", stem).encode("ascii", "ignore").decode("ascii")
    slug = re.sub(r"[^a-zA-Z0-9]+", "-", ascii_stem).strip("-").lower()
    return slug or "asset"


def hash_file(path: Path) -> str:
    h = hashlib.blake2b(digest_size=HASH_HEXLEN // 2)
    h.update(path.read_bytes())
    return h.hexdigest()


def should_skip(path: Path, source_root: Path) -> bool:
    rel = path.relative_to(source_root)
    if any(part in SKIP_DIR_NAMES for part in rel.parts[:-1]):
        return True
    if path.name in SKIP_FILE_NAMES:
        return True
    if path.suffix in SKIP_SUFFIXES:
        return True
    return False


# avifenc only reads these directly, trusting the extension (.jfif is just
# a JPEG under a different extension, and it accepts it fine); anything
# else (webp, gif, bmp, tiff) is bridged through ImageMagick first, which
# preserves alpha by producing an intermediate PNG.
AVIFENC_NATIVE_EXTS = {".png", ".jpg", ".jpeg", ".jfif"}


def _run(cmd: list[str]) -> subprocess.CompletedProcess:
    return subprocess.run(cmd, capture_output=True)


def convert_to_avif(src: Path, dest: Path) -> bool:
    dest.parent.mkdir(parents=True, exist_ok=True)
    ext = src.suffix.lower()

    if ext == ".avif":
        # Already AVIF — just place it, nothing to encode.
        shutil.copy2(src, dest)
        return True

    bridge_png: Path | None = None
    input_path = src
    if ext not in AVIFENC_NATIVE_EXTS:
        bridge_png = dest.with_name(dest.stem + ".bridge.png")
        result = _run(["convert", str(src), str(bridge_png)])
        if result.returncode != 0 or not bridge_png.exists():
            print(f"Error bridging {src} to PNG: {result.stderr.decode(errors='replace').strip()}", file=sys.stderr)
            return False
        input_path = bridge_png

    try:
        result = _run([
            "avifenc",
            "-q", "70",
            "-s", "6",
            str(input_path), str(dest),
        ])
        if result.returncode != 0 or not dest.exists():
            print(f"Error converting {src}: {result.stderr.decode(errors='replace').strip()}", file=sys.stderr)
            return False
        return True
    finally:
        if bridge_png is not None and bridge_png.exists():
            bridge_png.unlink()


def process_media_file(path: Path, rel: str, output_root: Path, manifest: dict[str, str]) -> bool:
    """Hash + (for images) transcode a media file, flattening it into
    output_root, and record it in the manifest under key `rel`. Returns
    False (without touching the manifest) if conversion failed, so one bad
    file doesn't take down the rest of the build."""
    ext = path.suffix.lower()
    digest = hash_file(path)
    slug = slugify(path.stem)
    out_ext = "avif" if ext in IMAGE_EXTS else ext.lstrip(".")
    out_name = f"{slug}-{digest}.{out_ext}"
    dest = output_root / out_name

    if not dest.exists():
        if ext in IMAGE_EXTS:
            if not convert_to_avif(path, dest):
                return False
        else:
            shutil.copy2(path, dest)

    manifest[rel] = out_name
    print(f"{rel} -> {out_name}  (hash={digest})")
    return True


def process_passthrough_file(path: Path, rel: str, output_root: Path, manifest: dict[str, str]) -> None:
    """Copy a non-media file through unchanged, flattened, keeping its
    original filename, and record it in the manifest under key `rel`."""
    out_name = path.name
    dest = output_root / out_name
    digest = hash_file(path)

    # Fixed-name outputs can't rely on the filename to signal "unchanged"
    # the way hashed media does — skip the write when content is already
    # identical, so unrelated files don't get touched (mtime bump, spurious
    # git diff) on every rebuild.
    if not dest.exists() or hash_file(dest) != digest:
        shutil.copy2(path, dest)

    manifest[rel] = out_name
    print(f"{rel} -> {out_name}  (hash={digest})")


def build_assets(source: str, posts: str, output: str) -> dict[str, str]:
    """Populate the flat output folder from the source folder(s) and return
    the resulting manifest (source path -> output filename) purely in
    memory — nothing about this mapping needs to hit disk, it only exists
    to hand off to rewrite_html_tree within the same process."""
    source_root = Path(source)
    posts_root = Path(posts)
    output_root = Path(output)

    output_root.mkdir(parents=True, exist_ok=True)

    manifest: dict[str, str] = {}
    failures: list[str] = []

    # 1. The unified asset source folder: icons/fonts/models/documents/
    #    curated images/misc. Media gets hashed+flattened, everything else
    #    is copied through with its original filename, also flattened.
    for path in sorted(source_root.rglob("*")):
        if not path.is_file():
            continue
        if should_skip(path, source_root):
            continue

        rel = path.relative_to(source_root).as_posix()
        ext = path.suffix.lower()

        if ext in MEDIA_EXTS:
            if not process_media_file(path, rel, output_root, manifest):
                failures.append(rel)
        else:
            process_passthrough_file(path, rel, output_root, manifest)

    # 2. Co-located post images: authors just drop a screenshot next to the
    #    markdown file it belongs to (e.g. src/2025/foo.png, referenced as
    #    ![](foo.png)) — no manual move required. One level deep only
    #    (src/<dir>/<file>.<ext>), namespaced by that directory's name so
    #    e.g. two different years' "image.png" don't collide once
    #    flattened. `rewrite-tree` resolves bare-filename references
    #    against this same "images/posts/<dir>/<filename>" key.
    if posts_root.is_dir():
        for context_dir in sorted(p for p in posts_root.iterdir() if p.is_dir()):
            for path in sorted(context_dir.iterdir()):
                if not path.is_file() or path.suffix.lower() not in IMAGE_EXTS:
                    continue
                rel = f"images/posts/{context_dir.name}/{path.name}"
                if not process_media_file(path, rel, output_root, manifest):
                    failures.append(rel)

    # Prune anything in the output folder this run didn't (re)produce.
    keep = set(manifest.values()) | PROTECTED_NAMES
    for existing in output_root.iterdir():
        if existing.is_dir():
            shutil.rmtree(existing)
            print(f"pruned stale dir {existing.relative_to(output_root)}")
        elif existing.name not in keep:
            existing.unlink()
            print(f"pruned stale file {existing.relative_to(output_root)}")

    if failures:
        print(f"\n{len(failures)} file(s) failed to convert:", file=sys.stderr)
        for f in failures:
            print(f"  {f}", file=sys.stderr)
        raise SystemExit(1)

    return manifest


ASSET_ATTR_RE = re.compile(
    r"""(?P<prefix>\b(?:src|href|content)=)(?P<quote>["'])(?P<value>[^"']+)(?P=quote)"""
)
CSS_URL_RE = re.compile(r"""url\((?P<quote>['"]?)(?P<value>[^'")]+)(?P=quote)\)""")
IMPORT_RE = re.compile(r"""(?P<prefix>\bimport\s+)(?P<quote>["'])(?P<value>[^"']+)(?P=quote)""")
# Catch-all for anything else quoting an /assets/ path directly — HTML
# comments like post_image="/assets/..." (used by generate_index/rss),
# PDFObject.embed("/assets/documents/....pdf"), and similar one-off JS/text
# call sites that aren't a recognized HTML attribute.
# The site's own canonical domain — og:image etc. sometimes hardcode the
# full production URL rather than a site-relative /assets/ path.
SITE_ORIGINS = ("https://nes.is-a.dev", "http://nes.is-a.dev")

QUOTED_ASSET_RE = re.compile(
    r"""(?P<prefix>)(?P<quote>["'])(?P<value>(?:"""
    + "|".join(re.escape(o) for o in SITE_ORIGINS)
    + r""")?(?:\.\./|\./|/)*assets/[^"']+)(?P=quote)"""
)
EXTERNAL_PREFIXES = ("http://", "https://", "//", "data:", "mailto:")


def resolve_reference(value: str, manifest: dict[str, str], context_year: str) -> str | None:
    value = value.strip()

    site_prefix = next((o for o in SITE_ORIGINS if value.startswith(o + "/assets/")), None)
    if site_prefix is not None:
        resolved = resolve_reference(value[len(site_prefix):], manifest, context_year)
        return f"{site_prefix}{resolved}" if resolved else None

    if value.startswith(EXTERNAL_PREFIXES):
        return None

    # Site-relative "/assets/..." or path-relative "../../assets/...",
    # "./assets/..." — both point at the same output folder, just spelled
    # differently depending on how deep the referencing page sits.
    rel_match = re.match(r"^((?:\.\./)+|\./|)assets/(.+)$", value)
    anchor = None
    if value.startswith("/assets/"):
        anchor, subpath = "/assets/", value[len("/assets/"):]
    elif rel_match:
        anchor, subpath = f"{rel_match.group(1)}assets/", rel_match.group(2)

    if anchor is not None:
        if subpath in PROTECTED_NAMES:
            # Fixed-name build output (styles.css, ascii-3d-viewer.js) —
            # not tracked in the manifest, already correct as-is.
            return None

        new_name = manifest.get(subpath)
        if new_name is None:
            # The source may have moved to a different subdir than the
            # reference remembers (everything's flattened now) — a
            # passthrough file keeps its original basename as its output
            # name, so a basename match is still a legitimate resolution.
            basename = Path(subpath).name
            if basename in manifest.values():
                new_name = basename

        if new_name is None:
            print(f"warning: no manifest entry for {anchor}{subpath}", file=sys.stderr)
            return None
        return f"{anchor}{new_name}"

    ext = Path(value.split("?", 1)[0].split("#", 1)[0]).suffix.lower()
    if ext in MEDIA_EXTS and not value.startswith("/"):
        clean = value[2:] if value.startswith("./") else value
        key = f"images/posts/{context_year}/{clean}"
        new_name = manifest.get(key)
        if new_name is None:
            return None
        return f"/assets/{new_name}"

    return None


def rewrite_html(text: str, manifest: dict[str, str], context_year: str) -> tuple[str, int]:
    count = 0

    def sub_attr(m: re.Match) -> str:
        nonlocal count
        resolved = resolve_reference(m.group("value"), manifest, context_year)
        if resolved is None:
            return m.group(0)
        count += 1
        return f"{m.group('prefix')}{m.group('quote')}{resolved}{m.group('quote')}"

    def sub_url(m: re.Match) -> str:
        nonlocal count
        resolved = resolve_reference(m.group("value"), manifest, context_year)
        if resolved is None:
            return m.group(0)
        count += 1
        quote = m.group("quote") or ""
        return f"url({quote}{resolved}{quote})"

    text = ASSET_ATTR_RE.sub(sub_attr, text)
    text = CSS_URL_RE.sub(sub_url, text)
    text = IMPORT_RE.sub(sub_attr, text)
    # Run last: idempotent against anything the specific patterns above
    # already rewrote (their new value is a real manifest hit, so this is
    # just a no-op re-resolution), and only actually needed for whatever
    # they didn't cover (JS calls, HTML comments, etc.)
    text = QUOTED_ASSET_RE.sub(sub_attr, text)
    return text, count


def rewrite_tree(root: Path, manifest: dict[str, str]) -> int:
    """Rewrite every asset reference found under `root` (plus rss.xml and
    a root-level index.html, if present) to match `manifest`. Returns the
    number of references rewritten."""
    targets = list(root.rglob("*.html"))
    extra = [Path("rss.xml"), Path("index.html")]
    for extra_path in extra:
        if extra_path.exists() and extra_path not in targets:
            targets.append(extra_path)

    total = 0
    for file_path in targets:
        try:
            rel_to_root = file_path.relative_to(root)
            context_year = rel_to_root.parts[0] if len(rel_to_root.parts) > 1 else ""
        except ValueError:
            context_year = ""

        text = file_path.read_text()
        new_text, count = rewrite_html(text, manifest, context_year)
        if count:
            file_path.write_text(new_text)
            total += count

    print(f"rewrote {total} asset reference(s) across {len(targets)} file(s) under {root}")
    return total


def cmd_sync(args: argparse.Namespace) -> None:
    """Do everything in one process: populate the output folder, build the
    manifest in memory, then use it immediately to rewrite every target
    tree — no manifest file ever touches disk."""
    manifest = build_assets(args.source, args.posts, args.output)
    for target in args.dirs:
        rewrite_tree(Path(target), manifest)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest="command", required=True)

    sync_p = sub.add_parser("sync", help="build the output folder and rewrite asset references in one pass")
    sync_p.add_argument("dirs", nargs="+", help="directories to rewrite asset references in (e.g. out experiments)")
    sync_p.add_argument("--source", default="assets_src")
    sync_p.add_argument("--posts", default="src", help="scan <posts>/*/*.<ext> for co-located post images")
    sync_p.add_argument("--output", default="out/.assets")
    sync_p.set_defaults(func=cmd_sync)

    args = parser.parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
