import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import TSConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    UnoCSS(),
    TSConfigPaths(),
  ],
})
