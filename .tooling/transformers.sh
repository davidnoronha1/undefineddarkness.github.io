#!/usr/bin/env bash

# UTILITIES:

# Generate syntax highlighted html code
# using Vim's :TOHtml command

# TRANSFORMERS:

# Put the content in a box. Simple enough
box () {
	printf "<div class='box'>\n%s\n</div>" "$1"
}

# Folded text
f () {
	content=$1
	shift
	trimmed=$*
	trimmed=${trimmed#'#f '}
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
    echo "  <h1>${title[*]}</h1>"
    echo "  <!-- post_description=\"${content%%'<br/>'}\" -->"
    echo "</header>"
}


gnuplot() {
    # Strip <br/> from content
    local content="${1//'<br/>'/}"
    shift

    # Defaults
    local width=90
    local height=30
    local title=""
    local legend=""
    local svg="false"

    # Parse key=value pairs
    for arg in "$@"; do
        case "$arg" in
            width=*)  width="${arg#width=}" ;;
            height=*) height="${arg#height=}" ;;
            title=*)  title="${arg#title=}" ;;
            legend=*) legend="${arg#legend=}" ;;
            svg=*)    svg="${arg#svg=}" ;;
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

    if [[ "$svg" == "true" ]]; then
        gnuplot_command="
        set terminal svg dynamic enhanced font 'Arial,10' background rgb \"#111\"
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
        /usr/bin/env gnuplot <<<"$gnuplot_command"
        # printf '</div>'
    else
        gnuplot_command="
        set terminal block octant ansirgb size ${width},${height}
        ${title:+set title '${title}'}
        ${legend:+set key ${legend}}
        ${style_block}
        ${content}
        exit
        "
        export want_tab_script=1
        code_=$content
        escape_code_block code_
        printf '<div>
                    <div class="gnuplot-container">'
        /usr/bin/env gnuplot -p <<<"$gnuplot_command" | ansi2html -n | \
            sed -e 's/#a0a0a0/var(--black-darker)/g' \
                -e 's/color:#bbb;white-space:pre-wrap;word-wrap:break-word;overflow-wrap:break-word//g'
        printf '    </div>
                    <details class='minor-fold'>
                        <summary>Code</summary>
                        <pre>
                            <code>%s</code>
                        </pre>
                    </details>
                </div>' "$code_"
    fi
}

want() {
	case "$3" in
		"iframe_resizer")
            export want_iframe_resizer=1
			
			;;
		*)
			printf '<!-- want transformer recieved: "%s" which was not found -->' "$3"
			;;
	esac
}

pdf () {
    export want_pdf_object=1
    export pdfs_to_embed+=("$3")
    # printf '<iframe class="pdfobject" title="Embedded PDF" src="%s" allow="fullscreen" style="border: none; position: absolute; inset: 0px; width: 100%; height: 100%;"></iframe>' "${3}"
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
	printf '<div class="row>%s</div>' "$content"
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
