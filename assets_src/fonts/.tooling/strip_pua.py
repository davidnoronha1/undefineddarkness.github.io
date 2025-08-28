#!/usr/bin/env -S uv run --script
#
# /// script
# requires-python = ">=3.12"
# dependencies = [ "brotli", "fonttools" ]
# ///
"""
subset_latin_symbols_emoji.py

Usage:
    python subset_latin_symbols_emoji.py input-font.ttf output-font-subset.ttf [--emoji] [--extra "2600-26FF,2700"]

What it does:
 - Keeps Latin ranges (basic + extended + phonetic/diacritics)
 - Keeps symbols: punctuation, math, arrows, box drawing, block/sextants/octants, braille, geometric shapes, etc.
 - Optionally keeps all emoji from the font (--emoji)
 - Keeps glyphs required by composites/GSUB/GPOS automatically
"""

import sys
import argparse
import re
from fontTools import ttLib
from fontTools.subset import Subsetter, Options

# Cleaned Unicode ranges to keep Latin + symbols
DEFAULT_RANGES = [
    "0000-007F","0080-00FF","0100-017F","0180-024F",
    "0250-02AF","02B0-02FF","0300-036F","1AB0-1AFF",
    "1D00-1D7F","1D80-1DBF","1DC0-1DFF","1E00-1EFF",
    "2C60-2C7F","A720-A7FF","AB30-AB6F","10780-107BF",
    "1DF00-1DFFF",
    "2000-206F","2070-209F","20A0-20CF","20D0-20FF",
    "2100-214F","2150-218F","2190-21FF","2200-22FF",
    "2300-23FF","2400-243F","2440-245F","2460-24FF",
    "2500-257F","2580-259F","25A0-25FF","2600-26FF",
    "2700-27BF","27C0-27EF","27F0-27FF","2800-28FF",
    "2900-297F","2980-29FF","2A00-2AFF","2B00-2BFF",
    "2E00-2E7F",
    "1FB00-1FBFF","1CC00-1CEBF",
    "EE00-EE7F","EE80-EEFF","F200-F20F",
    "F240-F27F","F2C0-F2FF","F300-F3FF","FFC00-FFCFF"
]

# Emoji ranges (covers most standard emoji + variation selector)
EMOJI_RANGES = [
    "1F300-1F5FF","1F600-1F64F","1F680-1F6FF",
    "1F700-1F77F","1F780-1F7FF","1F800-1F8FF",
    "1F900-1F9FF","1FA00-1FA6F","1FA70-1FAFF",
    "1FB00-1FBFF","2600-26FF","2700-27BF","FE0F-FE0F"
]

HEX_RE = re.compile(r'^(?:0x)?([0-9A-Fa-f]+)$')

def parse_range_token(tok):
    tok = tok.strip()
    if '-' in tok:
        a, b = tok.split('-', 1)
        return (parse_codepoint(a), parse_codepoint(b))
    else:
        v = parse_codepoint(tok)
        return (v, v)

def parse_codepoint(s):
    s = s.strip()
    m = HEX_RE.match(s)
    if m:
        return int(m.group(1), 16)
    if s.isdigit():
        return int(s, 10)
    try:
        return int(s, 16)
    except Exception:
        return None

def expand_ranges(range_list):
    """Expand list of 'XXXX-YYYY' hex-range strings into a sorted set of ints"""
    out = set()
    for r in range_list:
        if not r:
            continue
        start, end = parse_range_token(r)
        for cp in range(start, end + 1):
            out.add(cp)
    return sorted(out)

def parse_extra_ranges(extra_arg):
    toks = [t.strip() for t in extra_arg.split(',') if t.strip()]
    normalized = []
    for t in toks:
        if '-' in t:
            a,b = t.split('-',1)
            normalized.append(f"{format(parse_codepoint(a),'04X')}-{format(parse_codepoint(b),'04X')}")
        else:
            normalized.append(format(parse_codepoint(t),'04X'))
    return normalized

def add_emoji(unicodes):
    """Add standard emoji codepoints"""
    unicodes.update(expand_ranges(EMOJI_RANGES))
    return unicodes

def main(argv):
    p = argparse.ArgumentParser(description="Subset font to Latin + symbols + optional emoji")
    p.add_argument("infile", help="Input font file (ttf, otf, woff)")
    p.add_argument("outfile", help="Output subset font file")
    p.add_argument("--extra", help="Extra comma-separated codepoints/ranges (e.g. '2600-26FF,2700')", default=None)
    p.add_argument("--emoji", action="store_true", help="Include all emoji characters from font")
    p.add_argument("--dry-run", action="store_true", help="Don't write file; just show summary")
    p.add_argument("--keep-hinting", action="store_true", help="Keep hinting tables")
    args = p.parse_args(argv)

    font = ttLib.TTFont(args.infile)

    ranges = list(DEFAULT_RANGES)
    if args.extra:
        ranges.extend(parse_extra_ranges(args.extra))

    unicodes = set(expand_ranges(ranges))
    if args.emoji:
        unicodes = add_emoji(unicodes)

    print(f"Total codepoints to keep: {len(unicodes)}")

    options = Options()
    options.layout_features = ["*"]
    options.name_IDs = ["*"]
    options.name_legacy = True
    options.name_language = ["*"]
    options.recalc_bounds = True
    options.recalc_timestamp = True
    options.notdef_glyph = True
    options.retain_gids = False
    options.desubroutinize = True
    options.hinting = bool(args.keep_hinting)

    subsetter = Subsetter(options=options)
    subsetter.populate(unicodes=unicodes)
    subsetter.subset(font)

    if args.dry_run:
        print("Dry run complete; not writing file.")
        return

    font.save(args.outfile)
    print(f"Saved subset font to: {args.outfile}")

if __name__ == "__main__":
    main(sys.argv[1:])
