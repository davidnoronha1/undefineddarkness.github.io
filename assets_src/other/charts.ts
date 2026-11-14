// uPlot renderers for <x-chart> and <x-plot> (see elements.ts, which imports
// this module only when a page has one of them).
import uPlot from "uplot";
import css from "uplot/dist/uPlot.min.css" with { type: "text" };

type Rows = string[][];
const PALETTE = ["#FFB3BA", "#BAE1FF", "#BAFFC9", "#FFFFBA", "#D7BAFF", "#FFDFBA", "#FFBAF3", "#F0F0F0"];
const FONT = "12px ui-monospace, Menlo, Consolas, monospace";

const sheet = document.createElement("style");
sheet.textContent = css + ".u-legend{font:12px ui-monospace,monospace}.u-legend th{background:none;font-weight:normal}.u-legend th,.u-legend td{border:0}";
document.head.append(sheet);

const axis = (extra: Partial<uPlot.Axis> = {}): uPlot.Axis => ({
	stroke: "#999", font: FONT, labelFont: FONT, grid: { stroke: "#222", width: 1 }, ticks: { stroke: "#333", width: 1 }, ...extra,
});

// Grouped bars: series `i` of `n` gets its own slot within each category.
const bars = (i: number, n: number): uPlot.Series.PathBuilder => (u, sidx, i0, i1) => {
	const p = new Path2D(), ys = u.data[sidx], xs = u.data[0];
	const slot = (u.bbox.width / xs.length) * 0.8 / n, base = u.valToPos(u.scales.y.min!, "y", true);
	for (let k = i0; k <= i1; k++) {
		const v = ys[k];
		if (v == null) continue;
		const x = u.valToPos(xs[k], "x", true) - slot * n / 2 + slot * i, y = u.valToPos(v, "y", true);
		p.rect(x, y, slot * 0.9, base - y);
	}
	return { stroke: p, fill: p };
};

/** Draw into `el` (sized to its width, also when it starts hidden in a fold) plus a caption from title="". */
function mount(el: HTMLElement, opts: Omit<uPlot.Options, "width" | "height">, data: uPlot.AlignedData) {
	const title = el.getAttribute("title");
	el.removeAttribute("title");
	const size = () => ({ width: el.clientWidth, height: Math.max(260, Math.min(420, Math.round(el.clientWidth * 0.57))) });
	const u = new uPlot({ ...opts, ...size() }, data, el);
	if (title) el.insertAdjacentHTML("beforeend", `<figcaption></figcaption>`), (el.lastElementChild!.textContent = title);
	new ResizeObserver(() => u.setSize(size())).observe(el);
}

export function chart(el: HTMLElement, rows: Rows) {
	const [head, ...body] = rows, cats = body.map(r => r[0]);
	const n = head.length - 1, unit = el.getAttribute("unit") ?? "", log = el.hasAttribute("log");
	const data: uPlot.AlignedData = [cats.map((_, i) => i)];
	for (let s = 1; s <= n; s++) data.push(body.map(r => parseFloat(r[s] ?? "") || null));
	// Tilt category labels when they'd be too cramped to sit side by side.
	const slot = (el.clientWidth || 700) / cats.length, tilt = slot < 45 ? -60 : slot < 70 ? -30 : 0;
	mount(el, {
		scales: { x: { time: false, range: [-0.5, cats.length - 0.5] }, y: log ? { distr: 3 } : { range: (_u, _min, max) => [0, max * 1.05] } },
		axes: [
			axis({ splits: () => cats.map((_, i) => i), values: (_u, sp) => sp.map(i => cats[i] ?? ""), grid: { show: false }, rotate: tilt, size: tilt ? 75 : 40 }),
			// Log scales put a split on every minor step; only label the decades.
			axis({ size: 60, label: unit, labelSize: 20, ...(log ? { values: (_u: uPlot, sp: number[]) => sp.map(v => Math.abs(Math.log10(v) % 1) < 1e-9 ? v.toLocaleString() : "") } : {}) }),
		],
		series: [
			{ label: head[0], value: (_u, i) => i == null ? "" : cats[i] },
			...head.slice(1).map((label, i) => ({
				label, fill: PALETTE[i % PALETTE.length], stroke: PALETTE[i % PALETTE.length], paths: bars(i, n), points: { show: false },
				value: (_u: uPlot, v: number | null) => v == null ? "" : `${v} ${unit}`,
			})),
		],
		cursor: { points: { show: false }, drag: { x: false, y: false } },
	}, data);
}

export function plot(el: HTMLElement, rows: Rows) {
	const [x0, x1] = (el.getAttribute("x") || "-10:10").split(":").map(Number);
	const yr = el.getAttribute("y")?.split(":").map(Number) as [number, number] | undefined;
	const N = 400, xs = Array.from({ length: N + 1 }, (_, i) => x0 + (x1 - x0) * i / N);
	const data: uPlot.AlignedData = [xs];
	for (const [expr] of rows) {
		// Author-written formulas, gnuplot-style: `with (Math)` allows sin(x), abs(x)...
		const f = new Function("x", `with (Math) { return ${expr} }`) as (x: number) => number;
		data.push(xs.map(x => { const y = f(x); return Number.isFinite(y) ? y : null; }));
	}
	mount(el, {
		scales: { x: { time: false }, ...(yr ? { y: { range: yr } } : {}) },
		axes: [axis(), axis({ size: 60 })],
		series: [
			{ label: "x", value: (_u, v) => v == null ? "" : v.toFixed(2) },
			...rows.map(([expr, label], i) => ({
				label: label || expr, stroke: PALETTE[i % PALETTE.length], width: 2, points: { show: false },
				value: (_u: uPlot, v: number | null) => v == null ? "" : v.toPrecision(4),
			})),
		],
		hooks: {
			// The x=0 / y=0 axes.
			drawAxes: [(u: uPlot) => {
				const c = u.ctx, { left, top, width, height } = u.bbox;
				const y = u.valToPos(0, "y", true), x = u.valToPos(0, "x", true);
				c.save(); c.strokeStyle = "#444"; c.lineWidth = 1; c.beginPath();
				if (y >= top && y <= top + height) { c.moveTo(left, y); c.lineTo(left + width, y); }
				if (x >= left && x <= left + width) { c.moveTo(x, top); c.lineTo(x, top + height); }
				c.stroke(); c.restore();
			}],
		},
	}, data);
}
