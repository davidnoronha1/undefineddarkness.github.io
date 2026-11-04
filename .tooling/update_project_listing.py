#!/usr/bin/env python3
"""Render the reviewed GitHub projects: python3 .tooling/update_project_listing.py.

Edit experiments/projects.json to change the selection or descriptions. New GitHub
repositories are deliberately not added automatically: each entry needs review.
"""

import argparse
import html
import json
from pathlib import Path
import re
from urllib.parse import urlsplit


ROOT = Path(__file__).resolve().parent.parent
PAGE = ROOT / "experiments/index.html"
MANIFEST = ROOT / "experiments/projects.json"
START = "<!-- GITHUB REPOSITORIES START -->"
END = "<!-- GITHUB REPOSITORIES END -->"


def safe_url(value):
    parsed = urlsplit(value)
    if parsed.scheme not in ("http", "https") or not parsed.netloc:
        raise ValueError(f"Expected an HTTP(S) project URL, got {value!r}")
    return html.escape(value, quote=True)


def repository_card(project):
    escape = html.escape
    name = escape(project["name"])
    url = safe_url(project["url"])
    language = escape(project.get("language", ""))
    homepage_link = ""
    if project.get("homepage"):
        homepage_link = f'<a href="{safe_url(project["homepage"])}">Website ↗</a>'
    preview = ""
    card_width = ""
    if project.get("image"):
        dimensions = ""
        if project.get("image_width") and project.get("image_height"):
            width, height = int(project["image_width"]), int(project["image_height"])
            card_width = f' style="max-width: {width}px"'
            dimensions = f' width="{width}" height="{height}"'
        preview = f'\t\t\t\t\t\t<img class="repository-image" src="{safe_url(project["image"])}" alt="{escape(project["image_alt"], quote=True)}"{dimensions} loading="lazy" decoding="async">\n'
    return f'''\t\t\t\t<div class="experiment-card-wrapper" data-repository="{name}"{card_width}>
\t\t\t\t\t<div class="experiment-card repository-card">
{preview}\t\t\t\t\t\t<div class="experiment-info">
\t\t\t\t\t\t\t<h3><a href="{url}">{name}</a></h3>
\t\t\t\t\t\t\t<p class="repository-meta">{language}</p>
\t\t\t\t\t\t\t<p>{escape(project["description"])}</p>
\t\t\t\t\t\t\t<div class="repository-links"><a href="{url}">Source ↗</a>{homepage_link}</div>
\t\t\t\t\t\t</div>
\t\t\t\t\t</div>
\t\t\t\t</div>'''


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--manifest", type=Path, default=MANIFEST)
    args = parser.parse_args()
    projects = json.loads(args.manifest.read_text())["projects"]
    if not projects:
        raise ValueError("Project selection is empty; leaving the existing listing intact")
    names = set()
    categories = {}
    for project in projects:
        for field in ("name", "url", "description", "category"):
            if not isinstance(project.get(field), str) or not project[field].strip():
                raise ValueError(f"Project requires nonempty {field}: {project!r}")
        if project["name"].casefold() in names:
            raise ValueError(f"Duplicate project: {project['name']}")
        names.add(project["name"].casefold())
        categories.setdefault(project["category"], []).append(project)
    sections = []
    ids = set()
    for category, entries in categories.items():
        section_id = "projects-" + re.sub(r"[^a-z0-9]+", "-", category.lower()).strip("-")
        if section_id in ids:
            raise ValueError(f"Duplicate category ID: {section_id}")
        ids.add(section_id)
        cards = "\n".join(repository_card(project) for project in sorted(entries, key=lambda p: p["name"].casefold()))
        sections.append(f'''\t\t<section class="project-section" aria-labelledby="{section_id}">
\t\t\t<h2 class="section-head" id="{section_id}">{html.escape(category)}</h2>
\t\t\t<div class="experiments-grid">
{cards}
\t\t\t</div>
\t\t</section>''')
    listing = START + "\n" + "\n\n".join(sections) + "\n\t\t" + END
    source = PAGE.read_text()
    start = source.index(START)
    end = source.index(END, start) + len(END)
    PAGE.write_text(source[:start] + listing + source[end:])
    print(f"Rendered {len(projects)} reviewed projects in {len(categories)} categories")


if __name__ == "__main__":
    main()
