#!/usr/bin/env -S uv run --script
#
# /// script
# requires-python = ">=3.12"
# dependencies = [ "beautifulsoup4", "pillow", "pillow-avif-plugin" ]
# ///
import sys
import argparse
import shutil
import subprocess
from pathlib import Path
from bs4 import BeautifulSoup
from PIL import Image
import pillow_avif  # enable AVIF support

HTML_DIR = Path("./out")
SRC_DIR = Path("./assets_src")
DST_DIR = Path("./assets")   # ./out/assets is symlinked here

total_original_bytes = 0
total_processed_bytes = 0
used_images = set()  # track all images actually referenced

# --- Output Formatting ---

class Color:
    """ANSI color codes for formatted output."""
    # Disable colors if not a TTY
    if sys.stdout.isatty():
        RED = '\033[0;31m'
        GREEN = '\033[0;32m'
        YELLOW = '\033[1;33m'
        BLUE = '\033[0;34m'
        CYAN = '\033[0;36m'
        NC = '\033[0m'  # No Color
    else:
        RED = GREEN = YELLOW = BLUE = CYAN = NC = ''

def format_bytes(size_bytes):
    """Formats bytes into a human-readable string (KB, MB, etc.)."""
    if size_bytes == 0:
        return "0 B"
    power = 1024
    n = 0
    power_labels = {0: '', 1: 'K', 2: 'M', 3: 'G', 4: 'T'}
    while size_bytes >= power and n < len(power_labels):
        size_bytes /= power
        n += 1
    return f"{size_bytes:.1f} {power_labels[n]}B"

# --- Core Logic ---

def copy_original(src_path: Path, rel_path: Path) -> tuple[Path, int, int]:
    """Copy file unchanged into assets/ and return destination path + sizes."""
    dst_path = DST_DIR / rel_path
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    if not dst_path.exists():
        shutil.copy2(src_path, dst_path)

    orig_size = src_path.stat().st_size
    dst_size = dst_path.stat().st_size
    print(f"{Color.BLUE}↳ Copied (unchanged): {rel_path}{Color.NC} ({format_bytes(orig_size)})")
    return dst_path, orig_size, dst_size


def convert_to_avif(src_path: Path, rel_path: Path) -> tuple[Path, int, int]:
    """
    Convert source image from assets_src to assets as .avif.
    Returns (dst_path, orig_size, new_size)
    """

    print(Path.cwd() / src_path)
    orig_size = (Path.cwd() / src_path).resolve().stat().st_size

    # Rule: If file is very small, just copy it.
    if orig_size < 1024 * 0.5:
        return copy_original(src_path, rel_path)

    # Handle SVGs separately with its own optimizer
    if src_path.suffix.lower() == ".svg":
        return optimize_svg(src_path, DST_DIR / rel_path)

    dst_path = DST_DIR / rel_path.with_suffix(".avif")
    dst_path.parent.mkdir(parents=True, exist_ok=True)

    if dst_path.exists():
        avif_size = dst_path.stat().st_size
        print(f"{Color.YELLOW}● Skipped (exists): {dst_path.name}{Color.NC}")
        return dst_path, orig_size, avif_size

    try:
        with Image.open(src_path) as im:
            # Preserve animation if present
            im.save(dst_path, "AVIF", save_all=im.is_animated)

        avif_size = dst_path.stat().st_size
        saved = orig_size - avif_size
        percent = (saved / orig_size * 100) if orig_size > 0 else 0
        
        size_info = f"{format_bytes(orig_size)} → {format_bytes(avif_size)}"
        savings_info = f"saved {format_bytes(saved)} ({percent:.1f}%)"
        print(f"{Color.GREEN}✓ Converted: {rel_path}{Color.NC}  ({size_info}, {savings_info})")

        return dst_path, orig_size, avif_size
    except Exception:
        # If Pillow cannot identify the file, just copy the original
        return copy_original(src_path, rel_path)


def optimize_svg(src_path: Path, dst_path: Path) -> tuple[Path, int, int]:
    dst_path.parent.mkdir(parents=True, exist_ok=True)
    try:
        # Check if svgo is available via bunx
        if not shutil.which("bun"):
             print(f"{Color.YELLOW}⚠️ bun not found, cannot optimize SVG. Copying instead.{Color.NC}")
             return copy_original(src_path, src_path.relative_to(SRC_DIR))

        subprocess.run(
            ["bunx", "svgo", "-q", "-o", str(dst_path), "-i", str(src_path)],
            check=True, capture_output=True
        )

        orig_size = src_path.stat().st_size
        new_size = dst_path.stat().st_size
        saved = orig_size - new_size
        percent = (saved / orig_size * 100) if orig_size > 0 else 0

        size_info = f"{format_bytes(orig_size)} → {format_bytes(new_size)}"
        savings_info = f"saved {format_bytes(saved)} ({percent:.1f}%)"
        print(f"{Color.GREEN}✓ Optimized SVG: {src_path.name}{Color.NC} ({size_info}, {savings_info})")
        
        return dst_path, orig_size, new_size
    except (subprocess.CalledProcessError, FileNotFoundError) as e:
        print(f"{Color.RED}✗ SVG optimization failed for {src_path.name}. Copying instead.{Color.NC}")
        print(f"  Reason: {e}")
        return copy_original(src_path, src_path.relative_to(SRC_DIR))


