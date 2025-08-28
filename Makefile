
.PHONY: all build clean docker-build

all: build

build:
	@echo "--> Building CSS..."
	@make -C assets_src build-css
	@echo "--> Building other assets..."
	@make -C assets_src build-other
	@echo "--> Generating site..."
	@./generate

docker-build:
	@echo "--> Building Docker image..."
	@docker build -t website-builder .
	@echo "--> Running Docker container..."
	@docker run --name website-build website-builder
	@echo "--> Copying generated files from container..."
	@docker cp website-build:/app/out .
	@echo "--> Cleaning up Docker container..."
	@docker rm website-build

clean:
	@echo "--> Cleaning output directory..."
	@rm -rf out
