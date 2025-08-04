import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      ui: path.resolve(__dirname, '../../packages/ui/src'),
      utils: path.resolve(__dirname, '../../packages/utils/src'),
    },
  },
})
