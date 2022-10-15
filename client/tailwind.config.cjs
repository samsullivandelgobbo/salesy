/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#e4dcd3",
        
"secondary": "#032d61",
        
"accent": "#969594",
        
"neutral": "#e4dcd3",
        
"base-100": "#FFFFFF",
        
"info": "#a5f3fc",
        
"success": "#3CE281",
        
"warning": "#F1C227",
        
"error": "#E43A4D",
        },
      },
    ],
  },
  content: ["./src/**/*.{svelte, js, html}"],
  theme: {
    screens: {
      'sm': '350px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
    fontFamily: {
      hyundai: ['Hyundai Sans'],
    }
  },
},
  plugins: [
    require('daisyui'),
  ],
}
