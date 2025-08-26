#!/usr/bin/env bash

# Warning / Error / Debug
warn () {
	[ -z "$quiet" ] && printf "\033[33mWWW\033[0m %s\n" "$@" >&2
}

err () {
	printf "\033[31m[ERR]\033[0m %s\n" "$@" >&2
}

dbg () {
	if [ -n "${pond_debug:-}" ]; then
		format=$1
		shift
		printf "\033[32mDBG\033[0m${debug_prefix} $format \n" "$@" >&2
	fi
}

export D_POND="\033[1;30;44m  POND  \033[0m"
export D_INITIAL_TRANSFORMER="\033[1;30;44m  INITIAL  \033[0m"

escape_code_block () {
	local -n retptr=${1}
	ptr=$retptr
	ptr=${ptr//'#'/'&#35;'}
	ptr=${ptr//'<'/'&lt;'}
	ptr=${ptr//'>'/'&gt;'}
	ptr=${ptr//'['/'&lsqb;'}
	ptr=${ptr//']'/'&rsqb;'}
	ptr=${ptr//'='/'&equals;'}
	ptr=${ptr//'*'/'&#42;'}
	retptr=$ptr
}

get_temp_dir_in_output_folder () {
	mkdir -p ./out/.pond-tmp
	tmpdir=$(mktemp -d ./out/.pond-tmp/XXXXXXXX)
	echo "$tmpdir"
}

get_temp_file_in_output_folder () {
	local suffix=${1:-}
	[ -n "$suffix" ] && suffix=".$suffix"
	mkdir -p ./out/.pond-tmp
	tmpfile=$(mktemp ./out/.pond-tmp/XXXXXXXX$suffix)
	echo "$tmpfile"
}

# escape_block () 

# Reset
export C_RESET="\033[0m"

# Foreground colors (basic 8)
export C_FG_BLACK="\033[30m"
export C_FG_RED="\033[31m"
export C_FG_GREEN="\033[32m"
export C_FG_YELLOW="\033[33m"
export C_FG_BLUE="\033[34m"
export C_FG_MAGENTA="\033[35m"
export C_FG_CYAN="\033[36m"
export C_FG_WHITE="\033[37m"
export C_FG_GRAY="\033[90m"

clean_markup () {
    local -n ptr=${1}
    ptr=${ptr//'<span class="reset">'/}
    ptr=${ptr//'</span>'/}
    ptr=${ptr#*'<h1'*'>'}
    ptr=${ptr%'</h1>'*}
    ptr=${ptr//'}'/}
    ptr=${ptr//'{'/}
    ptr=${ptr//'<img'*'>'/}
}

# Check if a "string list" contains a word.
contains() {
    case " $1 " in *" $2 "*) return 0; esac; return 1
}

# Contains but for an array
contains_in_array () {
  local e match="$1"
  shift
  for e; do [[ "$e" == "$match" ]] && return 0; done
  return 1
}

# Start grepping from line
get-line-number-of () {
	# 1 = File 2 = Line to start from 3 = Check 4 = Return Value
	local -n ptr=${4}
	local lineno=0
	while read -r __line; do
		# printf "??? $__line = $3\n"
		if [[ "$__line" == *"$3" ]]; then
			ptr=$(( lineno + 1 ))
			return
		fi
		lineno=$(( lineno + 1 ))
	done < <(tail -n +"$2" <<< "$1")
}

# Get everything between 2 line numbers
get-between () {
	sed -n "${2},${3}p" <<< "$1"
}

# Remove first and last line
snip () {
	sed '1d;$d' <<< "$1"
}

trim() {
    local var="$*"
    # remove leading whitespace characters
    var="${var#"${var%%[![:space:]]*}"}"
    # remove trailing whitespace characters
    var="${var%"${var##*[![:space:]]}"}"   
    printf '%s' "$var"
}

get-functions() {
	local -n ptr=${1}
	IFS=$'\n' read -d "" -ra functions < <(declare -F)
	ptr=${functions[*]//declare -f }
}

# Calculations
calc() { awk "BEGIN{printf $*}"; }

# Time in Milliseconds
ms () {
	date +"%s%3N"
}

_start=0
timer () {

	[ -z "$pond_debug" ] && return

	case $1 in
		start)
			_start=$(ms)
			;;
		end)
			printf "\e[32mDBG\e[0m Finished in \033[34m" >&2
			calc "$(ms) - ${2:-$_start}"  >&2
			printf '\033[0mms\n' >&2
			;;
	esac
}

export NEWL="
"
export TAB="	"
