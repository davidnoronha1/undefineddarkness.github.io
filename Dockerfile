# Use the Debian Slim base image
FROM ghcr.io/astral-sh/uv:debian-slim

# Install system dependencies
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
    && rm -rf /var/lib/apt/lists/*

# Install bun
RUN curl -fsSL https://bun.sh/install | bash
ENV PATH="/root/.bun/bin:${PATH}"

# Install python dependencies
# RUN uv pip install cmarkgfm ansi2html fonttools brotli

RUN bun --version

# Set the working directory
WORKDIR /app

# Copy the application source code
COPY . /app

# The command to run the build.
CMD ["make"]