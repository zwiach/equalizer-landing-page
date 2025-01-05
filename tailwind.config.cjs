/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      cyan: "#66e2dc",
      orange: "#fa7453",
      yelow: "#ffb964",
      white: "#fcfaf9",
      slate: "#191826",
    },
    fontFamily: {
      ibm: ["IBM Plex Sans", "serif"],
    },
    fontSize: {
      sm: ["1rem", "1.5"],
      md: ["1.125rem", "1.8"],
      lg: ["1.25rem", "1.5"],
      xl: ["2.5rem", "1.1"],
      "2xl": ["4rem", "1"],
      "3xl": ["5.5rem", "1"],
    },
    extend: {
      backgroundImage: {
        "main-desktop": "url('/assets/bg-main-desktop.png')",
        "main-mobile": "url('/assets/bg-main-mobile.png')",
      },
    },
  },
  plugins: [],
};
