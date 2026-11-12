# make      -> rebuild JS bundles (bun) + the site
all:
	@$(MAKE) -s -C assets_src
	@./generate

.PHONY: all
