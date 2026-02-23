#!/bin/bash

# critical-avif-processor.sh
# Process HTML file: inline CSS with critical and convert images to AVIF

set -e  # Exit on any error

debug_prefix=""
dbg () {
	if [ -n "${optimize_debug:-}" ]; then
		format=$1
		shift
		printf "\033[32mDBG\033[0m${debug_prefix} $format \n" "$@" >&2
	fi
}

# Check if required tools are installed
check_dependencies() {
    local missing_deps=()
    
    if ! command -v bunx &> /dev/null; then
        missing_deps+=("bun")
    fi
    
    if ! command -v ffmpeg &> /dev/null; then
        missing_deps+=("ffmpeg")
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
    
    # Skip if output already exists
    if [ -f "$dest_path" ]; then
        dbg "Skipping: $dest_path (already exists)"
        return 0
    fi
    
    # Create destination directory if it doesn't exist
    mkdir -p "$(dirname "$dest_path")"
    
    # Use ffmpeg to convert to AVIF
    ffmpeg -i "$src_path" -c:v libaom-av1 -crf 28 -still-picture 1 "$dest_path" 2>/dev/null
    
    if [ $? -eq 0 ]; then
        dbg "Converted: $src_path -> $dest_path"
    else
        echo "Error converting: $src_path" >&2
        return 1
    fi
}

# Process images referenced in HTML
process_images() {
    local html_content="$1"
    local html_dir="$2"
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

            # Handle local images (starting with ./ or ../)
            # dbg "Processing local image: $img_src" 
            if [[ $img_src == ./* || $img_src == ../* ]] || [[ $img_src != /assets/* ]]; then
                # if [[ $img_src == ../../assets/* ]]; then
                    # dbg "Skipping image outside project assets: $img_src"
                    # continue
                # fi

                # echo "Processing local image: $img_src"
                # Resolve the path relative to the HTML file directory
                local resolved_src
                # echo "Searching for local image: $img_src in dir: $html_dir" >&2
                if [ -n "$html_dir" ]; then
                    resolved_src=$(cd "$html_dir" && realpath "$img_src")
                else
                    resolved_src=$(realpath "$img_src")
                fi

                resolved_src=${resolved_src/out\/.assets/assets_src}
                
                # Check if source file exists
                if [ ! -f "$resolved_src" ]; then
                    echo "Warning: Local image not found: $resolved_src (from $img_src)" >&2
                    continue
                fi
                
                # Extract filename without extension
                local filename=$(basename "$resolved_src")
                local name="${filename%.*}"
                
                # Define destination path in assets/
                local dest_path="assets/${name}.avif"
                local new_src="/assets/${name}.avif"
                
                # Convert to AVIF
                convert_to_avif "$resolved_src" "$dest_path"
                
                # Update HTML content to reference AVIF file
                processed_html=$(echo "$processed_html" | sed "s|$img_src|$new_src|g")
                
                continue
            fi

			local src_from_assets=${img_src#*assets/}

            # Extract filename and extension
            local filename=${src_from_assets}
            local name="${src_from_assets%.*}"
            local ext="${src_from_assets##*.}"
            
            # Define source and destination paths
            local src_path="assets_src/$filename"
            local dest_path="assets/${name}.avif"
            local new_src="/assets/${name}.avif"
            
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
    local html_dir=""
    
    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --stdin)
                input_file=""
                shift
                ;;
            --resolve)
                html_dir=$(dirname "$2")
                shift 2
                ;;
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
    
    # Determine HTML file directory for resolving relative paths
    # local html_dir=""
    # if [ -n "$input_file" ]; then
    #     html_dir=$(dirname "$input_file")
    # fi
    
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
    local processed_html
    processed_html=$(process_images "$html_content" "$html_dir")
    
    # Use bunx critical to inline CSS
    local critical_css
    critical_css=$(bunx purgecss --css assets/styles.css --content /dev/stdin <<<"$processed_html" | jq -r .[0].css)
    
    # Cleanup
	processed_html=$(echo "$processed_html" | sed "s|<link rel=\"stylesheet\" href=\"/assets/styles.css\" />|<style>${critical_css}</style>|")
	
	# Output result
	if [ -n "$output_file" ]; then
	    echo "$processed_html" > "$output_file"
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
2. Handling local relative images (./ or ../) by copying and converting them
3. Updating image references in the HTML
4. Inlining critical CSS using bunx critical

Options:
  -i, --input FILE    Input HTML file (default: read from stdin)
  -o, --output FILE   Output HTML file (default: write to stdout)
  -h, --help          Show this help message
  -v, --version       Show version information

Requirements:
- bun (with critical package available)
- ffmpeg (for AVIF conversion)

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