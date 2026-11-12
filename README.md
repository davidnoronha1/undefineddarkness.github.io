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

`src/<folder>/<slug>.md`: Markdown, plus a few shortcuts. Line breaks in the
source are kept, and Markdown inside HTML tags works without blank lines.

````markdown
---
title: Post title
description: One line for the index, RSS and link previews
date: 2025-01-31
image: /assets/images/icon.png
---

> [!NOTE]
> Callouts: NOTE, TIP, IMPORTANT, WARNING, CAUTION

::: Folded section
Anything, including code blocks.
:::

::: ### A fold whose title is a linkable heading
:::

```table
Name	Size	Notes
h264	7.2 MB	**inline markdown works**
```

```table noheader .tierlist center=2
first row is a normal row	centred
```

```chart unit=MB log title="Size"
protocol	size
jpeg	56.2
h264	7.2
```

```plot x=-10:10 y=-2:2
sin(x)	sin(x)
x - x**3/6	3rd order
```

Math: \(e^{i\pi} + 1 = 0\) inline, or a ```math block (rendered to MathML).

![Images on their own line become captioned figures](photo.png)
````

`date` (defaults to the file's first git commit) and `image` (a small icon shown
top-right) are optional. Table/chart/plot columns are separated by tabs (or 2+ spaces). Anything
else is plain HTML: `<video>`, `<object>`, `<div class="split">`,
`<div class="slides">`.
