# undefineddarkness.github.io

Personal site. Posts are GitHub-flavoured Markdown in `src/`, built to `out/` by a single Python script, `build.py`. See `README.md` for the authoring format.

## Design constraints

The owner dislikes Markdown tables, two-element folds and Markdown syntax extensions: use the reusable custom elements `<x-fold>`, `<x-table>`, `<x-chart>`, `<x-plot>` (runtime web components), not GFM pipe tables, `<details>` or new fence/`:::` syntax.

Deliberately minimal: dark-only, system fonts, one small stylesheet inlined into every page, no JS unless a feature can't work without it — and then it's a self-contained module loaded only by pages that use it (charts), or on demand (the portfolio's three.js viewer loads on click). Prefer plain HTML elements (`<video>`, `<object>`, MathML) over new custom syntax. Keep new features in that spirit.

## Running things

```
./generate               # build.py (all pages) + assets.py sync
./generate <src files>   # rebuild just those posts (+ index/feeds)
./generate live          # live-reload preview (.tooling/hs.py, port 5000)
./generate serve         # static server over the repo (port 5050)
./generate deploy        # build + `bunx vercel`
make                     # rebuild JS bundles (bun) then ./generate
```

`./generate` runs natively when `uv` is installed; otherwise it proxies into the `generate` Docker container (`docker-compose.yml`). `generate.cmd` is the Windows equivalent via Docker.

## Layout

| Path | Role |
|---|---|
| `build.py` | The generator (`uv run --script`, deps pinned inline: markdown-it-py, mdit-py-plugins, pygments, latex2mathml). Front matter -> page metadata; GFM incl. alerts, footnotes, task lists, autolinks; heading anchors; `<x-table>`/`<x-chart>`/`<x-plot>` content passed through raw (their element parses it); pages using any `x-` element get `/assets/elements.js`; source line breaks kept (`white-space: pre-line`, no `<br>`); blank lines auto-inserted around block HTML tags so Markdown inside them parses; pygments highlighting (short class names, coloured in `styles.css`); `\(..\)`, `\[..\]` and ```` ```math ```` -> MathML at build time; images alone on a line -> `<figure>` with alt-text caption; Also writes `out/index.html` (+ root `index.html`), `rss.xml`, `sitemap.xml`, and the minified `out/.assets/styles.css` |
| `template.html` | Page shell; `!TITLE!`, `!DESCRIPTION!`, `!URL!`, `!IMAGE!`, `!CONTENT!` placeholders. Its stylesheet `<link>` is replaced by the inlined CSS |
| `src/index.html` | Index template. Each `!POSTS-<FOLDER>!` placeholder becomes that folder's post list (newest first). Folders without a placeholder (`todo/` drafts) stay off the index, RSS and sitemap |
| `src/*.html` | Hand-written pages (about), copied with CSS inlined |
| `portfolio.html`, `404.html`, `experiments/` | Hand-written pages at the repo root, linking `/assets/styles.css` |
| `assets_src/styles/styles.css` | The one stylesheet. Token names are legacy (`--white*` = backgrounds, `--black*` = text) because experiments/ use them |
| `assets_src/other/elements.ts` | The reusable custom elements `<x-fold>`, `<x-table>`, `<x-chart>`, `<x-plot>` -> `out/.assets/elements.js` (~0.8 KB gz). Usable on any page; chart/plot lazy-load `charts.js` relative to `import.meta.url`. Without JS: raw rows shown preformatted (`:not(:defined)` CSS), folds open |
| `assets_src/other/charts.ts` | uPlot renderers (`chart`, `plot` exports) lazy-loaded by elements.js |
| `assets_src/other/model-viewer.ts` | three.js `<model-viewer>` element; the portfolio loads it on click |
| `assets_src/other/about.css`, `interaction.js`, `chevron*.svg`, `VictorMono-*.woff2` | Assets of the standalone `src/about_fancy.html` page (referenced relatively, since `assets.py` flattens them into `/assets/`) |
| `assets_src/Makefile` | `bun build` for the JS bundles above, committed under `out/.assets/` |
| `.tooling/assets.py` | Media pipeline: walks `assets_src/` + images next to posts in `src/`, content-hashes and AVIF-transcodes raster images (`avifenc`), transcodes video to AV1 `.webm` (`ffmpeg`), copies the rest flat into `out/.assets/`, then rewrites asset references across `out/`, `experiments/`, `rss.xml` and `index.html`. `assets_src/models/` is skipped: models are Git LFS (repo is over budget) and are served from Vercel blob URLs |
| `.tooling/hs.py` | Dev server for `./generate live` (aiohttp + watchfiles; rebuilds changed files via `./generate <file>`) |

## Dates and metadata

Front matter keys: `title`, `description`, `date` (ISO, overrides git), `image` (shown in the post header, small/pixelated), `icon` (social preview image; falls back to `image`, then a site default). Post date = `date`, else the source file's first git commit, else mtime.
