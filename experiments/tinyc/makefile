CC=clang
# SOURCES=./hw.c
SOURCES=./src.c ./tigr.c
LIBS=-lGLU -lGL -lX11
BASIC_CC = ${CC} ${SOURCES} ${LIBS} -march=native -fuse-ld=lld

all: build-all

basic:
	@echo "\033[1m$@:\033[0m"
	mkdir -p out
	${BASIC_CC} -o out/basic
	
BASIC_OPTIMIZED_CC = ${BASIC_CC}  -Oz -fno-ident -fno-asynchronous-unwind-tables 
basic-optimized:
	@echo "\033[1m$@:\033[0m"
	mkdir -p out
	${BASIC_OPTIMIZED_CC} -o out/basic-optimized

BASIC_OPTIMIZED_STRIPPED_CC = ${BASIC_OPTIMIZED_CC} -s
basic-optimized-stripped:
	@echo "\033[1m$@:\033[0m"
	mkdir -p out
	${BASIC_OPTIMIZED_STRIPPED_CC} -o out/basic-optimized-stripped

BASIC_OPTIMIZED_STRIPPED_LTO_CC = ${BASIC_OPTIMIZED_STRIPPED_CC} -flto
basic-optimized-stripped-lto:
	@echo "\033[1m$@:\033[0m"
	mkdir -p out
	${BASIC_OPTIMIZED_STRIPPED_LTO_CC} -o out/basic-optimized-stripped-lto

BASIC_OPTIMIZED_STRIPPED_LTO_LINKER_CC = ${BASIC_OPTIMIZED_STRIPPED_LTO_CC} -z noseparate-code -Wl,--gc-sections -Wl,--strip-all -Wl,--icf=all -Wl,--lto-O3 -Wl,-O2
basic-optimized-stripped-lto-linker:
	@echo "\033[1m$@:\033[0m"
	mkdir -p out
	${BASIC_OPTIMIZED_STRIPPED_LTO_LINKER_CC} -o out/basic-optimized-stripped-lto-linker

basic-optimized-stripped-lto-linker-compressed-zstd: basic-optimized-stripped-lto-linker
	@echo "\033[1m$@:\033[0m"
	zstd -22 --ultra -f out/basic-optimized-stripped-lto-linker -o out/basic-optimized-stripped-lto-linker.zst

basic-optimized-stripped-lto-linker-compressed-gz:
	@echo "\033[1m$@:\033[0m"
	rm -f out/basic-optimized-stripped-lto-linker.gz
	gzip --best -f out/basic-optimized-stripped-lto-linker -c > out/basic-optimized-stripped-lto-linker.gz

basic-optimized-stripped-lto-linker-compressed-xz:
	@echo "\033[1m$@:\033[0m"
	rm -f out/basic-optimized-stripped-lto-linker.xz
	xz -e -k -9 out/basic-optimized-stripped-lto-linker

basic-optimized-stripped-lto-linker-compressed-bzip2:
	@echo "\033[1m$@:\033[0m"
	rm -f out/basic-optimized-stripped-lto-linker.bz2
	bzip2 -k --best ./out/basic-optimized-stripped-lto-linker

basic-optimized-stripped-lto-linker-compressed-7z:
	@echo "\033[1m$@:\033[0m"
	rm -f out/basic-optimized-stripped-lto-linker.7z
# 	7z a -mx=9 -m0=LZMA2 -mfb=64 -md=64k out/basic-optimized-stripped-lto-linker.7z out/basic-optimized-stripped-lto-linker
	7z a -mx=9 out/basic-optimized-stripped-lto-linker.7z out/basic-optimized-stripped-lto-linker

basic-optimized-stripped-lto-linker-compressed-upx: basic-optimized-stripped-lto-linker
	@echo "\033[1m$@:\033[0m"
	rm -f out/basic-optimized-stripped-lto-linker-upx
	upx --ultra-brute --no-lzma out/basic-optimized-stripped-lto-linker -o out/basic-optimized-stripped-lto-linker-upx

source-code:
	@echo "\033[1m$@:\033[0m"
	mkdir -p out
	cp makefile src.c tigr.c tigr.h out/
	tar -czf out/source-code.tar.gz -C out makefile src.c tigr.c tigr.h
	rm out/makefile out/src.c out/tigr.c out/tigr.h

build-all: basic \
			basic-optimized basic-optimized-stripped \
			basic-optimized-stripped-lto \
			basic-optimized-stripped-lto-linker \
			basic-optimized-stripped-lto-linker-compressed-zstd \
			basic-optimized-stripped-lto-linker-compressed-upx \
			basic-optimized-stripped-lto-linker-compressed-gz \
			basic-optimized-stripped-lto-linker-compressed-xz \
			basic-optimized-stripped-lto-linker-compressed-bzip2 \
			basic-optimized-stripped-lto-linker-compressed-7z \
			source-code
	@echo "\033[1m$@:\033[0m"
	du -b out/*

clean:
	@echo "\033[1m$@:\033[0m"
	rm -rf out
