# Optional: zero-setup fallback for machines without uv. Image → AVIF
# transcoding runs on Pillow (a uv-managed dep), so the only external tool
# the build really needs is ffmpeg, and that's just for raw video.
FROM ghcr.io/astral-sh/uv:debian-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    bash git curl ca-certificates unzip ffmpeg dos2unix python3 \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

WORKDIR /app
COPY package.json bun.lock ./
RUN bun install
