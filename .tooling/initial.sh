#!/bin/bash

# Dummy fallback. loaded_hljs starts unset (falsy) — it's only flipped on
# inside __syntax_hl_dummy, i.e. only when the `highlight` CLI isn't
# available and a page actually has a highlighted code block, so the
# highlight.js CDN payload isn't shipped on every page regardless of
# whether it's ever used.
loaded_hljs=0
__syntax_hl_dummy () {
	loaded_hljs=1
	cat
}

# Real one
__syntax_hl_highlight () {

	highlight\
		--syntax "$1"\
		-q\
		--force \
		--stdout \
		-f \
		--inline-css \
		--no-trailing-nl \
		--pretty-symbols \
		--config-file=assets_src/syntax.theme \
		--no-version-info | sed 's/*/\&ast;/g;'
}



# Check if highlight is installed, if so use it else use the other thing
syntax_hl_backend="__syntax_hl_dummy"
if command -v highlight &> /dev/null; then
	syntax_hl_backend="__syntax_hl_highlight"
fi

slugify () {
    echo "$1" | iconv -c -t ascii//TRANSLIT | sed -E 's/[~^]+//g' | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+|-+$//g' | tr A-Z a-z
}

# Renders \(...\) inline math spans (KaTeX's inline delimiter) on a single
# line via render_math.ts, same build-time approach as the "math" fenced
# block below. Only ever called on non-code-block lines (see the call site
# in initial_transformer) — code blocks routinely contain literal `\(`
# sequences (regex examples etc.) that escape_code_block doesn't escape, so
# this must never run over already-captured code content.
render_inline_math () {
	local -n line_ref=${1}
	local match rendered
	while IFS= read -r match; do
		[ -z "$match" ] && continue
		local tex=${match#'\('}
		tex=${tex%'\)'}
		rendered=$(bun .tooling/render_math.ts <<< "$tex")
		line_ref=${line_ref/"$match"/"$rendered"}
		loaded_katex_css=1
	done < <(grep -Po '\\\(.*?\\\)' <<< "$line_ref")
}

# This will be called before any *tranforming* has taken place
# It is useful for defining custom syntax as well as 
# following the markdown syntax.
# Its counterpart: final_transformer is also available.
initial_transformer () {
	local -n prefix_ptr=${1}
	local -n output_ptr=${2}
	IFS=$NEWL
	local inside_list=0
	local inside_code_block=0
	local inside_quote_block=0
	local inside_paragraph=0
    local inside_transformer_block=0
	local loaded_mermaid=0
	local loaded_katex_css=0
	local skip_forced_newline=0
	local blank_run=0
	local after_block_end=0

	while read -r line || [ -n "$line" ]; do
		skip_forced_newline=0

		if [ -z "${line/ /}" ] && (( inside_list )) && ! (( inside_code_block )) && ! (( inside_quote_block )); then
			inside_list=0
			dbg "SKIPPING LINE : $line"
            output_ptr+="</li>$NEWL</ul><br/>"
			continue
		fi

		if (( inside_code_block == 0 )) && [[ "$line" == *'\('* ]]; then
			render_inline_math line
		fi

		case "$line" in

			# For HTML Comments
			'<!--'*'-->')
				output_ptr+="${line}$NEWL"
				continue
			;;

			# For reader mode.
			'</'*'>'*)
				inside_transformer_block=0
				output_ptr+="${line}$NEWL"	
				# printf '%s$NEWL' "$line"
				continue
			;;

			# HTML Block entirely in one line
			'<'*'>'*'</'*'>')
				(( inside_code_block == 0 )) && output_ptr+="$line"
			;;

			# HTML Block over multiple lines
			'<'*'>'*)
				if (( inside_code_block == 0 )); then
					inside_transformer_block='verbatim'
					output_ptr+="$line"
				fi
			;;

			# Primary Article Heading
			'# '*)
				if ! (( inside_code_block )); then
					while (( blank_run > 0 )); do
						output_ptr=${output_ptr%'<br/>'"$NEWL"}
						blank_run=$(( blank_run - 1 ))
					done
					output_ptr+="<header>$NEWL<h1>${line#'# '}</h1>$NEWL</header>$NEWL" #${line#'# '}"
					continue
				fi
				;;

			# Other heading levels
			'## '* | '### '* | '#### '* | '##### '* | '###### '*)

				# End previous paragraph if opened
				if (( inside_paragraph )); then
					inside_paragraph=0
					if [[ "$output_ptr" == *"<p>$NEWL" ]]; then
						# Back-to-back headings: the previous heading opened
						# a <p> but nothing was ever written into it before
						# this heading closed it. Drop the empty tag instead
						# of closing it — an empty <p></p> between two
						# headings renders as an extra, unwanted gap.
						output_ptr=${output_ptr%"<p>$NEWL"}
					else
						output_ptr+="</p>$NEWL"
					fi
				fi

				if ! (( inside_code_block )); then
					# Swallow any stray <br/> left by blank source lines right
					# before this heading; the heading's own margin handles spacing.
					while (( blank_run > 0 )); do
						output_ptr=${output_ptr%'<br/>'"$NEWL"}
						blank_run=$(( blank_run - 1 ))
					done
					local level=${line%% *}
                    local id=$(slugify "${line#$level }")
					output_ptr+="<h${#level} id=\"${id}\">${line#"$level "}</h${#level}>$NEWL" # "${#level}" "$id" "${line#"$level "}" "${#level}"
					inside_paragraph=1
					output_ptr+="<p>$NEWL"	
					# printf '<p>$NEWL'
					continue
				fi
				;;

			# Horizontal Line
			'---' | '___' | '***' )
				(( inside_code_block == 0 )) && output_ptr+="<hr />$NEWL" && continue # printf '<hr />$NEWL' && continue
				;;
			'#~'*)
				(( inside_code_block == 0 )) && output_ptr+="&num;${line#'#~ '}$NEWL" && continue
				;;
            '#END '*)
                (( inside_code_block == 0 )) && inside_transformer_block=0 && output_ptr+="$line" && skip_forced_newline=1
                (( inside_code_block == 0 )) && after_block_end=1
                ;;
            #'\(')
			#	(( inside_code_block == 0 )) && inside_transformer_block='math' && printf '%s' "$line"
			#	;;
			'#verbatim'*|'#VERBATIM'*)
                (( inside_code_block == 0 )) && inside_transformer_block='verbatim' && output_ptr+="$line"
                ;;
			#'\)')
			#	(( inside_code_block == 0 )) && inside_transformer_block='' && printf '%s' "$line" && skip_forced_newline=1
			#	;;
            '#'*)
                (( inside_code_block == 0 )) && inside_transformer_block=1 && output_ptr+="$line" && skip_forced_newline=1
                ;;
			'> '*)
				(( inside_code_block == 0 )) && output_ptr+="<q>${line#'> '}</q><br/>$NEWL" || output_ptr+="$line"
				continue
				;;
			'```'*)

				if (( inside_code_block )); then
					dbg "--- END CODE BLOCK ---"

					if [ "$language" = "mermaid" ]; then
						output_ptr+="<div class=\"mermaid\">$ptr</div>" # "$ptr"
						loaded_mermaid=1
					elif [ "$language" = "math" ]; then
						# Render to static HTML at build time (bun + the katex npm
						# package) instead of shipping katex.min.js + auto-render to
						# every page and re-rendering it client-side on every visit.
						output_ptr+="$(bun .tooling/render_math.ts --display <<< "$ptr")$NEWL"
						loaded_katex_css=1
					elif [ -z "$language" ]; then
						# Escape charachters that get caught by `final_transformer` later on
						# TODO: Convert to single sed call
						escape_code_block ptr
						output_ptr+="${ptr}</code>$NEWL</pre>$NEWL"
					else
						ptr=$($syntax_hl_backend "$language" <<< "$ptr")
						escape_highlighted_code_block ptr
						output_ptr+="${ptr}$TAB</code>$NEWL</pre>$NEWL"
						# printf '$TAB</code>$NEWL</pre>$NEWL'
					fi
					
					unset ptr
					unset language
					inside_code_block=0
					continue
				else
					local ptr=''
					local language=${line#'```'}
					inside_code_block=1
					# Swallow any stray <br/> left by blank source lines right
					# before this code block.
					while (( blank_run > 0 )); do
						output_ptr=${output_ptr%'<br/>'"$NEWL"}
						blank_run=$(( blank_run - 1 ))
					done
					if [[ "$language" != "mermaid" &&  "$language" != "math" ]]; then

						output_ptr+="<pre>$NEWL<code class=\"language-${language:-plaintext}\">"
					fi
					dbg "--- CODE BLOCK ($language) ---"
					continue
				fi
				;;
			'>>>'*)
				if ! (( inside_code_block )); then	

				if ! (( inside_quote_block )); then
					inside_quote_block=1
					output_ptr+="<figure>$NEWL<blockquote>$NEWL"
					continue
				else
					inside_quote_block=0
					local caption=${line#'>>>'}
					caption=${caption# }
					output_ptr+="</blockquote>$NEWL"
					[ -n "$caption" ] && output_ptr+="<figcaption>${caption}</figcaption>$NEWL" # "$caption"
					output_ptr+="</figure>$NEWL"
				fi

				fi
				;;
			'- '*)
				if ! (( inside_list )); then
					inside_list=1
					output_ptr+="<ul>$NEWL"
					output_ptr+="<li>${line#'- '}"
				else
					output_ptr+="</li>$NEWL<li>${line#'- '}"
				fi
				;;
			*)
				if (( inside_code_block == 0 )); then
					output_ptr+="$line"
				fi
				;;
		esac
		
		if (( inside_code_block == 1 )); then
			ptr+=$line$NEWL
			dbg "$TAB++ $line"
		else
			if (( skip_forced_newline == 1)) || [ "$inside_transformer_block" == "math" ] || [[ "$inside_transformer_block" == 'verbatim' ]]; then
				output_ptr+="$NEWL"; 
				dbg "Skipping newline for '$line'"
				continue
			fi

			if ! [[ "$line" == '<'* ]]; then
				if [ -z "$line" ] && (( after_block_end )); then
					# Swallow blank line(s) right after a #END block close;
					# the block's own markup already handles its spacing.
					dbg "Swallowing blank line after block end"
				else
					output_ptr+="<br/>$NEWL"
					if [ -z "$line" ]; then
						blank_run=$(( blank_run + 1 ))
					else
						blank_run=0
						after_block_end=0
					fi
				fi
			fi
		fi
	done

	if (( loaded_mermaid )); then 
		prefix_ptr+='
		<!-- MERMAID LOADING -->
		<script defer src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js" onload="mermaid.initialize({startOnLoad:true})"></script>
		<script>document.addEventListener("DOMContentLoaded", () => mermaid.initialize({startOnLoad:true}))</script>'
	fi

	if (( loaded_katex_css )); then
		# Math itself is already static HTML (rendered at build time by
		# .tooling/render_math.ts, see the "math" fence branch above) — this
		# CSS is only needed client-side for glyph styling/fonts, no JS.
		prefix_ptr+="
		<!-- KATEX CSS -->
		 <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css\" integrity=\"sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP\" crossorigin=\"anonymous\">
		"
	fi

	if (( loaded_hljs )); then
		prefix_ptr+='
		<!-- HIGHLIGHTJS LOADING -->
		<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/monokai.min.css" as="style" onload="this.onload=null;this.rel='"'stylesheet'"'">
		
<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/monokai.min.css"></noscript>
		<script defer src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/highlight.min.js"></script>
		<script defer src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.7.0/build/languages/x86asm.min.js"></script>
		<!-- ADD MORE LANGUAGES HERE IF NEEDED -->
		<script>
		document.addEventListener("DOMContentLoaded", (event) => {
			hljs.highlightAll();
		});
		</script>
		'
	fi
}
