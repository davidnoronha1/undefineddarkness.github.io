#!/usr/bin/env bash

# UTILITIES:

# Generate syntax highlighted html code
# using Vim's :TOHtml command

# TRANSFORMERS:

# Put the content in a box. Simple enough
box () {
	printf "<div class='box'>\n%s\n</div>" "$1"
}

# GitHub-style admonition box, e.g.:
#   #CALLOUT warning Read this first
#   Some *important* text.
#   #END CALLOUT
# Type is note|tip|important|warning|caution (defaults to note). Anything
# typed after the type becomes a custom title; otherwise the type name
# itself (capitalized) is used as the title.
callout () {
	content="$1"
	shift 2   # drop "CONTENT" and "#CALLOUT"

	type="${1,,}"
	shift
	title="$*"

	case "$type" in
		note|tip|important|warning|caution) ;;
		*) title="${type}${title:+ $title}"; type="note" ;;
	esac

	case "$type" in
		note)      icon="📝" ;;
		tip)       icon="💡" ;;
		important) icon="❗" ;;
		warning)   icon="⚠️" ;;
		caution)   icon="🛑" ;;
	esac

	[ -z "$title" ] && title="${type^}"

	printf '<div class="callout callout-%s">
<p class="callout-title">%s %s</p>
<div class="callout-content">
%s
</div>
</div>' "$type" "$icon" "$title" "$content"
}

# Folded text
f () {
	content=$1
	shift
	trimmed=$*
	trimmed=${trimmed#'#f '}

	# If the summary embeds a raw heading tag (e.g. "<h3>Title</h3>"), give it
	# a slugified id so URL fragments can target it, matching how normal
	# markdown headings get their ids in initial_transformer.
	if [[ "$trimmed" =~ ^(.*)\<(h[1-6])\>(.*)\</h[1-6]\>(.*)$ ]]; then
		local pre="${BASH_REMATCH[1]}"
		local tag="${BASH_REMATCH[2]}"
		local heading_text="${BASH_REMATCH[3]}"
		local post="${BASH_REMATCH[4]}"
		local slug
		slug=$(slugify "$heading_text")
		trimmed="${pre}<${tag} id=\"${slug}\">${heading_text}</${tag}>${post}"
	fi

	printf "
<details>
	<summary>
		%s
	</summary>
	<p>
		%s
	</p>
</details>" "${trimmed}" "$content"
}

# Right align text
right_align () {
	printf "<div style=\"text-align: right\">\n%s\n</div>" "$1"
}

# Center align text while preserving indentation: useful for ascii art
preserve_center () {
	printf "<div class='txt-c'>%s</div>" "$1"
}

# Center align without preserving.
center () {
	printf "<p style=\"text-align:center\">\n%s\n</p>" "$1"
}

header () {
    content="$1"
    # dbg "#2 = '$2'"
    # dbg "#3 = '$3'"
    shift 2   # drop "CONTENT" and "#HEADER"

    title=()
    current_key=""
    current_val=()

    # parse args
    while [[ $# -gt 0 ]]; do
        if [[ "$1" == *=* ]]; then
            # store previous key=value if any
            if [[ -n "$current_key" ]]; then
                eval "attr_${current_key}=\"\${current_val[*]}\""
            fi

            # new key=value
            current_key="${1%%=*}"
            current_val=("${1#*=}")
        else
            if [[ -n "$current_key" ]]; then
                current_val+=("$1")
            else
                title+=("$1")
            fi
        fi
        shift
    done

    # store last key=value pair
    if [[ -n "$current_key" ]]; then
        eval "attr_${current_key}=\"\${current_val[*]}\""
    fi

    # print header
    echo "<header>"
    # Optional explicit publish date (date=YYYY-MM-DD), used by generate_index/
    # generate_rss to override the git-derived date when it's wrong (e.g. a
    # source file was renamed and git rename-detection lost its history).
    [[ -n "${attr_date:-}" ]] && echo "  <!-- post_date=\"${attr_date}\" -->"
    if [[ -n "${attr_image:-}" ]]; then
		if [ -n "${attr_icon:-}" ]; then
			echo "  <img src=\"${attr_image}\" />"
			echo "  <!-- post_image=\"${attr_icon}\" -->"
		else
			 echo "  <img class='img-sml' src=\"${attr_image}\" />"
			echo "  <!-- post_image=\"${attr_image}\" -->"
		fi
    fi
    # dbg "Got title to be ${_title[*]}"
    # Escape bare '&' so it doesn't corrupt the HTML comment attribute or
    # break the RSS feed's XML (raw '&' isn't valid there) — authors used to
    # have to hand-write "\&", which just left a literal backslash in the
    # output instead of actually escaping anything.
    title_text="${title[*]}"
    title_text="${title_text//&/&amp;}"
    desc_text="${content%%'<br/>'}"
    desc_text="${desc_text//&/&amp;}"
    echo "  <h1>${title_text}</h1>"
    echo "  <!-- post_description=\"${desc_text}\" -->"
    echo "</header>"
}


# Accepts true/on/1 (any case) as "yes" for a directive attribute, so
# authors aren't stuck with one exact spelling.
is_on() {
    case "${1,,}" in
        true|on|1) return 0 ;;
        *)         return 1 ;;
    esac
}

# #PLOT [xrange=-10:10] [yrange=-2:2] [title=...]
#   one curve per line: <expression in x><TAB><label>[<TAB>#colour]
#   expressions use JS/gnuplot-style maths (x**3, sin(x), abs(x)...).
# The curves are sampled in the browser by assets_src/other/charts.ts
# (uPlot), so the page ships formulas, not point data. Without JS the
# formulas themselves are listed.
plot () {
    local content="${1//'<br/>'/}"
    shift 2   # drop "CONTENT" and "#PLOT"
    local attrs="" title="" in_title=0
    for arg in "$@"; do
        case "$arg" in
            xrange=*) attrs+=" data-x=\"${arg#xrange=}\""; in_title=0 ;;
            yrange=*) attrs+=" data-y=\"${arg#yrange=}\""; in_title=0 ;;
            title=*)  title="${arg#title=}"; in_title=1 ;;
            *)        (( in_title )) && title+=" $arg" ;;
        esac
    done
    local out="<figure class=\"plot\"${attrs}><ul>" expr label color
    while IFS=$'\t' read -r expr label color; do
        [[ -z "${expr// /}" ]] && continue
        expr=${expr//&/&amp;}; expr=${expr//</&lt;}; expr=${expr//>/&gt;}
        out+="<li data-c=\"${color}\"><code>${expr}</code> ${label}</li>"
    done <<< "$content"
    out+="</ul>${title:+<figcaption>${title}</figcaption>}</figure><script type=\"module\" src=\"/assets/charts.js\"></script>"
    protect_raw_block "$out"
}

