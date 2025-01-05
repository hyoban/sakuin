// @ts-check
import { defineConfig } from 'eslint-config-hyoban'

export default defineConfig({
  ignores: ['gql/**'],
  react: 'next',
  typeChecked: true,
})
