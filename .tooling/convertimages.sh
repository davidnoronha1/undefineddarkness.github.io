#!/bin/bash

# Converts images in ./assets/ to AVIF format using ffmpeg
# Supported input formats: .webp, .png, .jpg, .jpeg
# Skips conversion if output file already exists

find ./assets/ -type f \( -iname '*.webp' -o -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r src; do
  # Get output path by replacing extension with .avif
  out="${src%.*}.avif"
  
  # Skip if output already exists
  if [ -f "$out" ]; then
    echo "Skipping $src (output already exists)"
    continue
  fi
  
  # Create output directory if it doesn't exist
  mkdir -p "$(dirname "$out")"
  
  # Convert image to AVIF with quality 95 using ffmpeg
  ffmpeg -i "$src" -c:v libaom-av1 -crf 23 -still-picture 1 "$out" 2>/dev/null || \
    echo "Error converting $src."
done