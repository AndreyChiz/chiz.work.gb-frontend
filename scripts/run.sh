set -e


# NAME=$(jq -r '.name' package.json)
# VERSION=$(jq -r '.version' package.json)

# IMAGE_NAME="${NAME}:${VERSION}"

echo "⚠️ Using image: $IMAGE_NAME"
echo "⚠️ Рroject: $PROJECT_NAME"
echo "⚠️ Host: $HOST"

export IMAGE_NAME

export COMPOSE_PROJECT_NAME="$PROJECT_NAME"
HOST=$HOST docker compose up --build -d


echo "✅ Frontend started successfully."