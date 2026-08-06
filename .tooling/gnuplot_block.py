#!/usr/bin/env python3
"""
Converts gnuplot's `block` terminal output (Unicode octant/block glyphs
with ANSI truecolor SGR escapes — `set terminal block octant ansirgb`) to
an HTML <pre> fragment with the same colors as <span> runs.

Why: gnuplot >= 6.0 ships this terminal natively (pseudo-graphics using
Unicode block/braille/octant characters, see `gnuplot -e "set terminal"`),
so #CHART/#GNUPLOT no longer need the svg terminal for the default,
non-interactive case — and octant-terminal output for a small chart runs
under 1KB versus ~20KB for the plain (non-interactive, no embedded JS) svg
terminal, measured directly against this project's own gnuplot 6.0. The
"real" interactive SVG (mouse standalone, hover tooltips) is still used
when a chart explicitly asks for it — see chart.py --interactive and
transformers.sh's gnuplot() interactive=true.

Usage: gnuplot ... | python3 gnuplot_block.py [--class NAME]
"""

import argparse
import html
import re
import sys

# SGR sequences gnuplot's block terminal actually emits: plain resets (0,
# 22, 39, 49) and 24-bit truecolor foreground/background (38;2;r;g;b /
# 48;2;r;g;b). No other SGR codes are expected from this terminal.
SGR_RE = re.compile(r"\x1b\[([0-9;]*)m")

# Anti-aliasing at glyph edges (e.g. where a bar boundary falls mid-octant)
# makes gnuplot emit a run of near-identical colors, one shade apart, each
# only a character or two wide — every shade is its own <span>, which costs
# far more in markup overhead than the 1-2 glyphs it wraps saves. Quantizing
# merges those blends into their neighbor without visibly changing flat
# plot-palette colors, which differ by much more than one quantize step.
_QUANT_STEP = 20


def _quantize(rgb):
    if rgb is None:
        return None
    return tuple(min(255, round(c / _QUANT_STEP) * _QUANT_STEP) for c in rgb)


def ansi_to_html(text: str, css_class: str = "gnuplot-block") -> str:
    out = [f'<pre class="{css_class}">']
    pos = 0
    fg = None
    bg = None
    run = []

    def flush():
        if not run:
            return
        chunk = html.escape("".join(run))
        styles = []
        if fg:
            styles.append(f"color:#{fg[0]:02x}{fg[1]:02x}{fg[2]:02x}")
        if bg:
            styles.append(f"background:#{bg[0]:02x}{bg[1]:02x}{bg[2]:02x}")
        if styles:
            out.append(f'<span style="{";".join(styles)}">{chunk}</span>')
        else:
            out.append(chunk)
        run.clear()

    for m in SGR_RE.finditer(text):
        run.append(text[pos:m.start()])
        params = [p for p in m.group(1).split(";") if p != ""]
        new_fg, new_bg = fg, bg
        i = 0
        while i < len(params):
            code = params[i]
            if code == "0":
                new_fg = new_bg = None
            elif code == "39":
                new_fg = None
            elif code == "49":
                new_bg = None
            elif code == "38" and params[i:i + 2][1:2] == ["2"] and len(params) >= i + 5:
                new_fg = _quantize((int(params[i + 2]), int(params[i + 3]), int(params[i + 4])))
                i += 4
            elif code == "48" and params[i:i + 2][1:2] == ["2"] and len(params) >= i + 5:
                new_bg = _quantize((int(params[i + 2]), int(params[i + 3]), int(params[i + 4])))
                i += 4
            # else: unrecognized SGR code (e.g. 22 = normal intensity) — no-op
            i += 1
        # Only break the current run if the color actually changed after
        # quantization — an anti-aliased blend that rounds back to the same
        # bucket as its neighbor just keeps extending the existing span.
        if (new_fg, new_bg) != (fg, bg):
            flush()
            fg, bg = new_fg, new_bg
        pos = m.end()

    run.append(text[pos:])
    flush()
    out.append("</pre>")
    return "".join(out)


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--class", dest="css_class", default="gnuplot-block")
    args = p.parse_args()
    text = sys.stdin.buffer.read().decode("utf-8", errors="replace")
    sys.stdout.write(ansi_to_html(text, args.css_class))


if __name__ == "__main__":
    main()
