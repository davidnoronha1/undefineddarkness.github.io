#!/usr/bin/env -S uv run --script
#
# /// script
# requires-python = ">=3.12"
# dependencies = [ "brotli", "fonttools" ]
# ///
"""
subset_octant.py

Usage:
    python subset_octant.py input-font.woff2 output-font.woff2

Subsets a font down to just ASCII + the glyphs gnuplot's `block octant`
terminal draws with: Block Elements (reused for the octant patterns that
coincide with existing half/full blocks) and the Symbols for Legacy
Computing Supplement block (the actual octant glyphs). Everything else
(Latin extended, emoji, box drawing, etc.) is dropped.
"""

import sys
import argparse
from fontTools import ttLib
from fontTools.subset import Subsetter, Options

RANGES = [
    "0000-007F",  # Basic Latin (ASCII) — axis labels, titles, legends, borders
    "0080-00FF",  # Latin-1 Supplement — includes U+00A0 NBSP, which gnuplot emits
    "2580-259F",  # Block Elements — octant patterns that reuse existing block glyphs
    "1CC00-1CEBF",  # Symbols for Legacy Computing Supplement — the octant glyphs
]


def expand_ranges(range_list):
    out = set()
    for r in range_list:
        start, end = r.split("-")
        out.update(range(int(start, 16), int(end, 16) + 1))
    return out


def main(argv):
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("infile", help="Input font file (woff2, ttf, otf)")
    p.add_argument("outfile", help="Output subset font file")
    args = p.parse_args(argv)

    font = ttLib.TTFont(args.infile)
    unicodes = expand_ranges(RANGES)

    options = Options()
    options.layout_features = []
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.name_language = ["*"]
    options.recalc_bounds = True
    options.recalc_timestamp = True
    options.notdef_glyph = True
    options.retain_gids = False
    options.desubroutinize = True
    options.hinting = False

    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)

    font.save(args.outfile)
    print(f"Saved octant+ASCII subset ({len(unicodes)} codepoints) to: {args.outfile}")


if __name__ == "__main__":
    main(sys.argv[1:])
