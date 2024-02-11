import { iconsPlugin } from "@egoist/tailwindcss-icons"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  plugins: [iconsPlugin({ scale: 1.3 })],
}
