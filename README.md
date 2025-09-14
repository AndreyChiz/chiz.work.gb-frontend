# chiz.work.gd-spa ⚛️

[![Status](https://img.shields.io/badge/status-in%20development-yellow)](#)

> A minimal React + Vite setup with HMR and ESLint integration.  
> Проект находится в активной разработке.

---

## 🔧 Технологии

- **React** — фронтенд библиотека для построения UI
- **Vite** — современный сборщик с быстрым HMR
- **ESLint** — статический анализ кода
- **@vitejs/plugin-react** — использует Babel для Fast Refresh  
- **@vitejs/plugin-react-swc** — использует SWC для Fast Refresh

---

## ⚡ Особенности

- Минимальная настройка React + Vite для быстрого старта
- Горячая перезагрузка компонентов (HMR)
- Предустановленные ESLint правила для базового контроля качества кода
- Лёгкая интеграция TypeScript и type-aware правил через `typescript-eslint` (рекомендуется для production)

---

## 🚀 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/AndreyChiz/chiz.work.gd-spa.git
cd chiz.work.gd-spa

# Установить зависимости
npm install

# Запуск dev сервера с HMR
npm run dev
