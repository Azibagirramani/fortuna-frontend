module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#95e1d3",
      "secondary": "#bdece3",
      "subPrimary": "#6dd6c2",
      "subSecondary": "#2a2a2a",
      "gray": "#8a8a8a",
      "gray-light": "#8b8b8b",
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
