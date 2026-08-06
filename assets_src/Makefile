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
	@mkdir -p $(OUTPUT_DIR)
	@echo "==> Building CSS: $(CSS_ENTRY_POINT) -> $(OUTPUT_CSS)"
	@bunx postcss $(CSS_ENTRY_POINT) --output $(OUTPUT_CSS)
	@touch $(OUTPUT_CSS)

build-css: $(OUTPUT_CSS)

../out/.assets/wireframe-model-viewer.js: ./other/wireframe-model-viewer.ts
	@bun build ./other/wireframe-model-viewer.ts --outfile ../out/.assets/wireframe-model-viewer.js --bundle --minify

../out/.assets/ascii-model-viewer.js: ./other/ascii-model-viewer.ts
	@bun build ./other/ascii-model-viewer.ts --outfile ../out/.assets/ascii-model-viewer.js --bundle --minify

build-other: ../out/.assets/wireframe-model-viewer.js ../out/.assets/ascii-model-viewer.js

# Fonts/icons/models/documents/etc. are no longer symlinked or built here —
# they're picked up as plain source files by `.tooling/assets.py build`
# (flattened into out/.assets/ with their original filename kept).

build-regen:
# 	git diff --quiet HEAD -- ./other/wireframe-model-viewer.ts || make build-other
	@make -s build-css
