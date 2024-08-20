/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      'garamond': ['EB Garamond','sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require('daisyui'),require('tailwindcss-animated')],
}