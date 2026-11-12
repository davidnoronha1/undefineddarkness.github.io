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

`src/<folder>/<slug>.md`, GitHub-flavoured Markdown:

```markdown
---
title: Post title
description: One line for the index, RSS and link previews
date: 2025-01-31          # optional, defaults to the file's first git commit
image: /assets/images/icon.png   # optional, shown top-right
---

> [!NOTE]
> Callouts: NOTE, TIP, IMPORTANT, WARNING, CAUTION

<details>
<summary>Folded section</summary>

Markdown inside HTML needs blank lines around it.

</details>

Math: \(e^{i\pi} + 1 = 0\) inline, or a ```math block (rendered to MathML).

![Images alone on a line become captioned figures](photo.png)

<bar-chart unit="MB" log>

| codec | size |
|---|---|
| h264 | 7.2 |

</bar-chart>

<fn-plot x="-10:10" y="-2:2">

- `sin(x)` sin(x)
- `x - x**3/6` 3rd order

</fn-plot>
```

Anything else (video, PDFs, layouts) is plain HTML: `<video>`, `<object>`, `<div class="split">`, `<div class="slides">`.
