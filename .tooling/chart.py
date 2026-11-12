#!/usr/bin/env python3
"""Backs the #CHART directive: turns tab-separated (or --csv) data into a
plain <table> inside a <figure class="chart">.

The table *is* the chart's data source: assets_src/other/charts.ts reads it
and draws a uPlot bar chart in its place. Without JS the reader just sees
the table, so nothing is lost.

Input: first row is a header (category label, then one column per series),
every following row is a category followed by its values.

Usage: chart.py [--title T] [--unit U] [--ylog] [--width W] [--height H] [--csv] < data
"""
import argparse
import csv
import html
import sys


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("--title", default="")
    p.add_argument("--unit", default="")
    p.add_argument("--ylog", action="store_true")
    p.add_argument("--width", type=int, default=700)
    p.add_argument("--height", type=int, default=400)
    p.add_argument("--csv", action="store_true")
    a = p.parse_args()

    text = sys.stdin.read().strip("\n")
    rows = list(csv.reader(text.split("\n"), delimiter="," if a.csv else "\t"))
    rows = [[c.strip() for c in r] for r in rows if any(c.strip() for c in r)]
    if not rows:
        return
    esc = html.escape

    attrs = f' data-w="{a.width}" data-h="{a.height}"'
    if a.unit:
        attrs += f' data-unit="{esc(a.unit)}"'
    if a.ylog:
        attrs += " data-ylog"

    out = [f'<figure class="chart"{attrs}><table><thead><tr>']
    out += [f"<th>{esc(c)}</th>" for c in rows[0]]
    out.append("</tr></thead><tbody>")
    for r in rows[1:]:
        out.append(f"<tr><th>{esc(r[0])}</th>")
        out += [f"<td>{esc(c)}</td>" for c in r[1:]]
        out.append("</tr>")
    out.append("</tbody></table>")
    if a.title:
        out.append(f"<figcaption>{esc(a.title)}</figcaption>")
    out.append('</figure><script type="module" src="/assets/charts.js"></script>')
    print("".join(out))


if __name__ == "__main__":
    main()
