/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    fontFamily: {
      sans: ['"Berkeley Mono"', "monospace"],
      mono: ['"Berkeley Mono"', "monospace"],
    },
    extend: {
      screens: {
        tiny: "240px",
        xs: "350px",
      },
      fontSize: {
        xxs: "0.625rem", // 10px
      },
    },
  },
};
