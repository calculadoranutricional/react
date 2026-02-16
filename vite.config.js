// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/tuti/', // ⬅️ AÑADE ESTA LÍNEA (nombre de tu repo)
})