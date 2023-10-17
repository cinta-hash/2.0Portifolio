/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'pack': "url('/assets/bg.jpg')"
      },
      fontFamily: {
        'body': ['Poppins']
      },
    },
    container: {
      center: true},
     screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
  },
  plugins: [],
}

