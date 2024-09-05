/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F0F0F",
        borderRight: "#3d3d3d",
        red: "#FC1503",
        cardContent: "#1e1e1e",
        gray: "#a0a0a0",
        lightBlack: 'hsl(0,0%,7%)'
      },
      screens: {
        vsm: "425px",
        xs: "900px",
      },
    },
  },

  plugins: [
    plugin(function ({ addComponents, addUtilities }) {

      addComponents({
        ".linear-gradient": {
          "@apply bg-gradient-to-r from-fuchsia-500 to-cyan-500": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};
