/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/app/pages/**/*.{html,js,scss}",
    "./src/app/shared/**/*.{html,js,scss}",
    "./src/app/app.component.html",
    "./src/index.html"
  ],
  theme: {
    container: {
       screens: {
        '2xl': '1396px'
       }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      tertiary: 'var(--color-tertiary)',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: colors.gray,
    },
    fontFamily: {},
    extend: {}
  },
  plugins: [],
}
