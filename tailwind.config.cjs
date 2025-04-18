const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mobile: { min: "300px", max: "1000px" },
    },
    extend: {
      fontFamily: {
        vr: ["Varela Round"],
      },
    },
  },
  plugins: [heroui()],
};
