import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/dhruv-portfolio/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    allowedHosts: ['.ngrok-free.app']
  }
})
