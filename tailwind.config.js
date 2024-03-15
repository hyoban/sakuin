import { iconsPlugin } from '@egoist/tailwindcss-icons'
import typography from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [typography(), iconsPlugin({ scale: 1.3 })],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-sans)',
          ...defaultTheme.fontFamily.sans,
        ],
        mono: [
          'Monolisa Variable',
          'Monolisa',
          'Input Mono',
          'Input',
          ...defaultTheme.fontFamily.mono,
        ],
      },
    },
  },
}
