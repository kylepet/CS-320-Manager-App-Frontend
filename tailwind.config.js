/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'field_box': '#f446e3',
      'white': '#ffffff'
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}

