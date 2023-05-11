/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },

  content: [
    "./config/*.json",
    "./layout/*.liquid",
    "./assets/*.liquid",
    "./sections/*.liquid",
    "./templates/*.liquid",
    "./templates/*.json",
    "./templates/customers/*.liquid",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
    },
    fontFamily: {
      interstate: "interstate",
      "interstate-light": "interstate-light",
      "interstate-bold": "interstate-bold",
      "interstate-bold-con": "interstate-bold-con",
      "interstate-black": "interstate-black",
    },
    extend: {},
  },
  plugins: [],
};
