import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  // O resolve deve ficar FORA do array plugins
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})