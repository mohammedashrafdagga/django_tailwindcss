/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        violet: colors.violet,
        stone: colors.stone,
      },
    },
  },
  plugins: [],
};
