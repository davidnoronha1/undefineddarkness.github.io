#!/bin/bash

# critical-avif-processor.sh
# Process HTML file: inline CSS with critical and convert images to AVIF

set -e  # Exit on any error

# Check if required tools are installed
check_dependencies() {
    local missing_deps=()
    
    if ! command -v bunx &> /dev/null; then
        missing_deps+=("bun")
    fi
    
    if ! command -v convert &> /dev/null; then
        missing_deps+=("imagemagick")
    fi
    
    if [ ${#missing_deps[@]} -ne 0 ]; then
        echo "Error: Missing dependencies: ${missing_deps[*]}" >&2
        echo "Please install the missing tools and try again." >&2
        exit 1
    fi
}

# Convert image to AVIF format
convert_to_avif() {
    local src_path="$1"
    local dest_path="$2"
    
    # Create destination directory if it doesn't exist
    mkdir -p "$(dirname "$dest_path")"
    
    # Use ImageMagick convert to convert to AVIF
    convert "$src_path" -quality 80 "$dest_path"
    
    echo "Converted: $src_path -> $dest_path" >&2
}

# Process images referenced in HTML
process_images() {
    local html_content="$1"
    local processed_html="$html_content"
    
    # Find all image sources (src attributes)
    local img_sources
    img_sources=$(echo "$html_content" | grep -oP 'src="[^"]*\.(png|jpg|jpeg|webp|gif)"' | sed 's/src="//;s/"//' || true)
    
    # Process each image
    while IFS= read -r img_src; do
        if [ -n "$img_src" ]; then
			# Skip external images
			if [[ "$img_src" == http* ]]; then
				continue
			fi
			local src_from_assets=${img_src#*assets/}

            # Extract filename and extension
            local filename=${src_from_assets}
            # filename=$(basename "$img_src")
            local name="${src_from_assets%.*}"
            local ext="${src_from_assets##*.}"

			
            
            # Define source and destination paths
            local src_path="assets_src/$filename"
            local dest_path="assets/${name}.avif"
            local new_src="assets/${name}.avif"
            
            # Check if source file exists
            if [ -f "$src_path" ]; then
                # Convert to AVIF
                convert_to_avif "$src_path" "$dest_path"
                
                # Update HTML content to reference AVIF file
                processed_html=$(echo "$processed_html" | sed "s|$img_src|$new_src|g")
            else
                echo "Warning: Source image not found: $src_path [${img_src}]" >&2
            fi
        fi
    done <<< "$img_sources"
    
    echo "$processed_html"
}

# Main processing function
main() {
    local input_file=""
    local output_file=""
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            -i|--input)
                input_file="$2"
                shift 2
                ;;
            -o|--output)
                output_file="$2"
                shift 2
                ;;
            *)
                echo "Unknown option: $1" >&2
                exit 1
                ;;
        esac
    done
    
    check_dependencies
    
    # Read HTML content
    local html_content
    if [ -n "$input_file" ]; then
        if [ ! -f "$input_file" ]; then
            echo "Error: Input file not found: $input_file" >&2
            exit 1
        fi
        html_content=$(cat "$input_file")
    else
        html_content=$(cat)
    fi
    
    if [ -z "$html_content" ]; then
        echo "Error: No HTML content received" >&2
        exit 1
    fi
    
    # Create temporary file for processing
    local temp_html
    temp_html=$(mktemp --suffix=.html)
    
    # Process images and update HTML
    echo "Processing images..." >&2
    local processed_html
    processed_html=$(process_images "$html_content")
    
    # Write processed HTML to temp file
    # echo "$processed_html" > "$temp_html"
    
    # Use bunx critical to inline CSS
    echo "Inlining critical CSS..." >&2
    local critical_css
    critical_css=$(bunx purgecss --css assets/styles.css --content /dev/stdin <<<"$processed_html" | jq -r .[0].css)
	# printf '%s\n' "${critical_css}"  >&2
    # Cleanup
	processed_html=$(echo "$processed_html" | sed "s|<link rel=\"stylesheet\" href=\"/assets/styles.css\" />|<style>${critical_css}</style>|")
	
	# Output result
	if [ -n "$output_file" ]; then
	    echo "$processed_html" > "$output_file"
	    echo "Output written to: $output_file" >&2
	else
	    echo "$processed_html"
	fi
}

# Handle script arguments
case "${1:-}" in
    --help|-h)
        cat << EOF
Usage: $0 [OPTIONS]

This script processes HTML files by:
1. Converting PNG/JPG images from assets_src/images/ to AVIF in assets/images/
2. Updating image references in the HTML
3. Inlining critical CSS using bunx critical

Options:
  -i, --input FILE    Input HTML file (default: read from stdin)
  -o, --output FILE   Output HTML file (default: write to stdout)
  -h, --help          Show this help message
  -v, --version       Show version information

Requirements:
- bun (with critical package available)
- ImageMagick (convert command)

Directory structure:
assets_src/images/  - Source images (PNG, JPG, etc.)
assets/images/      - Output AVIF images

Examples:
$0 -i index.html -o optimized.html
$0 -i input.html > output.html
cat index.html | $0 -o output.html
cat index.html | $0 > optimized.html
EOF
        exit 0
        ;;
    --version|-v)
        echo "critical-avif-processor v1.0"
        exit 0
        ;;
esac

# Run main function
main "$@"
