#!/bin/bash
set -e

echo "📤 Logging in to registry $REGISTRY"

echo "$DOCKER_PASS" | docker login "$REGISTRY" -u "$DOCKER_USER" --password-stdin

docker tag "$IMAGE_NAME" "$REGISTRY/$IMAGE_NAME"
docker push "$REGISTRY/$IMAGE_NAME"
