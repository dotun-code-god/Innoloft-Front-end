/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Open_Sans: ['Open Sans']
      },
      colors: {
        primary_bold: '#374151',
        primary_regular: '#6B7280'
      },
      screens: {
        xs: {max:'400'}
      }
    },
  },
  plugins: [],
}