# Bar chart from tab-separated data (or csv=true for comma-separated):
# chart.py emits the data as a <table>, which assets_src/other/charts.ts
# (uPlot) draws as grouped bars. Without JS the table is shown as-is.
# attrs are key=value like #HEADER; put title= LAST since its value
# greedily eats every bare word up to the next key=, e.g.:
#   #CHART ylog=true unit=Mbps title=Bandwidth
#   category	1080p 30fps	1080p 60fps
#   H.264	8	16
#   MJPEG	50	100
#   #END CHART
chart () {
    local content="${1//'<br/>'/}"
    shift 2   # drop "CONTENT" and "#CHART"

    local current_key="" current_val=()
    while [[ $# -gt 0 ]]; do
        if [[ "$1" == *=* ]]; then
            if [[ -n "$current_key" ]]; then
                eval "attr_${current_key}=\"\${current_val[*]}\""
            fi
            current_key="${1%%=*}"
            current_val=("${1#*=}")
        else
            [[ -n "$current_key" ]] && current_val+=("$1")
        fi
        shift
    done
    if [[ -n "$current_key" ]]; then
        eval "attr_${current_key}=\"\${current_val[*]}\""
    fi

    local chart_args=(--title "${attr_title:-}")
    [[ -n "${attr_unit:-}" ]] && chart_args+=(--unit "${attr_unit}")
    [[ -n "${attr_width:-}" ]] && chart_args+=(--width "${attr_width}")
    [[ -n "${attr_height:-}" ]] && chart_args+=(--height "${attr_height}")
    [[ "${attr_ylog:-}" == "true" ]] && chart_args+=(--ylog)
    is_on "${attr_csv:-}" && chart_args+=(--csv)
    protect_raw_block "$(python3 .tooling/chart.py "${chart_args[@]}" <<< "$content")"
}

# iframeResizer is disabled (see the commented-out want_iframe_resizer
# block in final.sh) but kept here rather than deleted for now.
# want() {
# 	case "$3" in
# 		"iframe_resizer")
#             export want_iframe_resizer=1
#
# 			;;
# 		*)
# 			printf '<!-- want transformer recieved: "%s" which was not found -->' "$3"
# 			;;
# 	esac
# }

pdf () {
    # Native browser PDF viewer; the link is the fallback where none exists (most mobile browsers).
    printf '<object data="%s" type="application/pdf" width="100%%" height="600"><a href="%s">Open PDF</a></object>' "$3" "$3"
}

redirect () {
    printf '<meta http-equiv="refresh" content="0; url=%s" />' "$3"
}

# Embed a video with alt text (for the video element's aria-label — <video>
# has no native alt attribute) and an optional caption, e.g.:
#   #VIDEO /assets/videos/clip.webm alt=Robot arm picking up a cup
#   A quick clip showing the pick-and-place routine.
#   #END VIDEO
# alt (like #HEADER's attrs) takes every word up to the next key=value or
# end of line — no quotes. The caption body is optional; when omitted, the
# alt text is reused as the figcaption so there's always something visible
# under the video.
video () {
    content="$1"
    shift 2   # drop "CONTENT" and "#VIDEO"

    src=()
    current_key=""
    current_val=()

    while [[ $# -gt 0 ]]; do
        if [[ "$1" == *=* ]]; then
            if [[ -n "$current_key" ]]; then
                eval "attr_${current_key}=\"\${current_val[*]}\""
            fi
            current_key="${1%%=*}"
            current_val=("${1#*=}")
        else
            if [[ -n "$current_key" ]]; then
                current_val+=("$1")
            else
                src+=("$1")
            fi
        fi
        shift
    done
    if [[ -n "$current_key" ]]; then
        eval "attr_${current_key}=\"\${current_val[*]}\""
    fi

    src_path="${src[*]}"
    alt_text="${attr_alt:-}"
    alt_text="${alt_text//&/&amp;}"

    caption="${content%%'<br/>'}"
    if [[ -z "${caption//[[:space:]]/}" ]]; then
        caption="$alt_text"
    fi

    poster_attr=""
    [[ -n "${attr_poster:-}" ]] && poster_attr=" poster=\"${attr_poster}\""

    printf '<figure class="video-figure">
  <video src="%s" controls preload="metadata" playsinline aria-label="%s"%s>
    Your browser does not support the video tag. <a href="%s">Download the video</a> instead.
  </video>
  <figcaption>%s</figcaption>
</figure>' "$src_path" "$alt_text" "$poster_attr" "$src_path" "$caption"
}

pdfi () {
    local pdf_path="$3"
    local temp_folder="./out/.pond-gen/$(basename "$pdf_path" .pdf)"
    if ! [ -d "${temp_folder}" ]; then
        mkdir -p "${temp_folder}"
        convert -density 300 ".$pdf_path" ${temp_folder}/page-%03d.avif
    fi
    printf '<div class="pdf-container" id="pdf-container">'
    for f in ${temp_folder}/*.avif; do
        [ -e "$f" ] && echo "<img class='pdf-page' src=\"${f##.}\" alt=\"$(basename "$f")\">"
    done
    printf '</div>'
}

wip () {
	printf '<mark>🚧 This article is a work in progress 🚧</mark>'
}

verbatim () {
    printf '%s' "$1"  
}

# Create a table with
# the columns defined by a tab seperated list
# and the rows denoted by newlines

# TODO: Eliminate script and use css only
# https://css-tricks.com/css-only-carousel/
# TODO: Allow multile carousels in one page
carousel () {
	# CSS-only: horizontal scroll-snap strip (see .slides in styles.css), no script.
	content="$1"
	printf '<div class="slides">'
	while read -r line; do
		printf '<div><img src="%s" loading="lazy"></div>' "${line%'<br/>'}"
	done <<< "$content"
	printf '</div>'
}

columns () {
	content="$1"
	printf '<div class="row">%s</div>' "$content"
}

table () {
	content="$1"
	shift
	#printf "<div class=\"ovr-x\">"
	print_row () {
		columns=${1#\#TABLE}
		IFS=$TAB
		echo "<tr>"
		for column in $columns; do
			if [ -n "${column// }" ]; then
				echo "<${2:-td}>$column</${2:-td}>"
			fi
		done
		echo "</tr>"
	}

	headings=""
	classes=""
	#IFS=$TAB
	# shift
	for heading in "$@"; do
		# dbg ">>> ~ $heading"
		case "$heading" in
			'#TABLE')
				continue
				;;
			.*)
				classes="$classes ${heading#.}"
				continue
				;;
			*)
				headings="$headings	$heading"
				;;
		esac
	done
	dbg "Found classes: '$classes' and headings: '$headings'"
	echo "<table class=\"$classes\">"
	if [ -n "${headings/ /}" ]; then
		printf "<thead>"
		print_row "$headings" "th"
		printf "</thead>"
	fi

	printf "<tbody>"
	while read -r row; do
		print_row "$row"
	done <<< "$content"
	echo "</tbody></table>"
}
