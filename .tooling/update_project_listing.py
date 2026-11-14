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
    """One card in the same shape as portfolio.html's .grid cards."""
    escape = html.escape
    name = escape(project["name"])
    url = safe_url(project["url"])
    meta = [escape(project["language"])] if project.get("language") else []
    if project.get("homepage"):
        meta.append(f'<a href="{safe_url(project["homepage"])}">Website</a>')
    preview = ""
    if project.get("image"):
        dimensions = ""
        if project.get("image_width") and project.get("image_height"):
            dimensions = f' width="{int(project["image_width"])}" height="{int(project["image_height"])}"'
        preview = f'<img src="{safe_url(project["image"])}" alt="{escape(project["image_alt"], quote=True)}"{dimensions} loading="lazy" decoding="async">\n'
    return (f'<div data-repository="{name}">\n{preview}<h3><a href="{url}">{name}</a></h3>\n'
            f'<p>{escape(project["description"])}</p>\n'
            + (f'<p class="meta">{" · ".join(meta)}</p>\n' if meta else "") + "</div>")


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
        sections.append(f'''<section aria-labelledby="{section_id}">
<h2 id="{section_id}">{html.escape(category)}</h2>
<div class="grid">
{cards}
</div>
</section>''')
    listing = START + "\n" + "\n\n".join(sections) + "\n" + END
    source = PAGE.read_text()
    start = source.index(START)
    end = source.index(END, start) + len(END)
    PAGE.write_text(source[:start] + listing + source[end:])
    print(f"Rendered {len(projects)} reviewed projects in {len(categories)} categories")


if __name__ == "__main__":
    main()
