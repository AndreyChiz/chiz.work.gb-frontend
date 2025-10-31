# ========================
# Stage 1: build React app
# ========================
FROM node:20-alpine AS builder

WORKDIR /app

# копируем lock-файлы для кеширования зависимостей
COPY package.json yarn.lock ./

# используем BuildKit cache для зависимостей
RUN --mount=type=cache,target=/root/.yarn \
    yarn install --frozen-lockfile

# копируем исходники
COPY . .

# билдим Vite
RUN yarn build

# =========================
# Stage 2: production image
# =========================
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
