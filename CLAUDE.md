# undefineddarkness.github.io

Personal site + custom bash/python static site generator ("pond"/"generate"). Content is authored in Markdown/HTML with a custom directive syntax (`#HEADER`, `#GNUPLOT`, `#CHART`, etc.), transformed by a bash pipeline, and built into `out/`.

## Running things

Everything goes through `./generate`, which — when run *outside* Docker — transparently proxies into the `generate` container (`docker compose exec generate ./generate "$@"`), starting it if needed. So on the host you just run `./generate ...` as if it were native; on Windows, `generate.cmd` does the same via `docker compose exec`.

```
./generate            # full build: src/ -> out/, plus index/rss/sitemap, plus asset sync
./generate live       # live rebuild + browser preview (hs.py, port 5000)
./generate serve      # plain static file server over out/ (port 5050)
./generate deploy     # build + minify + `bunx vercel`
./generate minify-out  # HTML-minify everything already in out/
./generate rm <slug>  # delete a built post + its .md source, then regen the index
./generate winfix     # dos2unix the whole src/ tree (CRLF from Windows editors)
./generate dbg <file> # run pond.sh in debug mode on one file, verbose transformer trace
```

`make` at the repo root wraps the CSS/JS asset build + `./generate` into a single `make build` (see root `Makefile`).

## Docker image (tools available at build time)

`Dockerfile` is based on `ghcr.io/astral-sh/uv:debian-slim` (so `uv`/`uv run` is always available for the `.tooling/*.py` scripts, each of which is a PEP 723 inline-metadata script run via `uv run --script`). Installed on top:

