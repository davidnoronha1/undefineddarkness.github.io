// Draws #CHART (bar) and #PLOT (function) figures with uPlot.
// Both start out as plain HTML (a data <table>, or a list of formulas), so
// without JS the reader still gets the data; this module only enhances them.
// Loaded via <script type="module"> next to each figure; module scripts run
// once per page no matter how many times they're included.
import uPlot from "uplot";
import css from "uplot/dist/uPlot.min.css" with { type: "text" };

const PALETTE = ["#FFB3BA", "#BAE1FF", "#BAFFC9", "#FFFFBA", "#D7BAFF", "#FFDFBA", "#FFBAF3", "#F0F0F0"];
const FONT = "12px ui-monospace, Menlo, Consolas, monospace";
const MUTED = "#999";

const sheet = document.createElement("style");
sheet.textContent = css + ".u-legend{font:12px ui-monospace,monospace}.u-legend th{background:none;font-weight:normal}.u-legend th,.u-legend td{border:0}";
document.head.append(sheet);

const axis = (extra: Partial<uPlot.Axis> = {}): uPlot.Axis => ({
	stroke: MUTED, font: FONT, grid: { stroke: "#222", width: 1 }, ticks: { stroke: "#333", width: 1 }, ...extra,
});

// Grouped bars: series `i` of `n` gets its own slot within each category.
function bars(i: number, n: number): uPlot.Series.PathBuilder {
	return (u, sidx, i0, i1) => {
		const p = new Path2D(), ys = u.data[sidx], xs = u.data[0];
		const slot = (u.bbox.width / xs.length) * 0.8 / n;
		const base = u.valToPos(u.scales.y.min!, "y", true);
		for (let k = i0; k <= i1; k++) {
			const v = ys[k];
			if (v == null) continue;
			const x = u.valToPos(xs[k], "x", true) - slot * n / 2 + slot * i;
			const y = u.valToPos(v, "y", true);
			p.rect(x, y, slot * 0.9, base - y);
		}
		return { stroke: p, fill: p };
	};
}

function size(fig: HTMLElement): { width: number; height: number } {
	const width = fig.clientWidth;
	const w = +(fig.dataset.w || 700), h = +(fig.dataset.h || 400);
	return { width, height: Math.max(260, Math.min(420, Math.round(width * h / w))) };
}

function mount(fig: HTMLElement, opts: Omit<uPlot.Options, "width" | "height">, data: uPlot.AlignedData) {
	const host = document.createElement("div");
	fig.prepend(host);
	const u = new uPlot({ ...opts, ...size(fig) }, data, host);
	new ResizeObserver(() => u.setSize(size(fig))).observe(fig);
}

function chart(fig: HTMLElement) {
	const table = fig.querySelector("table")!;
	const head = [...table.tHead!.rows[0].cells].map(c => c.textContent!);
	const rows = [...table.tBodies[0].rows];
	const cats = rows.map(r => r.cells[0].textContent!);
	const n = head.length - 1, unit = fig.dataset.unit ? " " + fig.dataset.unit : "";
	const data: uPlot.AlignedData = [cats.map((_, i) => i)];
	for (let s = 1; s <= n; s++) data.push(rows.map(r => parseFloat(r.cells[s]?.textContent ?? "") || null));
	table.style.display = "none";
	// Tilt category labels when they'd be too cramped to sit side by side.
	const slot = (fig.clientWidth || 700) / cats.length, tilt = slot < 45 ? -60 : slot < 70 ? -30 : 0;
	mount(fig, {
		scales: {
			x: { time: false, range: [-0.5, cats.length - 0.5] },
			y: fig.hasAttribute("data-ylog") ? { distr: 3 } : { range: (_u, _min, max) => [0, max * 1.05] },
		},
		axes: [
			axis({ splits: () => cats.map((_, i) => i), values: (_u, sp) => sp.map(i => cats[i] ?? ""), grid: { show: false }, rotate: tilt, size: tilt ? 75 : 40 }),
			axis({
				size: 60, label: fig.dataset.unit, labelFont: FONT, labelSize: 20,
				// Log scales put a split on every minor step; only label the decades.
				...(fig.hasAttribute("data-ylog") ? { values: (_u: uPlot, sp: number[]) => sp.map(v => Math.abs(Math.log10(v) % 1) < 1e-9 ? v.toLocaleString() : "") } : {}),
			}),
		],
		series: [
			{ label: head[0], value: (_u, i) => i == null ? "" : cats[i] },
			...head.slice(1).map((label, i) => ({
				label, fill: PALETTE[i % PALETTE.length], stroke: PALETTE[i % PALETTE.length],
				paths: bars(i, n), points: { show: false }, value: (_u: uPlot, v: number | null) => v == null ? "" : v + unit,
			})),
		],
		legend: { live: true },
		cursor: { points: { show: false }, drag: { x: false, y: false } },
	}, data);
}

function plot(fig: HTMLElement) {
	const [x0, x1] = (fig.dataset.x || "-10:10").split(":").map(Number);
	const yr = fig.dataset.y?.split(":").map(Number) as [number, number] | undefined;
	const items = [...fig.querySelectorAll("li")];
	const N = 400, xs = Array.from({ length: N + 1 }, (_, i) => x0 + (x1 - x0) * i / N);
	const data: uPlot.AlignedData = [xs];
	for (const li of items) {
		// Formulas are author-written (same trust as the rest of the post).
		// `with (Math)` lets them say sin(x)/abs(x) like gnuplot does.
		const f = new Function("x", `with (Math) { return ${li.querySelector("code")!.textContent} }`) as (x: number) => number;
		data.push(xs.map(x => { const y = f(x); return Number.isFinite(y) ? y : null; }));
	}
	fig.querySelector("ul")!.style.display = "none";
	mount(fig, {
		scales: { x: { time: false }, ...(yr ? { y: { range: yr } } : {}) },
		axes: [axis(), axis({ size: 60 })],
		series: [
			{ label: "x", value: (_u, v) => v == null ? "" : v.toFixed(2) },
			...items.map((li, i) => ({
				label: li.textContent!.replace(li.querySelector("code")!.textContent!, "").trim() || li.querySelector("code")!.textContent!,
				stroke: li.dataset.c || PALETTE[i % PALETTE.length], width: 2, points: { show: false },
				value: (_u: uPlot, v: number | null) => v == null ? "" : v.toPrecision(4),
			})),
		],
		// gnuplot's `set zeroaxis`: draw the x=0 and y=0 lines.
		hooks: {
			drawAxes: [u => {
				const c = u.ctx, { left, top, width, height } = u.bbox;
				c.save(); c.strokeStyle = "#444"; c.lineWidth = 1; c.beginPath();
				const y = u.valToPos(0, "y", true), x = u.valToPos(0, "x", true);
				if (y >= top && y <= top + height) { c.moveTo(left, y); c.lineTo(left + width, y); }
				if (x >= left && x <= left + width) { c.moveTo(x, top); c.lineTo(x, top + height); }
				c.stroke(); c.restore();
			}],
		},
	}, data);
}

document.querySelectorAll<HTMLElement>("figure.chart").forEach(chart);
document.querySelectorAll<HTMLElement>("figure.plot").forEach(plot);
