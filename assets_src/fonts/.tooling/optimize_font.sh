#!/bin/bash

# Font to WOFF2 Converter using FontForge
# Usage: ./convert_to_woff2.sh [input_file(s)] [options]

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
OUTPUT_DIR=""
VERBOSE=false
OVERWRITE=false

# Function to display help
show_help() {
    echo "Font to WOFF2 Converter"
    echo ""
    echo "Usage: $0 [OPTIONS] input_file(s)"
    echo ""
    echo "OPTIONS:"
    echo "  -o, --output DIR     Output directory (default: same as input file)"
    echo "  -v, --verbose        Verbose output"
    echo "  -f, --force          Overwrite existing files"
    echo "  -h, --help           Show this help message"
    echo ""
    echo "EXAMPLES:"
    echo "  $0 font.ttf                          # Convert single font"
    echo "  $0 *.ttf *.otf                       # Convert multiple fonts"
    echo "  $0 -o ./woff2 *.ttf                  # Convert to specific directory"
    echo "  $0 -v -f font.ttf                    # Verbose mode with overwrite"
    echo ""
    echo "SUPPORTED INPUT FORMATS:"
    echo "  TTF, OTF, WOFF, SFD, and other FontForge-supported formats"
}

# Function to check if FontForge is installed
check_fontforge() {
    if ! command -v fontforge &> /dev/null; then
        echo -e "${RED}Error: FontForge is not installed or not in PATH${NC}"
        echo "Please install FontForge:"
        echo "  Ubuntu/Debian: sudo apt-get install fontforge"
        echo "  macOS: brew install fontforge"
        echo "  CentOS/RHEL: sudo yum install fontforge"
        exit 1
    fi
}

# Function to convert a single font file
convert_font() {
    local input_file="$1"
    local output_dir="$2"
    
    # Get filename without extension
    local basename=$(basename "$input_file")
    local filename="${basename%.*}"
    
    # Set output path
    if [ -n "$output_dir" ]; then
        local output_file="$output_dir/$filename.woff2"
        mkdir -p "$output_dir"
    else
        local output_file="${input_file%.*}.woff2"
    fi
    
    # Check if output file exists and overwrite flag
    if [ -f "$output_file" ] && [ "$OVERWRITE" = false ]; then
        echo -e "${YELLOW}Warning: $output_file already exists. Use -f to overwrite.${NC}"
        return 1
    fi
    
    if [ "$VERBOSE" = true ]; then
        echo -e "${BLUE}Converting: $input_file → $output_file${NC}"
    fi
    
    # Create FontForge script
    local temp_script=$(mktemp)
    cat > "$temp_script" << EOF
Open("$input_file")
Generate("$output_file")
Quit()
EOF
    
    # Run FontForge conversion
    if fontforge -quiet -script "$temp_script" 2>/dev/null; then
        echo -e "${GREEN}✓ Successfully converted: $basename${NC}"
        
        # Get file sizes for statistics
        local input_size=$(stat -f%z "$input_file" 2>/dev/null || stat -c%s "$input_file" 2>/dev/null)
        local output_size=$(stat -f%z "$output_file" 2>/dev/null || stat -c%s "$output_file" 2>/dev/null)
        
        if [ -n "$input_size" ] && [ -n "$output_size" ]; then
            # Add to totals
            total_input_size=$((total_input_size + input_size))
            total_output_size=$((total_output_size + output_size))
            
            local compression_ratio=$(( (input_size - output_size) * 100 / input_size ))
            local space_saved=$((input_size - output_size))
            
            # Show file sizes if verbose
            if [ "$VERBOSE" = true ]; then
                echo "  Input size:  $(numfmt --to=iec-i --suffix=B $input_size)"
                echo "  Output size: $(numfmt --to=iec-i --suffix=B $output_size)"
                echo "  Space saved: $(numfmt --to=iec-i --suffix=B $space_saved) (${compression_ratio}%)"
            fi
        fi
    else
        echo -e "${RED}✗ Failed to convert: $basename${NC}"
        rm -f "$temp_script"
        return 1
    fi
    
    # Clean up temporary script
    rm -f "$temp_script"
    return 0
}

# Parse command line arguments
POSITIONAL=()
while [[ $# -gt 0 ]]; do
    case $1 in
        -o|--output)
            OUTPUT_DIR="$2"
            shift 2
            ;;
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -f|--force)
            OVERWRITE=true
            shift
            ;;
        -h|--help)
            show_help
            exit 0
            ;;
        *)
            POSITIONAL+=("$1")
            shift
            ;;
    esac
done

# Restore positional parameters
set -- "${POSITIONAL[@]}"

# Check if input files are provided
if [ $# -eq 0 ]; then
    echo -e "${RED}Error: No input files specified${NC}"
    echo "Use -h or --help for usage information"
    exit 1
fi

# Check if FontForge is available
check_fontforge

# Initialize counters
total_files=0
successful_conversions=0
failed_conversions=0
total_input_size=0
total_output_size=0

echo "Starting font conversion to WOFF2..."
echo ""

# Process each input file
for input_file in "$@"; do
    if [ -f "$input_file" ]; then
        total_files=$((total_files + 1))
        if convert_font "$input_file" "$OUTPUT_DIR"; then
            successful_conversions=$((successful_conversions + 1))
        else
            failed_conversions=$((failed_conversions + 1))
        fi
    else
        echo -e "${RED}Warning: File not found: $input_file${NC}"
    fi
done

# Summary
echo ""
echo "Conversion Summary:"
echo "  Total files processed: $total_files"
echo -e "  ${GREEN}Successful: $successful_conversions${NC}"
if [ $failed_conversions -gt 0 ]; then
    echo -e "  ${RED}Failed: $failed_conversions${NC}"
fi

# Show space savings if we have size data
if [ $total_input_size -gt 0 ] && [ $total_output_size -gt 0 ]; then
    total_space_saved=$((total_input_size - total_output_size))
    total_compression_ratio=$(( total_space_saved * 100 / total_input_size ))
    
    echo ""
    echo "Space Usage:"
    echo "  Original size:  $(numfmt --to=iec-i --suffix=B $total_input_size)"
    echo "  Compressed size:$(numfmt --to=iec-i --suffix=B $total_output_size)"
    echo -e "  ${YELLOW}Total space saved: $(numfmt --to=iec-i --suffix=B $total_space_saved) (${total_compression_ratio}%)${NC}"
fi

# Exit with appropriate code
if [ $failed_conversions -gt 0 ]; then
    exit 1
else
    exit 0
fi