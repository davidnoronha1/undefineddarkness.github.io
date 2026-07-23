#!/bin/bash

# critical-css-processor.sh
# Process HTML file: inline critical CSS via purgecss.
#
# Image/asset resolution used to live here too, but that's now handled
# globally (after every page is built) by `.tooling/assets.py rewrite-tree`
# — this script only does the critical-CSS purge/inline step now.

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

    if [ ${#missing_deps[@]} -ne 0 ]; then
        echo "Error: Missing dependencies: ${missing_deps[*]}" >&2
        echo "Please install the missing tools and try again." >&2
        exit 1
    fi
}

# Main processing function
main() {
    local input_file=""
    local output_file=""

    # Parse arguments
    while [[ $# -gt 0 ]]; do
        case $1 in
            --stdin)
                input_file=""
                shift
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

    # Use bunx purgecss to compute critical CSS
    local critical_css
    critical_css=$(bunx purgecss --css assets/styles.css --content /dev/stdin <<<"$html_content" | jq -r .[0].css)

    # Inline it in place of the stylesheet link
    local processed_html
    processed_html=$(echo "$html_content" | sed "s|<link rel=\"stylesheet\" href=\"/assets/styles.css\" />|<style>${critical_css}</style>|")

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

This script inlines critical CSS (via bunx purgecss) into an HTML file.
Asset reference rewriting (images/icons/fonts/etc.) is handled separately
by .tooling/assets.py rewrite-tree, run once over the whole out/ tree after
all pages are built.

Options:
  -i, --input FILE    Input HTML file (default: read from stdin)
  -o, --output FILE   Output HTML file (default: write to stdout)
  -h, --help          Show this help message
  -v, --version       Show version information

Requirements:
- bun (with purgecss package available)

Examples:
$0 -i index.html -o optimized.html
$0 -i input.html > output.html
cat index.html | $0 -o output.html
cat index.html | $0 > optimized.html
EOF
        exit 0
        ;;
    --version|-v)
        echo "critical-css-processor v2.0"
        exit 0
        ;;
esac

# Run main function
main "$@"
