# JS bundles (the only thing here that needs bun). CSS is minified and
# inlined by build.py. Bundles are committed under out/.assets/.

OUT := ../out/.assets

all: $(OUT)/elements.js $(OUT)/charts.js $(OUT)/model-viewer.js

# x-fold/x-table/x-chart/x-plot (elements.js) + uPlot renderers it lazy-loads (charts.js).
# model-viewer.js: three.js viewer, the portfolio loads it on click.
$(OUT)/%.js: other/%.ts
	bun build $< --outfile $@ --bundle --minify

.PHONY: all
