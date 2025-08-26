#!/bin/bash

# Converts images in ./assets/ to AVIF format using ImageMagick (magick/convert)
# Supported input formats: .webp, .png, .jpg, .jpeg

find ./assets/ -type f \( -iname '*.webp' -o -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r src; do
  # Get output path by replacing extension with .avif
  out="${src%.*}.avif"
  # Create output directory if it doesn't exist
  mkdir -p "$(dirname "$out")"
  # Convert image to AVIF with quality 95
  convert "$src" -quality 95 "$out" && \
    echo "Converted $src to $out successfully!" || \
    echo "Error converting $src."
done