- `bash`, `make`, `perl` — the actual build pipeline is bash + perl regex, not a JS toolchain
- `bun` (installed via the official install script, not apt) — used for the TS asset bundling (`bun build`), running `postcss`/`html-minifier-terser` via `bunx`, and as `node_runner` fallback in `generate`
- `imagemagick` — raster image processing
- `libavif-bin` — AVIF transcoding for images (`assets.py`'s image pipeline hashes + converts raster assets to `.avif`)
- `gnuplot-nox` — renders `#GNUPLOT`/`#CHART` directives (including the octant/braille terminal-text charts)
- `highlight` — server-side syntax highlighting for fenced code blocks (falls back to a dummy/CDN highlight.js path if unavailable, see `.tooling/initial.sh`)
- `fontforge-nox` — font manipulation/subsetting for custom glyph work (e.g. the octant font used by `ascii-model-viewer`)
- `jq`, `curl`, `unzip`, `ca-certificates` — general scripting/fetch utilities
- `python3` — python3 stdlib is what most `.tooling/*.py` scripts actually need; `uv run` handles any extra deps per-script
- `dos2unix` — used by `./generate winfix`

`package.json` deps installed via `bun install`: `three` (3D model viewers), `mathjax-full` (build-time math rendering), `postcss`/`postcss-import`/`cssnano` (CSS build), `purgecss` (critical CSS extraction in `optimize_page.sh`), `html-minifier-terser`, `rollup`/`@rollup/plugin-node-resolve` (bundling).

`docker-compose.yml` bind-mounts the whole repo into `/app` and keeps the container alive (`sleep infinity`) after `bun install`, so `./generate` on the host is just `docker compose exec`-ing into an already-warm container rather than paying image/install cost per invocation. Ports 5000 (`generate live`) and 5050 (`generate serve`) are exposed.

## Script inventory

### Root

| File | Role |
|---|---|
| `generate` | The SSG driver. Host/container dispatch, per-file build loop, index/RSS/sitemap generation, HTML minification, `deploy` |
| `generate.cmd` | Windows equivalent (just shells out to `docker compose exec`) |
| `template.html` | Page shell. Split by the generator on the `!CONTENT!` marker into pre/post-content halves; per-page placeholders (`!TITLE!`, `!URL!`, `!DESCRIPTION!`, `!IMAGE!`, `!DOCUMENT-PATH!`) get substituted in |
| `Makefile` | `make build` = `assets_src` CSS + other-asset build, then `./generate` |

### `.tooling/` — the markup pipeline ("pond")

| File | Role |
|---|---|
| `pond.sh` | Entry point for converting one `.md`/`.html` source file to markup. Sources the other `.sh` files, runs `initial_transformer` then dispatches `#DIRECTIVE` blocks to functions in `transformers.sh`, then `final_transformer` |
| `initial.sh` | Line-by-line pre-pass: detects `#DIRECTIVE ... #END DIRECTIVE` blocks and code fences, tracks nesting, handles inline `\(...\)` math via `render_math.ts`, hands off matched blocks to `transformers.sh` functions |
| `transformers.sh` | One bash function per directive: `box`, `callout` (`#CALLOUT`), `f` (`#FOLD`), `right_align`/`center`/`preserve_center`, `header` (`#HEADER`), `gnuplot` (`#GNUPLOT`), `chart` (`#CHART`, data-driven wrapper around `chart.py`+gnuplot), `pdf`/`pdfi` (`#PDF`), `redirect`, `video` (`#VIDEO`), `wip`, `verbatim`, `carousel`, `columns`, `table` |
| `final.sh` | Post-pass: inline code spans, `**bold**`/`*italic*`/`~~strike~~`/`==mark==`, `![alt](src)` -> `<figure>`, `[text](url)` -> `<a>`, bare-URL autolinking, optional carousel `<script>` injection |
| `helpers.sh` | Shared utilities: logging (`warn`/`err`/`dbg`), `slice`/`snip`/`trim`, `get-functions` (directive dispatch table), `calc`/`ms`/`timer`, `escape_code_block`, `protect_raw_block` (shields chart/gnuplot HTML output from the markdown-lite regex pass in `final.sh`) |
| `assets.py` | `uv run` script. Single-pass asset pipeline: walks `assets_src/` + co-located post images in `src/`, content-hashes + AVIF-transcodes raster images, transcodes raw video to AV1/Opus `.webm` in place, copies everything else through flattened into `out/.assets/`, then rewrites every asset reference (`src=`, `href=`, `url()`, `import`, etc.) across `out/`, `rss.xml`, and root `index.html` to match. Invoked as `assets.py sync <dirs...>` at the end of every `./generate` run |
| `chart.py` | `uv run` script backing `#CHART`: turns tab-separated category/series data into a gnuplot script (grouped boxes + hypertext anchors), rendered as SVG or octant/braille terminal text |
| `gnuplot_block.py` | Converts gnuplot's `block`/octant terminal output (Unicode block glyphs + ANSI truecolor SGR) into an HTML `<pre>` with matching `<span>` colors — the non-SVG rendering path for `#GNUPLOT`/`#CHART` |
| `gfm.py` | `uv run` script wrapping `cmarkgfm` — used instead of `pond.sh` when building inside `ricing-guide/` (plain GitHub-flavored markdown, no custom directives) |
| `render_math.ts` | Build-time TeX rendering (MathJax) for `\(...\)` inline math and fenced math blocks |
| `hs.py` | `uv run` script: the dev server behind `./generate live` — aiohttp static server with gzip/br compression, a `/ws` endpoint, and a `watchfiles`-driven live-reload loop that re-invokes `fsw.py`/`generate` on source changes |
| `fsw.py` | Tiny `watchfiles` watcher over `src/` that prints changed `.md`/`.html` paths, one per line, for `hs.py` to consume |
| `syntax.theme` | Theme file for the `highlight` CLI's syntax-highlighted code blocks |
| `sync_with_personal.sh` | One-off script to mirror `.tooling`, `generate`, and CSS between this repo and a sibling personal fork |
| `generate.py` | Unused/incomplete argparse stub — not wired into `generate` |

### `assets_src/` — pre-build asset sources

| File | Role |
|---|---|
| `Makefile` | Builds `styles/styles.css` -> `out/.assets/styles.css` via `postcss`; bundles `other/*.ts` (three.js custom elements) -> `out/.assets/*.js` via `bun build --bundle --minify` |
| `.tooling/optimize_page.sh` | Per-page critical-CSS step: purges `out/.assets/styles.css` down to what a given built page actually uses (via `purgecss`) and inlines it, run on every page by `generate`'s `build_md`/`generate_index` |
| `other/*.ts` | Custom elements bundled standalone (not through the main site JS, since there mostly isn't any) — e.g. `ascii-model-viewer.ts`, `wireframe-model-viewer.ts`, both three.js-based `<model-viewer>`-style web components that render 3D models as terminal/wireframe art |
| `styles/`, `fonts/`, `icons/`, `images/`, `models/`, `documents/`, `videos/` | Raw asset sources picked up by `assets.py`'s sync pass — not symlinked, just walked and flattened into `out/.assets/` |

## SSG structure

**Source -> output mapping**: `src/**/*.md`, `src/**/*.org`, `src/**/*.html` each build to the same relative path under `out/`, with `.md`/`.org` extensions swapped to `.html`. `assets` at the repo root is a symlink to `out/.assets`.

**Build flow** (`./generate`, no subcommand):
1. Split `template.html` on `!CONTENT!` into `template_pre_content` / `template_post_content`.
2. Rebuild `out/.assets/styles.css` first (via `assets_src` Makefile) — page-level critical-CSS purging later in the same run depends on this being current.
3. Walk every `src/**/*.{html,md,org}` and build it (in parallel background jobs, `wait`ed at the end):
   - `.md` -> `pond.sh` (custom directive markup) or, inside `ricing-guide/`, `gfm.py` (plain GFM) -> heading/meta extracted for the template placeholders -> concatenated with the template halves -> `optimize_page.sh` (critical CSS inline) -> written to `out/`.
   - `.html` -> copied through as-is (`build_html`).
   - `.org` -> `build_org` (Emacs-based, see `generate_org_full`).
4. `generate_index` — rebuilds `src/index.html` -> `out/index.html` (and mirrors to root `index.html`) by substituting each `!POSTS-<FOLDER>!` placeholder with an `<li>` list of that folder's posts, sorted newest-first by `get_article_date` (prefers an explicit `post_date=` HTML comment override, then git first-commit date, then mtime).
5. `generate_rss` / `generate_sitemap` — same per-article date/metadata scan, emitted as `rss.xml` / `sitemap.xml`.
6. `make -s -C assets_src build-regen` — rebuild CSS again (cheap, picks up anything touched mid-build).
7. `.tooling/assets.py sync out experiments` — the one asset pass: hash/transcode/flatten everything from `assets_src/` + co-located post images into `out/.assets/`, then rewrite every asset reference across `out/`, `experiments/`, `rss.xml`, and root `index.html` to point at the resulting hashed filenames.

**Per-page metadata**: pulled out of the rendered markup via HTML comments authors can drop in source — `<!-- post_description=... -->`, `<!-- post_image=... -->`, `<!-- post_date=... -->` — read by `format_doc_heading`/`get_article_date` in `generate`.

**Directive markup**: content files use a custom `#DIRECTIVE ... #END DIRECTIVE` block syntax (plus a `**bold**`/`*italic*`/`` `code` ``/etc. markdown-lite pass) handled by the pond pipeline — see `transformers.sh` above for the full directive list. Reference examples: `out/2021/lorem.html`, `out/2022/nesdown.html` (per `README.md`).
