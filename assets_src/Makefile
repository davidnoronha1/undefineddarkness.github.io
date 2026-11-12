# JS bundles (the only thing here that needs bun). CSS is minified and
# inlined by build.py. Bundles are committed under out/.assets/.

OUT := ../out/.assets

all: $(OUT)/charts.js $(OUT)/model-viewer.js $(OUT)/wireframe-model-viewer.js

# <bar-chart>/<fn-plot> custom elements (uPlot); only loaded by chart pages.
$(OUT)/charts.js: other/charts.ts
	bun build $< --outfile $@ --bundle --minify

# three.js viewers; the portfolio loads model-viewer.js on click.
$(OUT)/%.js: other/%.ts
	bun build $< --outfile $@ --bundle --minify

.PHONY: all
