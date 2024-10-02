/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3DB2FF",
        secondary: "#FFFFFF",
        kuning: "#FFCE46",
        bottombar: "#E6E6E6",
        fitur1: "#5C85AD",
        tesmbti: "#5395B8",
        fitur2: "#FFAD33",
        fitur3: "#8B35A7",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
