import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://lespend.github.io/kopti-i-tochka',
  plugins: [react()],
})
