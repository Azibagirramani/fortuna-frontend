module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#A0C9C3",
      "secondary": "#033859",
      "moony": "#c0c0c0"
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
