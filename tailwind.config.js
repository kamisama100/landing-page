const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '280px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily:{
        main: ['Montserrat','sans-serif'],
      },
    },
  },
  plugins: [],
}
