const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    'public/index.html',
    'src/**/*.js'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: '#5e9e9e',
        orange: '#e9967a',
        primary: '#2a3a4a',
        lightYellow: '#ffe4c4',
        lightSky: '#f0ffff'
      }
    },
  },
  variants: {
    extend: {
      width: ['children']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-children')
  ],
}
