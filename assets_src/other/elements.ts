// Reusable custom elements. Drop this module into any page:
//   <script type="module" src="/assets/elements.js"></script>
//
//   <x-fold title="Title">...</x-fold>              collapsible section
//                                                    (level="3": title is an <h3> you can link to)
//   <x-table class="..." noheader center="2,3">     tab-separated rows, first row = header;
//   Name	Size                                      cells take **bold**, *italic*, `code`,
//   h264	7.2 MB                                    [links](url) and plain HTML
//   </x-table>
//   <x-chart unit="MB" log title="...">             same rows, drawn as grouped bars
//   <x-plot x="-10:10" y="-2:2" title="...">        one `expression<TAB>label` per line
//
// Columns are separated by tabs (or 2+ spaces). Without JS, the raw rows show
// as preformatted text and folds show open. <x-chart>/<x-plot> load uPlot
// (charts.js, next to this file) only when a page actually has one.

type Rows = string[][];

const rows = (src: string): Rows =>
	src.split("\n").map(l => l.trim()).filter(Boolean).map(l => l.split(/\t+| {2,}/).map(c => c.trim()));

// Just enough inline Markdown for table cells.
const inline = (s: string) => s
	.replace(/`([^`]+)`/g, "<code>$1</code>")
	.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
	.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, "$1<em>$2</em>")
	.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2">$1</a>');

const slug = (s: string) => s.toLowerCase().replace(/[^\w\- ]/g, "").trim().replace(/ /g, "-");

/** Upgrade once; take the element's raw content and hand it to `render`. */
const define = (name: string, render: (el: HTMLElement) => void) =>
	customElements.define(name, class extends HTMLElement {
		connectedCallback() {
			if (this.dataset.done) return;
			this.dataset.done = "1";
			render(this);
		}
	});

define("x-fold", el => {
	const details = document.createElement("details"), summary = document.createElement("summary");
	const title = el.getAttribute("title") ?? "", level = el.getAttribute("level");
	summary.innerHTML = level ? `<h${level} id="${slug(title)}"></h${level}>` : "";
	(summary.firstElementChild ?? summary).textContent = title;
	el.removeAttribute("title");  // it was only there for the no-JS fallback / would show as a tooltip
	details.append(summary, ...el.childNodes);
	el.append(details);
});

define("x-table", el => {
	const data = rows(el.innerHTML);
	const center = new Set((el.getAttribute("center") ?? "").split(",").map(n => +n - 1));
	const cell = (tag: string, c: string, i: number) =>
		`<${tag}${center.has(i) ? ' style="text-align:center"' : ""}>${inline(c)}</${tag}>`;
	const head = el.hasAttribute("noheader") || !data.length ? "" :
		`<thead><tr>${data.shift()!.map((c, i) => cell("th", c, i)).join("")}</tr></thead>`;
	el.innerHTML = `<table>${head}<tbody>${data.map(r => `<tr>${r.map((c, i) => cell("td", c, i)).join("")}</tr>`).join("")}</tbody></table>`;
});

const lazyChart = (kind: "chart" | "plot") => (el: HTMLElement) => {
	const data = rows(el.textContent ?? "");
	el.textContent = "";
	import(new URL("./charts.js", import.meta.url).href).then(m => m[kind](el, data));
};
define("x-chart", lazyChart("chart"));
define("x-plot", lazyChart("plot"));
