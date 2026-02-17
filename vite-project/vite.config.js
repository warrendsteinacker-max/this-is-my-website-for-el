import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Change this to relative so it works everywhere
  server: {
    port: 3000,
  }
})
