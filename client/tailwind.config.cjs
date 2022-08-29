/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: ["dark"]
  },
  content: ["./src/**/*.{svelte, js, html}"],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
