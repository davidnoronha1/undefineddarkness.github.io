FROM ghcr.io/astral-sh/uv:debian-slim

RUN apt-get update && apt-get install -y --no-install-recommends \
    bash \
    curl \
    imagemagick \
    highlight \
    gnuplot-nox \
    perl \
    fontforge-nox \
    make \
    colorized-logs \
    ca-certificates \
    unzip \
    ffmpeg \
    jq \
    python3 \
    dos2unix \
    && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

WORKDIR /app

# Pre-warm Bun's download cache so the first bun install on container start is fast.
# The actual node_modules are created at runtime (bind-mount replaces /app).
COPY package.json bun.lock ./
RUN bun install
