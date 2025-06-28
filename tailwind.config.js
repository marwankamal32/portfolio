/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-100': '#100d25',
        'primary': '#050816',
        'secondary': '#aaa6c3',
      },
    },
  },
  plugins: [],
}
