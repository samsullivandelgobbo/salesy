/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dark"]
  },
  content: ["./src/**/*.{svelte, js, html, astro, jsx, tsx, vue}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
