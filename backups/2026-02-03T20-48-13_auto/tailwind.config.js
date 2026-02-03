/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: '#6B8E6F',
        cream: '#F5F1E8',
        gold: '#C9A961',
        darkGreen: '#2C3E2F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
        apothicaire: ['"Apothicaire Medium"', 'serif'],
        gill: ['"Gill Sans"', '"Gill Sans MT"', 'Calibri', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
