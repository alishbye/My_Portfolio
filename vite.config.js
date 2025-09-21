import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.NODE_ENV === 'production' ? '/My_Portfolio/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})