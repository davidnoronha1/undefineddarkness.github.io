#!/usr/bin/env python3
"""
Renders a #CHART directive (tab-separated category + series data) to a
chart, in one of three forms:

  - default: gnuplot's own `block` terminal (Unicode octant/braille
    characters with ANSI truecolor, `set terminal block octant ansirgb`
    — native to gnuplot >= 6.0, see `gnuplot -e "set terminal"`),
    converted to HTML by gnuplot_block.py. Measured against this
    project's own gnuplot 6.0: a plain (non-interactive, no embedded JS)
    SVG for a small 4-category/2-series chart runs ~20KB; the block/octant
    rendering of the same data runs well under 10KB and typically much
    less. Since a plain SVG has no advantage over block/octant text (same
    lack of interactivity, several times the weight), it's no longer the
    default — pass --svg or --interactive if you actually want one.
  - --svg: plain static SVG, no embedded JS, no hover tooltips. For when
    you specifically want vector output (crisp at any zoom, print-friendly)
    but don't need interactivity.
  - --interactive (implies --svg): the "mouse standalone" SVG terminal,
    with real hover tooltips (gnuplot's own gnuplot_svg.js, embedded
    inline — no chart JS of ours ships to the browser).

Grouped bars in the interactive path need two overlapping plot layers per
series: the visible `with boxes` bars, and a `with labels ... point
hypertext` anchor at each bar's data point (gnuplot only attaches
hypertext to point/label marks — not to boxes, and not to lines either,
both tried and rejected — see the #GNUPLOT hypertext comment in
transformers.sh for the hand-written version of this). The anchor point is
drawn at ps 1 (not scaled to ~0) and given the same color as its bar:
gnuplot's SVG terminal only hit-tests actually-painted geometry, so a
near-zero-size point has no area to trigger mousemove on and the tooltip
never fires — a same-color dot at ps 1 blends into the bar top while
staying big enough to hover. (Covering the bar's *entire* height this way
means stacking dozens of these dots per bar, which was tried and measured
to balloon the embedded SVG past a megabyte for a single chart — not worth
it for now, so only the bar's top is hoverable.) This script generates
that boilerplate from plain tab-separated data instead of requiring every
article to hand-write it.

Usage: chart.py --title "..." [--unit Mbps] [--ylog] [--width 700] [--height 400] [--svg | --interactive] < data.tsv

Input format (tab-separated, header row = series names, first column of
each row = category name):
    category	Series A	Series B
    Row 1	8	16
    Row 2	4	8
"""

import argparse
import subprocess
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).parent))
from gnuplot_block import ansi_to_html

PALETTE = ["#BAE1FF", "#85B7EB", "#FFDFBA", "#FFB347", "#BAFFC9", "#C9BAFF", "#FFBAF3", "#F0F0F0"]


