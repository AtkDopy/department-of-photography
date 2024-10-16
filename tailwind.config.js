const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
    // Include any other paths where Tailwind classes are used
  ],

  theme: {
    extend: {
      // Define custom keyframes for animations
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInDown: {
          '0%': { transform: 'translateY(-100%)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      // Define custom animations using the keyframes
      animation: {
        fadeIn: 'fadeIn 1s ease-in forwards',
        slideInLeft: 'slideInLeft 1s ease-out forwards',
        slideInRight: 'slideInRight 1s ease-out forwards',
        slideInDown: 'slideInDown 1s ease-out forwards',
      },
    },
    // Custom responsive breakpoints using max-width
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1024px" },
      md: { max: "840px" },
      sm: { max: "639px" },
    },
  },
  plugins: [flowbite.plugin()],
};