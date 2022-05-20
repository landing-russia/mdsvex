const defaultTheme = require("tailwindcss/defaultTheme");
// const colors = require("tailwindcss/colors");

const config = {
  // mode: "jit",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  darkMode: "class", // or 'media' or 'class'

  theme: {
    screens: {
      xs: "340px",
      ...defaultTheme.screens,
      "3xl": "1900px",
    },
    extend: {
      colors: {
        "dark-rose": "#62011F",
      },
      fontFamily: {
        bitter: "Bitter, serif",
        open: "Open Sans, sans-serif",
      },
      fontSize: {
        "7.5xl": "5.25rem",
        "9.5xl": "9rem",
        "10xl": "10rem",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        90: "90%",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        67: "16.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  variants: {
    extend: {},
  },

  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

module.exports = config;
