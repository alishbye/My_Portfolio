// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/My_Portfolio/', // ✅ GitHub Pages path
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
