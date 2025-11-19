
OUTPUT_FOLDER=../assets/handwritten

render/%: %.pdf
	@echo "Processing $*"
	mkdir -p $(OUTPUT_FOLDER)/$*
	make split/$*
	make getlinks/$*

split/%: %.pdf
	convert -density 300 $< -quality 90 $(OUTPUT_FOLDER)/$*/p%03d.avif

getlinks/%: %.pdf
	grep -ao 'https\?://[^)]*' $< | sort -u > $(OUTPUT_FOLDER)/$*/links.txt

clean:
	rm -rf ./.render
	rm -rf $(OUTPUT_FOLDER)