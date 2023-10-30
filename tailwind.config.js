/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        main: '#2b518f',
      },
      height:{
        weekInfo: '210px'
      },
      fontFamily:{
        montserrat: 'Montserrat, sans-serif',
        averia: 'Averia Sans Libre, sans-serif',
        concert: 'Concert One, sans-serif'
      }
    },
  },
  plugins: [],
}

