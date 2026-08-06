#!/usr/bin/env bun
// Pre-renders a `math` fenced code block to static MathJax SVG at build
// time (invoked from initial.sh), instead of shipping any math-rendering
// JS to the browser. Output is a self-contained <svg> (fontCache: "none"
// inlines every glyph's path data directly, since each invocation of this
// script is independent — there's no shared page-level <defs> to cache
// glyphs into across separate CLI calls) — no client-side JS or font CSS
// needed at all.
//
// Usage: bun render_math.ts [--display] < input.tex

import { mathjax } from "mathjax-full/js/mathjax.js";
import { TeX } from "mathjax-full/js/input/tex.js";
import { SVG } from "mathjax-full/js/output/svg.js";
import { liteAdaptor } from "mathjax-full/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "mathjax-full/js/handlers/html.js";
import { AllPackages } from "mathjax-full/js/input/tex/AllPackages.js";

const adaptor = liteAdaptor();
RegisterHTMLHandler(adaptor);

const tex = new TeX({
	packages: AllPackages,
	macros: {
		unit: ["\\hspace{0.5em}\\scriptstyle\\mathrm{#1}", 1],
	},
});
const svg = new SVG({ fontCache: "none" });
const doc = mathjax.document("", { InputJax: tex, OutputJax: svg });

const displayMode = process.argv.includes("--display");
const input = await Bun.stdin.text();

const node = doc.convert(input, { display: displayMode });

process.stdout.write(adaptor.outerHTML(node));
