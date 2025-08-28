#!/usr/bin/env python3
import fontforge
import sys

if len(sys.argv) != 4:
    print("Usage: copy_emojis.py source_font.ttf target_font.ttf output_font.ttf")
    sys.exit(1)

source_path = sys.argv[1]
target_path = sys.argv[2]
output_path = sys.argv[3]

# Open fonts
source = fontforge.open(source_path)
target = fontforge.open(target_path)

# Emoji Unicode ranges
emoji_ranges = [
    (0x1F300, 0x1F5FF),  # Misc Symbols & Pictographs
    (0x1F600, 0x1F64F),  # Emoticons
    (0x1F680, 0x1F6FF),  # Transport & Map Symbols
    (0x1F900, 0x1F9FF),  # Supplemental Symbols & Pictographs
    (0x1FA70, 0x1FAFF),  # Symbols & Pictographs Extended-A
]

# Copy emojis
for glyph in source.glyphs():
    if glyph.unicode != -1 and any(start <= glyph.unicode <= end for start, end in emoji_ranges):
        try:
            # If the glyph already exists in target, replace it
            target.selection.select(glyph.unicode)
            target.clear()
        except:
            pass
        source.selection.select(glyph.unicode)
        source.copy()
        target.selection.select(glyph.unicode)
        target.paste()

# Save the new font
target.generate(output_path)
print(f"Emojis copied from {source_path} to {output_path}")
