/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B82F6", // blue-500
          light: "#93C5FD", // blue-300
          dark: "#1D4ED8", // blue-700
        },
        secondary: {
          DEFAULT: "#10B981", // emerald-500
          light: "#6EE7B7", // emerald-300
          dark: "#047857", // emerald-700
        },
        typography: {
          primary: "#5a656f",
          dark: "#263443",
          mid: "#374451",
          light: "#b0b0b0",
          lighter: "#afb4b8",
        },

        // Add other custom colors
      },
      fontFamily: {
        sans: ["var(--font-vazir)", "sans-serif"],
        irsans: ["var(--font-irsans)", "sans-serif"],
      },
      // Extend other theme values as needed
    },
  },
  plugins: [],
};
