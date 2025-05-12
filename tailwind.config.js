/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"], // Add Lexend font
      },
    },
  },
  plugins: [],
}

