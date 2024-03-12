import { defineConfig } from 'vite'
import TSConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    TSConfigPaths(),
  ],
})
