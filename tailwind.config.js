/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#DB0011',
      'secondary': '#008580',
      'white': '#fff',
      'gray': '#77838f',
      'default': '#333333',
      'light-gray': '#F7F7F7',
      'medium-gray': '#EDEDED',
    },
    extend: {
      height: {
        '17': '68px',
      },
      backgroundImage: {
        'hero-bg': "url('../assets/images/img-sky-hero.jpg')",
        'check-bg': "url('../assets/images/icon-check.svg')",
        'clouds': "url('../assets/images/bg-clouds.jpg')",
      }
    },
  },
  plugins: [],
}
