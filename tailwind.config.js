/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      'darkBg': 'hsl(218, 23%, 16%)',
      'containerLight': 'hsl(217, 19%, 38%)',
      'containerBg': 'hsl(217, 19%, 24%)',
      'lightCyan': 'hsl(193, 38%, 86%)',
      'neonGreen': 'hsl(150, 100%, 66%)'
    },
  },
  plugins: [],
}

