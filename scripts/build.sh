#!/bin/bash
set -e

echo "🛠 Building Docker image: $IMAGE_NAME"

export DOCKER_BUILDKIT=1
docker build \
    --file Dockerfile \
    --tag "$IMAGE_NAME" \
    --progress=plain .
