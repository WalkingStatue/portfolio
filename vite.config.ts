import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  build: { target: 'safari15', cssTarget: 'safari15' },
  plugins: [
    react(),
  ],
  server: {
    allowedHosts: ['.ngrok-free.app']
  }
})
