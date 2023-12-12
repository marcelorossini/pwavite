/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 0 2px rgb(0,0,0,1)',
        DEFAULT: '0 0 4px rgb(0,0,0,1)',
        lg: '0 0 20px rgb(0,0,0,.8)',
        xl: '0 0 20px rgb(0,0,0,1)',
      },
      screens: {
        'min-sm': {'min': '641px'},
        'min-md': {'min': '769px'},
        'min-lg': {'min': '1025px'},
        'min-xl': {'min': '1281px'},
        'min-2xl': {'min': '1537px'},
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export {}