render/%: %.pdf
	@echo "Processing $*"
	mkdir -p .render/$*
	make split/$*
	make getlinks/$*

split/%: %.pdf
	convert -density 300 $< -quality 90 .render/$*/p%03d.avif

getlinks/%: %.pdf
	grep -ao 'https\?://[^)]*' $< | sort -u > .render/$*/links.txt
