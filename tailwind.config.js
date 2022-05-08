module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "#A0C9C3",
      "secondary": "#033859",
    },
    extend: {},
  },
  plugins: [
    // require('flowbite/plugin')
    require('@tailwindcss/forms'),
  ],
}
