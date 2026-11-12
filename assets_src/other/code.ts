// Runtime highlighter for <x-code> on pages build.py didn't pre-highlight
// (elements.ts imports this only when such an <x-code> exists). Colours match
// the site's build-time Pygments palette (zenburn).
import hljs from "highlight.js/lib/core";
import bash from "highlight.js/lib/languages/bash";
import c from "highlight.js/lib/languages/c";
import cmake from "highlight.js/lib/languages/cmake";
import cpp from "highlight.js/lib/languages/cpp";
import css from "highlight.js/lib/languages/css";
import diff from "highlight.js/lib/languages/diff";
import dockerfile from "highlight.js/lib/languages/dockerfile";
import go from "highlight.js/lib/languages/go";
import ini from "highlight.js/lib/languages/ini";
import javascript from "highlight.js/lib/languages/javascript";
import json from "highlight.js/lib/languages/json";
import lisp from "highlight.js/lib/languages/lisp";
import lua from "highlight.js/lib/languages/lua";
import makefile from "highlight.js/lib/languages/makefile";
import python from "highlight.js/lib/languages/python";
import rust from "highlight.js/lib/languages/rust";
import shell from "highlight.js/lib/languages/shell";
import typescript from "highlight.js/lib/languages/typescript";
import vim from "highlight.js/lib/languages/vim";
import xml from "highlight.js/lib/languages/xml";
import yaml from "highlight.js/lib/languages/yaml";

for (const [name, lang] of Object.entries({
	bash, c, cmake, cpp, css, diff, dockerfile, go, ini, javascript, json, lisp, lua,
	makefile, python, rust, shell, typescript, vim, xml, yaml,
})) hljs.registerLanguage(name, lang);

const sheet = document.createElement("style");
sheet.textContent = `
x-code pre{overflow-x:auto}
x-code .hljs-keyword,x-code .hljs-literal,x-code .hljs-selector-tag{color:#e3ceab}
x-code .hljs-type,x-code .hljs-title.class_{color:#dfdfbf}
x-code .hljs-title.function_,x-code .hljs-built_in{color:#aabfe3}
x-code .hljs-string,x-code .hljs-regexp{color:#cc9393}
x-code .hljs-number{color:#dca3a3}
x-code .hljs-comment{color:#7f9f7f;font-style:italic}
x-code .hljs-meta{color:#ffcfaf}`;
document.head.append(sheet);

/** Highlight `code` into `target` (a <code> element); no/unknown language: auto-detect. */
export function highlight(target: HTMLElement, code: string, lang: string) {
	target.innerHTML = hljs.getLanguage(lang) ? hljs.highlight(code, { language: lang }).value : hljs.highlightAuto(code).value;
}
