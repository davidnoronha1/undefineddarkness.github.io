#!/usr/bin/env -S uv run --script
#
# /// script
# requires-python = ">=3.12"
# dependencies = [ "brotli", "fonttools" ]
# ///
"""
subset_legacy_symbols.py

Usage:
    python subset_legacy_symbols.py input-font.woff2 output-font.woff2

Pulls the block-elements / legacy-computing / legacy-computing-supplement /
braille ranges out of a font, plus Basic Latin — the glyphs #CHART/#GNUPLOT's
octant output (.tooling/gnuplot_block.py) and any braille/sextant/octant text
need. Basic Latin has to come along too: gnuplot's octant output mixes plain
ASCII (axis numbers, tick/category labels, titles) in with the block glyphs,
and if U+0020 (space) etc. fall outside this font's unicode-range, the
browser renders them from the *next* font in the stack instead — a different
font's space/digit metrics than this font's block glyphs, which breaks the
monospace character grid the whole octant rendering depends on being uniform.
strip_pua.py already keeps these ranges in FairfaxHD.woff2 alongside its full
Latin+symbol+emoji coverage, which is why that file runs ~730KB; loading all
of that just to render a chart would badly outweigh the markup it's paired
with. Subsetting straight from FairfaxHD.woff2 down to just these ranges
runs in the tens of KB instead — small enough that even a cold cache loading
the font for a single chart still comes out lighter than the interactive
SVG terminal's embedded JS.
"""

import sys
from fontTools import ttLib
from fontTools.subset import Subsetter, Options

RANGES = ["0000-007F", "2580-259F", "1FB00-1FBFF", "1CC00-1CEBF", "2800-28FF"]


def main(argv):
    if len(argv) != 2:
        print(__doc__)
        raise SystemExit(1)
    infile, outfile = argv

    unicodes = set()
    for r in RANGES:
        a, b = r.split("-")
        unicodes.update(range(int(a, 16), int(b, 16) + 1))

    font = ttLib.TTFont(infile)

    options = Options()
    options.layout_features = []
    options.name_IDs = []
    # notdef_glyph/notdef_outline default to True (fontTools' own default,
    # matching strip_pua.py) — turning either off doesn't just drop the
    # literal .notdef glyph, it strips *any* glyph the subsetter treats as
    # empty-outline, which silently swept up "space" (whose outline is
    # legitimately empty) here. Since space fell outside this font's
    # glyph set after that, the browser fell back to a different font for
    # spaces than for the octant glyphs — different metrics, broken
    # character-grid alignment (see the module docstring).
    options.recalc_bounds = True
    options.recalc_timestamp = True
    options.retain_gids = False
    options.desubroutinize = True
    options.hinting = False
    options.legacy_kern = False

    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)

    font.save(outfile)
    print(f"Saved subset font to: {outfile}")


if __name__ == "__main__":
    main(sys.argv[1:])
