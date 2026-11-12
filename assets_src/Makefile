# JS bundles (the only thing here that needs bun). CSS is minified and
# inlined by build.py. Bundles are committed under out/.assets/.

OUT := ../out/.assets

all: $(OUT)/elements.js $(OUT)/charts.js $(OUT)/code.js $(OUT)/model-viewer.js

# elements.js: the x- custom elements; lazy-loads charts.js (uPlot) and code.js (highlight.js).
# model-viewer.js: three.js viewer used by the portfolio.
$(OUT)/%.js: other/%.ts
	bun build $< --outfile $@ --bundle --minify

.PHONY: all