def process_html_file(html_path: Path, convert: bool = True):
    global total_original_bytes, total_processed_bytes

    print(f"\n{Color.CYAN}Processing HTML: {html_path.relative_to(HTML_DIR)}{Color.NC}")
    with html_path.open("r", encoding="utf-8") as f:
        soup = BeautifulSoup(f, "html.parser")

    changed = False

    for img in soup.find_all("img", src=True):
        src = img["src"]
        
        # Only process local asset paths
        if not src.startswith("/assets/"):
            continue

        rel_path = Path(src[len("/assets/"):])
        src_path = SRC_DIR / rel_path

        used_images.add(src_path.resolve())

        if not convert:
            continue

        # if not src_path.exists():
            # print("Skipping " + src_path.absolute().as_posix() + " it doesnt exit ")
            # Rule: missing file → ignore silently for CI/CD pipelines
            # continue

        dst_path, orig_size, new_size = convert_to_avif(src_path, rel_path)

        if dst_path:
            # Construct the new web path from the destination file path
            new_rel_path = dst_path.relative_to(DST_DIR)
            new_src = "/assets/" + str(new_rel_path).replace("\\", "/")  # Ensure forward slashes for web
            
            if img["src"] != new_src:
                img["src"] = new_src
                changed = True

            total_original_bytes += orig_size
            total_processed_bytes += new_size

    if convert and changed:
        with html_path.open("w", encoding="utf-8") as f:
            f.write(str(soup))
        print(f"{Color.CYAN}✓ Updated HTML: {html_path.relative_to(HTML_DIR)}{Color.NC}")


def walk_html(convert: bool = True):
    # Process HTML files in the HTML_DIR
    for html_path in HTML_DIR.rglob("*.html"):
        process_html_file(html_path, convert=convert)
    
    # # Also process root index.html if it exists
    # root_index = Path("./index.html")
    # if root_index.exists():
    #     process_html_file(root_index, convert=convert)


def report_unused():
    print(f"\n{Color.BLUE}--- Unused Images Report ---{Color.NC}")
    
    # Find all image files in SRC_DIR
    image_extensions = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".avif", ".svg"}
    all_images = [
        img_path.resolve()
        for img_path in SRC_DIR.rglob("*")
        if img_path.suffix.lower() in image_extensions
    ]

    unused = [img for img in all_images if img not in used_images]

    if unused:
        print(f"Found {Color.YELLOW}{len(unused)}{Color.NC} unused images:\n")
        wasted = 0
        for img in unused:
            rel = img.relative_to(SRC_DIR)
            size = img.stat().st_size
            wasted += size
            print(f"  - {Color.YELLOW}{rel}{Color.NC} ({format_bytes(size)})")
        print(f"\n{Color.RED}Total unused disk space: {format_bytes(wasted)}{Color.NC}")
    else:
        print(f"{Color.GREEN}✓ No unused images found in '{SRC_DIR}'{Color.NC}")


def main():
    parser = argparse.ArgumentParser(
        description="Optimize images referenced in HTML files and report unused assets.",
        formatter_class=argparse.RawTextHelpFormatter
    )
    parser.add_argument("--report-unused", action="store_true",
                        help="Scan HTML files to find and report unused images in\n"
                             "./assets_src without performing any conversions.")
    args = parser.parse_args()

    if args.report_unused:
        print(f"{Color.BLUE}Scanning HTML in '{HTML_DIR}' to identify asset usage...{Color.NC}")
        walk_html(convert=False)
        report_unused()
    else:
        print(f"{Color.BLUE}--- Starting Image & Asset Optimization ---{Color.NC}")
        print(f"Source: {SRC_DIR}")
        print(f"Destination: {DST_DIR}")
        print(f"HTML to update: {HTML_DIR}\n")
        
        walk_html(convert=True)
        
        saved = total_original_bytes - total_processed_bytes
        percent = (saved / total_original_bytes * 100) if total_original_bytes > 0 else 0
        
        print(f"\n{Color.BLUE}--- Conversion Summary ---{Color.NC}")
        print(f"  Original size:   {format_bytes(total_original_bytes)}")
        print(f"  New size:        {format_bytes(total_processed_bytes)}")
        if saved > 0:
            print(f"  {Color.YELLOW}Total space saved: {format_bytes(saved)} ({percent:.1f}% reduction){Color.NC}")
        else:
             print(f"  {Color.YELLOW}Total space saved: {format_bytes(saved)}{Color.NC}")


if __name__ == "__main__":
    main()