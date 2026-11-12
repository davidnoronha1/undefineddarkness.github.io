# Optional: everything the build uses, for machines without uv/avifenc/ffmpeg.
FROM ghcr.io/astral-sh/uv:debian-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    bash git curl ca-certificates unzip imagemagick libavif-bin ffmpeg dos2unix python3 \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
