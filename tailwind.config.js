/** @type {import('tailwindcss').Config} */
import { CardContent } from "@mui/material";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F',
        borderRight: '#3d3d3d',
        red: '#FC1503',
        cardContent: '#1e1e1e'
      }
    },
    screen:{
      xs:'900px'
    }
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".h1": {
          "@apply font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2":
            {},
        },
        ".p": {
          "@apply sm:text-[18px] text-[14px] uppercase tracking-wider text-center":
            {},
        },
        // color text gradient
        ".cyan-text-gradient": {
          "@apply bg-gradient-to-t from-cyan to-lightBlue bg-clip-text text-transparent":
            {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
}

