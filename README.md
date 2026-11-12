# Personal Site

Plain Markdown in `src/`, built to `out/` by `build.py`.

## Running

Needs [uv](https://docs.astral.sh/uv/) (it fetches `build.py`'s Python deps itself). Media transcoding uses `avifenc`/`ffmpeg` when present; without uv, `./generate` uses the Docker container instead.

```
./generate               # build everything
./generate src/a/b.md    # build one post (+ index/feeds)
./generate live          # live preview on :5000
make                     # also rebuild the JS bundles (needs bun)
```

## Writing a post

`src/<folder>/<slug>.md`: Markdown, plus a few reusable custom elements.
Line breaks in the source are kept, and Markdown inside HTML tags works
without blank lines.

````markdown
---
title: Post title
description: One line for the index, RSS and link previews
date: 2025-01-31
image: /assets/images/icon.png
---

> [!NOTE]
> Callouts: NOTE, TIP, IMPORTANT, WARNING, CAUTION

<x-fold title="Folded section">
Anything, including code blocks.
</x-fold>

<x-fold title="A fold whose title is a linkable heading" level="3">
</x-fold>

<x-table>
Name	Size	Notes
h264	7.2 MB	**bold**, *italic*, `code`, [links](https://example.com)
</x-table>

<x-table noheader class="tierlist" center="2">
first row is a normal row	centred
</x-table>

<x-chart unit="MB" log title="Size">
protocol	size
jpeg	56.2
h264	7.2
</x-chart>

<x-plot x="-10:10" y="-2:2" title="Taylor series">
sin(x)	sin(x)
x - x**3/6	3rd order
</x-plot>

Math: \(e^{i\pi} + 1 = 0\) inline, or a ```math block (rendered to MathML).

![Images on their own line become captioned figures](photo.png)
````

`date` (defaults to the file's first git commit) and `image` (a small icon
shown top-right) are optional. In `x-table`/`x-chart`/`x-plot`, columns are
separated by tabs (or 2+ spaces) and there must be no blank lines.

### Reusing the elements elsewhere

They're plain web components in `out/.assets/elements.js` (~0.8 KB gzipped;
source `assets_src/other/elements.ts`). On any page:

```html
<script type="module" src="elements.js"></script>
```

`<x-chart>`/`<x-plot>` load `charts.js` (uPlot) from next to `elements.js`,
only when used, so copy both files together. Without JS, table/chart/plot
rows show as preformatted text and folds show open.
