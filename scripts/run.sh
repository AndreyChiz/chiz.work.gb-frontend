set -e

# 🔹 Читаем name и version из package.json
NAME=$(jq -r '.name' package.json)
VERSION=$(jq -r '.version' package.json)
IMAGE_NAME="${NAME}:${VERSION}"

echo "📦 Using image: $IMAGE_NAME"

export IMAGE_NAME

docker compose up --build -d

echo "📄 Logs:"
docker compose logs --tail=50

echo "✅ Frontend started successfully."