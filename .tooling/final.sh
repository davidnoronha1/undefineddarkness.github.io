#!/bin/bash

final_transformer() {
	local content=$1

	while read -r match; do
		re=${match//'*'/'&ast';}
		re=${re//'<'/'&lt;'}
		re=${re//'>'/'&gt;'}
		re=${re/'`'/'<code>'}
		re=${re/'`'/'</code>'}
		content=${content/"$match"/"$re"}
	done < <(grep -Po "\`.*?\`" <<< "$content")

	LC_ALL=C perl -pe '
		s!\*\*(.+?)\*\*!<b>\1</b>!g;
		s@!\[(.*?)\]\((.+?)\)@<figure><img src="\2" alt="\1" title="\1" loading="lazy" /><figcaption>\1</figcaption></figure>@g;
		s!\[\[man:(.+?)\]\]!<a href="https://man.openbsd.org/\1">manpage</a>!g;
		s!\[(.+?)\]\((.+?)\)!<a href="\2">\1</a>!g;
		s!\*(.+?)\*!<i>\1</i>!g;
		s!(?<\![\"'\''])(https?://[^<\s\),]+)!<a href="\1">\1</a>!g;
		s!~~(.+?)~~!<strike>\1</strike>!g;
        s!==(.+?)==!<mark>\1</mark>!g;
	' <<< "$content"

	if [ -n "${want_iframe_resizer}" ]; then
		printf '
				<script defer src="https://cdn.jsdelivr.net/npm/@iframe-resizer/parent@5.3.2"></script>
				<script defer>
  					iframeResize({
    					license: "GPLv3",
    					waitForLoad: true,
  				});
				</script>'
	fi

	if [ -n "${want_carousel_script}" ]; then
		printf "<script defer>
		document.querySelectorAll('.slides').forEach(slideGallery => {
  const slides = slideGallery.querySelectorAll('div');
  const slideCount = slides.length;
  const slideWidth = slides[0].offsetWidth;

  // Find the matching thumbnails container (assume it’s the next sibling)
  const thumbnailContainer = slideGallery.parentElement.querySelector('.thumbnails');

  const highlightThumbnail = () => {
    thumbnailContainer
      .querySelectorAll('div.highlighted')
      .forEach(el => el.classList.remove('highlighted'));
    const index = Math.floor(slideGallery.scrollLeft / slideWidth);
    const thumb = thumbnailContainer.querySelector('div[data-id="' + index + '"]');
    if (thumb) thumb.classList.add('highlighted');
  };

  const scrollToElement = el => {
    const index = parseInt(el.dataset.id, 10);
    slideGallery.scrollTo(index * slideWidth, 0);
  };

  // Build thumbnails
  thumbnailContainer.innerHTML = [...slides]
    .map((slide, i) => '<div data-id="' + i + '"></div>')
    .join('');

  // Hook up thumbnail clicks
  thumbnailContainer.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', () => scrollToElement(el));
  });

  // Highlight on scroll
  slideGallery.addEventListener('scroll', highlightThumbnail);

  // Initialize
  highlightThumbnail();
});

		</script>"
	fi

  if [[ $want_pdf_object == 1 ]]; then
  local code_=""
  for pdf in "${pdfs_to_embed[@]}"; do
    code_+="PDFObject.embed(\"$pdf\");"$'\n'
  done
    printf '<script defer type="module">
import PDFObject from "https://cdn.jsdelivr.net/npm/pdfobject@2.3.0/+esm"
%s
</script>' "$code_"
  fi

  if [[ $want_pdfi == 1 ]]; then
    printf "<script>
const container = document.getElementById('pdf-container');
let currentScale = 1;
let initialDistance = null;
let lastTouchCenter = {x: 0, y: 0};

function getDistance(touches) {
  const [t1, t2] = touches;
  const dx = t2.pageX - t1.pageX;
  const dy = t2.pageY - t1.pageY;
  return Math.sqrt(dx*dx + dy*dy);
}

function getCenter(touches) {
  const [t1, t2] = touches;
  return {
    x: (t1.pageX + t2.pageX) / 2,
    y: (t1.pageY + t2.pageY) / 2
  };
}

container.addEventListener('touchstart', (e) => {
  if (e.touches.length === 2) {
    initialDistance = getDistance(e.touches);
    lastTouchCenter = getCenter(e.touches);
  }
});

container.addEventListener('touchmove', (e) => {
  if (e.touches.length === 2 && initialDistance) {
    e.preventDefault();

    const newDistance = getDistance(e.touches);
    const scale = newDistance / initialDistance;

    // Optional: adjust scroll to pinch center
    const touchCenter = getCenter(e.touches);
    const dx = touchCenter.x - lastTouchCenter.x;
    const dy = touchCenter.y - lastTouchCenter.y;

    container.scrollLeft -= dx;
    container.scrollTop -= dy;

    container.style.transform = \`scale(\${currentScale * scale})\`;
  }
});

container.addEventListener('touchend', (e) => {
  if (e.touches.length < 2 && initialDistance) {
    const transform = container.style.transform.match(/scale\(([^)]+)\)/);
    currentScale = transform ? parseFloat(transform[1]) : currentScale;
    initialDistance = null;
  }
});
    </script>"
  fi

	if [[ $want_tab_script == 1 ]]; then
		printf "<script defer>

document.querySelectorAll('.tabs-container').forEach(tabContainer => {
  const panels = tabContainer.querySelectorAll('[data-tab-name]');

  // Create button bar
  const buttonBar = document.createElement('div');
  buttonBar.className = 'tabs-buttons';

  panels.forEach((panel, i) => {
    const name = panel.dataset.tabName;
    const btn = document.createElement('button');
    btn.textContent = name;

    btn.addEventListener('click', () => {
      // Hide all panels
      panels.forEach(p => p.style.display = 'none');
      // Remove highlights from buttons
      buttonBar.querySelectorAll('button').forEach(b => b.classList.remove('active'));
      // Show the selected one
      panel.style.display = 'block';
      btn.classList.add('active');
    });

    // First button active by default
    if (i === 0) {
      btn.classList.add('active');
      panel.style.display = 'block';
    } else {
      panel.style.display = 'none';
    }

    buttonBar.appendChild(btn);
  });

  // Insert button bar before the content
  tabContainer.prepend(buttonBar);
});

</script>"
	fi
}
