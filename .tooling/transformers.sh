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


gnuplot() {
    # Strip <br/> from content
    local content="${1//'<br/>'/}"
    shift

    # Defaults. width/height are pixels (the svg terminal's unit) — these
    # match chart.py's defaults so #GNUPLOT and #CHART look consistent.
    local width=700
    local height=400
    local title=""
    local legend=""
    local interactive="true"

    # Parse key=value pairs
    for arg in "$@"; do
        case "$arg" in
            width=*)       width="${arg#width=}" ;;
            height=*)      height="${arg#height=}" ;;
            title=*)       title="${arg#title=}" ;;
            legend=*)      legend="${arg#legend=}" ;;
            interactive=*) interactive="${arg#interactive=}" ;;
        esac
    done

    dbg "Gnuplot content: ${C_FG_GRAY}'%s'${C_RESET}" "$content"

    # Shared pastel palette + styles
    local style_block="
    set palette defined (\
        0 '#FFB3BA',\
        1 '#FFDFBA',\
        2 '#FFFFBA',\
        3 '#BAFFC9',\
        4 '#BAE1FF',\
        5 '#C9BAFF',\
        6 '#FFBAF3'\
    )

    set style line 1 lc rgb '#FFB3BA' lw 2 pt 7 ps 1.2
    set style line 2 lc rgb '#FFDFBA' lw 2 pt 7 ps 1.2
    set style line 3 lc rgb '#FFFFBA' lw 2 pt 7 ps 1.2
    set style line 4 lc rgb '#BAFFC9' lw 2 pt 7 ps 1.2
    set style line 5 lc rgb '#BAE1FF' lw 2 pt 7 ps 1.2
    set style line 6 lc rgb '#C9BAFF' lw 2 pt 7 ps 1.2
    set style line 7 lc rgb '#FFBAF3' lw 2 pt 7 ps 1.2
    set style line 8 lc rgb '#F0F0F0' lw 2 pt 7 ps 1.2

    set linetype cycle 8
    "

    # mouse standalone: embeds gnuplot's own gnuplot_svg.js inline (no
    # external script tag, no CSP issues) so per-point/box 'hypertext'
    # labels (see the plot script itself) show as native hover tooltips —
    # a few KB of gnuplot-maintained JS, not anything we're hand-rolling.
    # interactive=false drops "mouse", producing plain static SVG with no
    # embedded script at all.
    local terminal_mouse=""
    [[ "$interactive" != "false" ]] && terminal_mouse="mouse "

    gnuplot_command="
    set terminal svg ${terminal_mouse}standalone size ${width},${height} dynamic enhanced font 'Arial,10' background rgb \"#111\"
	set border lc rgb \"white\"
	set tics textcolor rgb \"white\"
	set key tc rgb \"white\"
	set xlabel tc rgb \"white\"
	set ylabel tc rgb \"white\"
	set title tc rgb \"white\"
    set output '|cat'
    ${title:+set title '${title}'}
    ${legend:+set key ${legend}}
    ${style_block}
    ${content}
    exit
    "
    # printf '<div class="gnuplot-container">'
    # See protect_raw_block in helpers.sh — "mouse standalone" embeds a
    # JS blob that final_transformer's markdown-lite pass would otherwise
    # mangle (or break outright with a syntax error).
    local svg_out
    svg_out=$(/usr/bin/env gnuplot <<<"$gnuplot_command")
    # gnuplot's mouse-mode boilerplate emits the coordinate-readout <text>
    # (toggled by clicking the plot) with no fill color, so it defaults to
    # black — invisible against our dark (#111) plot background. Force it
    # white. (The hypertext tooltip box is unaffected — it already draws
    # its own white background rect, see chart.py.)
    svg_out=${svg_out/'<text id="coord_text" text-anchor="start" pointer-events="none"'/'<text id="coord_text" text-anchor="start" pointer-events="none" fill="white"'}
    protect_raw_block "$svg_out"
    # printf '</div>'
}

# Static, build-time SVG bar chart with real hover tooltips — data-driven
# wrapper around chart.py, which generates the grouped-boxes +
# hypertext-anchor gnuplot script (see the #GNUPLOT hypertext comment
# above) from plain tab-separated data instead of requiring it hand-written
# per article. Same #TABLE-style authoring format; attrs are key=value
# like #HEADER. Put title= LAST on the line since (like #HEADER/#VIDEO)
# its value greedily eats every bare word up to the next key=, e.g.:
#   #CHART ylog=true unit=Mbps width=700 height=400 title=Bandwidth
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
    [[ "${attr_interactive:-}" == "false" ]] && chart_args+=(--no-interactive)

    local svg_out
    svg_out=$(python3 .tooling/chart.py "${chart_args[@]}" <<< "$content")
    protect_raw_block "$svg_out"
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
    export want_pdf_object=1
    export pdfs_to_embed+=("$3")
    # printf '<iframe class="pdfobject" title="Embedded PDF" src="%s" allow="fullscreen" style="border: none; position: absolute; inset: 0px; width: 100%; height: 100%;"></iframe>' "${3}"
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
    export want_pdfi=1
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
    export want_carousel_script=1
	content="$1"
	printf '
	<div class="gallery-container">
	<div class="thumbnails"></div>
		<div class="slides">\n'
	while read -r line; do
		printf '<div><img src="%s"></div>' "${line%'<br/>'}"
	done <<< "$content"
	printf '</div>
	</div>'
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
