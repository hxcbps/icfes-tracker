import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/icfes-tracker/math-tracker/' : '/',
  build: {
    outDir: 'dist/math-tracker',
  },
  plugins: [react()],
}))