def gp_str(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')


def pixels_to_char_grid(width: int, height: int) -> tuple[int, int]:
    """The block terminal's `size` is in character cells, not pixels, but
    #CHART/#GNUPLOT directives are authored with pixel width=/height=
    (shared with the svg terminal) — approximate a terminal cell as 8x16px
    so existing width=/height= attrs carry over without new syntax."""
    cols = max(40, min(200, round(width / 8)))
    rows = max(15, min(60, round(height / 16)))
    return cols, rows


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--title", default="")
    p.add_argument("--unit", default="")
    p.add_argument("--ylog", action="store_true")
    p.add_argument("--width", type=int, default=700)
    p.add_argument("--height", type=int, default=400)
    p.add_argument("--svg", action="store_true", default=False)
    p.add_argument("--interactive", action="store_true", default=False)
    p.add_argument("--no-interactive", dest="interactive", action="store_false")  # explicit synonym for the default
    args = p.parse_args()
    args.svg = args.svg or args.interactive  # interactive implies svg

    rows = [line.split("\t") for line in sys.stdin.read().strip("\n").split("\n")]
    header, *data_rows = rows
    series = header[1:]
    categories = [r[0] for r in data_rows]
    values = [[float(v) for v in r[1:]] for r in data_rows]  # values[row][series]

    n, m = len(series), len(categories)
    box_w = 0.8 / n
    offsets = [(i - (n - 1) / 2) * box_w for i in range(n)]

    xtics = ", ".join(f'"{gp_str(c)}" {i + 1}' for i, c in enumerate(categories))

    if args.svg:
        mouse = "mouse " if args.interactive else ""
        terminal_line = (
            f'set terminal svg {mouse}standalone size {args.width},{args.height} '
            f'dynamic enhanced font "Arial,10" background rgb "#111"'
        )
        text_color = "white"  # against the svg terminal's own dark (#111) background
    else:
        cols, char_rows = pixels_to_char_grid(args.width, args.height)
        terminal_line = f"set terminal block octant ansirgb size {cols},{char_rows}"
        # The octant path is embedded in .gnuplot-container pre, styled via
        # var(--white-lighter)/var(--black-darker) (see minor.css) — the
        # site is dark-mode only now, so those resolve to a dark background
        # and light text, same as the svg path above.
        text_color = "white"

    lines = [
        terminal_line,
        "set output '|cat'",
        f'set border lc rgb "{text_color}"',
        f'set tics textcolor rgb "{text_color}"',
        f'set key tc rgb "{text_color}" outside right top',
        f'set title tc rgb "{text_color}"',
        f'set ylabel tc rgb "{text_color}"',
        f'set title "{gp_str(args.title)}"' if args.title else "",
        f'set ylabel "{gp_str(args.unit)}"' if args.unit else "",
        f"set xtics ({xtics}) nomirror",
        "set ytics nomirror",
        # Each category's bar group is always 0.8 units wide (box_w * n),
        # so its outer edge sits 0.4 from the tic center regardless of n —
        # padding of 0.5 above left only ~0.1 of visible gap before the
        # y-axis; 0.75 leaves a more comfortable ~0.35.
        f"set xrange [{0.5 - 0.25}:{m + 0.5 + 0.25}]",
        f"set boxwidth {box_w:.4f}",
        "set style fill solid 0.85",
        # Gridlines cost real bytes in the octant path (each crossing is a
        # distinct anti-aliased blend color -> its own <span>) for little
        # benefit — octant text isn't read for precise values the way a
        # vector chart is, so skip them there.
        "set grid ytics lc rgb '#444'" if args.svg else "",
        "set logscale y" if args.ylog else "",
    ]

    plot_specs = []
    for i, s in enumerate(series):
        color, off = PALETTE[i % len(PALETTE)], offsets[i]
        plot_specs.append(f"'-' using ($1{off:+.4f}):2 with boxes lc rgb '{color}' title \"{gp_str(s)}\"")
    if args.interactive:
        # Hypertext tooltips only make sense with the "mouse" terminal —
        # skip this layer entirely for static (non-interactive) output.
        for i, s in enumerate(series):
            color, off = PALETTE[i % len(PALETTE)], offsets[i]
            unit_suffix = f" {gp_str(args.unit)}" if args.unit else ""
            plot_specs.append(
                f"'-' using ($1{off:+.4f}):2:(sprintf(\"%s — {gp_str(s)}: %g{unit_suffix}\", "
                f"stringcolumn(3), $2)) with labels point pt 7 ps 1 lc rgb '{color}' hypertext notitle"
            )
    lines.append("plot " + ", \\\n     ".join(plot_specs))

    # Each plot spec above reads its own copy of the data from stdin. The
    # boxes layer always needs one pass; the hypertext layer (if present)
    # needs the same data repeated again.
    passes = 2 if args.interactive else 1
    for _pass in range(passes):
        for i in range(n):
            for row_i, cat in enumerate(categories):
                lines.append(f'{row_i + 1} {values[row_i][i]:g} "{gp_str(cat)}"')
            lines.append("e")

    script = "\n".join(line for line in lines if line) + "\n"

    result = subprocess.run(["gnuplot"], input=script.encode(), capture_output=True)
    if result.returncode != 0:
        print(result.stderr.decode(errors="replace"), file=sys.stderr)
        raise SystemExit(1)

    if args.svg:
        out = result.stdout
        if args.interactive:
            # gnuplot's mouse-mode boilerplate emits the coordinate-readout
            # <text> (toggled by clicking the plot) with no fill color, so
            # it defaults to black — invisible against our dark (#111) plot
            # background. Force it white. (The hypertext tooltip box is
            # unaffected — it already draws its own white background rect.)
            out = out.replace(
                b'<text id="coord_text" text-anchor="start" pointer-events="none"',
                b'<text id="coord_text" text-anchor="start" pointer-events="none" fill="white"',
            )
        sys.stdout.buffer.write(out)
    else:
        html_out = ansi_to_html(result.stdout.decode("utf-8", errors="replace"))
        sys.stdout.write(html_out)


if __name__ == "__main__":
    main()
