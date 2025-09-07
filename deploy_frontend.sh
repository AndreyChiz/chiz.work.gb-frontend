#!/bin/bash
set -e
yarn build
# Путь к билду фронта
FRONTEND_DIST="/home/www/src/chiz.work.gb-frontend/dist"

# Путь для публикации
PUBLIC_SITE="/home/www/public_sites/chiz.work.gd-frontend"

# Проверка наличия dist
if [ ! -d "$FRONTEND_DIST" ]; then
    echo "Ошибка: папка сборки фронта не найдена: $FRONTEND_DIST"
    exit 1
fi

# Создаём папку публикации, если её нет
mkdir -p "$PUBLIC_SITE"

# Очистка предыдущего билда
rm -rf "$PUBLIC_SITE"/*

# Копирование нового билда
cp -r "$FRONTEND_DIST"/* "$PUBLIC_SITE"/


echo "Фронт успешно задеплоен в $PUBLIC_SITE"
