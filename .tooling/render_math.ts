#!/usr/bin/env bun
// Pre-renders a `math` fenced code block to static KaTeX HTML at build
// time (invoked from initial.sh), instead of shipping katex.min.js +
// auto-render.min.js to every page with math and re-rendering it in the
// browser on every visit. Only the KaTeX CSS (for glyph styling/fonts) is
// still needed client-side — see the loaded_katex_css block in initial.sh.
//
// Usage: bun render_math.ts [--display] < input.tex

import katex from "katex";

const displayMode = process.argv.includes("--display");
const input = await Bun.stdin.text();

const html = katex.renderToString(input, {
	throwOnError: false,
	displayMode,
	output: "html",
	macros: {
		"\\unit": "\\hspace{0.5em}\\scriptstyle\\mathrm{#1}",
	},
});

process.stdout.write(html);
