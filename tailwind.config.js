/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#22c55e',
        dark: '#0f172a',
        card: 'rgba(30,41,59,0.8)',
      },
      fontFamily: {
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
