build-3d-viewer: ./ascii-3d-viewer.js

./ascii-3d-viewer.js: ./other/ascii-3d-viewer.ts
	bun build ./other/ascii-3d-viewer.ts --outfile ./ascii-3d-viewer.js --bundle --minify

# --- Configuration ---

# Source files are in the 'styles' subdirectory relative to this Makefile.
CSS_SOURCES := $(wildcard ./styles/*.css)

# The main entry point for PostCSS.
CSS_ENTRY_POINT := ./styles/styles.css

# The output file is one level up, then into out/.assets/
OUTPUT_CSS := ../out/.assets/styles.css

# Automatically get the directory part of the output path.
OUTPUT_DIR := $(dir $(OUTPUT_CSS))

$(OUTPUT_CSS): $(CSS_SOURCES)
	@echo "==> Ensuring output directory exists..."
	@mkdir -p $(OUTPUT_DIR)
	@echo "==> Building CSS: $(CSS_ENTRY_POINT) -> $(OUTPUT_CSS)"
	bunx postcss $(CSS_ENTRY_POINT) --output $(OUTPUT_CSS)
	@touch $(OUTPUT_CSS)

build-css: $(OUTPUT_CSS)

../out/.assets/ascii-3d-viewer.js: ./other/ascii-3d-viewer.ts
# 	bun build ./other/ascii-3d-viewer.ts --outfile ../out/.assets/ascii-3d-viewer.tmp.js --no-bundle
# 	bunx rollup -i ../out/.assets/ascii-3d-viewer.tmp.js -o ../out/.assets/ascii-3d-viewer.bundle.js -p @rollup/plugin-node-resolve --compact
# 	bun build ../out/.assets/ascii-3d-viewer.bundle.js --outfile ../out/.assets/ascii-3d-viewer.js --minify
# 	rm ../out/.assets/ascii-3d-viewer.tmp.js ../out/.assets/ascii-3d-viewer.bundle.js
# Alternative single-step bundling (uncomment if preferred
	bun build ./other/ascii-3d-viewer.ts --outfile ../out/.assets/ascii-3d-viewer.js --bundle --minify
# 	bunx rollup -i ./other/ascii-3d-viewer.ts -o ../out/.assets/ascii-3d-viewer.js --file --format iife --compact --silent --plugin @rollup/plugin-typescript --plugin @rollup/plugin-node-resolve --plugin rollup-plugin-terser
	

build-other: ../out/.assets/ascii-3d-viewer.js

build-fonts:
	mkdir -p ../assets/fonts
	cp ./fonts/cozette.woff2 ../assets/fonts/cozette.woff2 -v
	bash ./fonts/.tooling/optimize_font.sh -o ../assets/fonts ./fonts/FairfaxHDEmoji.ttf

build-images:
# 	cd .. && ./generate
# 	cd .. && uv run ./assets_src/images/.tooling/optimize_sourced.py

build-links:
	ln -sf ../../assets_src/models ../assets/models
	ln -sf ../../assets_src/other ../assets/other
	ln -sf ../../assets_src/documents ../assets/documents
	ln -sf ../../assets_src/icons ../assets/icons
	ln -sf ../../assets_src/images ../assets/images

build-regen:
# 	git diff --quiet HEAD -- ./other/ascii-3d-viewer.ts || make build-3d-viewer
	make build-css
# 	make build-fonts
#	make build-images