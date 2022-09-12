module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      primary: "#95e1d3",
      secondary: "#bdece3",
      subPrimary: "#6dd6c2",
      subSecondary: "#2a2a2a",
      gray: "#8a8a8a",
      "gray-light": "#8b8b8b",
      "icon-gray": "#DBDEE0",
      "blue-primary": "#0F5CFA",
      "blue-secondary": "#85acfb",
      "background-gray": "#FBFEFF",
      "sb-gray": "#FBFBFB",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
