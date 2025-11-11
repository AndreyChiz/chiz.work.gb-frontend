import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,       // слушать все интерфейсы, не только localhost
    port: 5173,       // порт, который используем
    strictPort: true, // не менять порт, если занят — ошибка
  },
})
