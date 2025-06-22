/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#1b2a49',
        'brand-mid-blue': '#465881',
        'brand-teal': '#00909e',
        'brand-rose': '#a38288',
        'brand-gold': '#e5a91e',
        'light-blue': '#ADE1FB',
        'medium-blue': '#266CA9',
        'dark-blue': '#0F2573',
        'darker-blue': '#041D56',
        'darkest-blue': '#01082D',
      },
    },
  },
  plugins: [],
} 