/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.{html,js,templ,css}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

