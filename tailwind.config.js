/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F0F0F'
      }
    },
  },
  plugins: [
    plugin(function ({ addComponents, addUtilities }) {
      addComponents({
        ".h1": {
          "@apply font-sora font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2":
            {},
        },
        ".p": {
          "@apply sm:text-[18px] text-[14px] uppercase tracking-wider text-center font-code":
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

