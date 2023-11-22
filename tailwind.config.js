/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: '\'Josefin Sans\', sans-serif',
        primary: 'Montserrat, sans-serif'
        
      },
      colors: {
        primary: '#A4152D',
        secondary: '#6E6969',
        button: '#e42313',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}

