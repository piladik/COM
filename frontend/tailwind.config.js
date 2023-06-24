/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FFB703",
        "primary-light": "#ffc636",
        secondary: "#ffffff",
        "secondary-dark": "#f2f2f2",
        tertiary: "#03c9ff",
        "tertiary-light": "#36d4ff",
        "app-bg": "#ECECEC",
        "gray-dark": "#696969",
        error: "#ff6136",
        success: "#00e932",
      },
    },
  },
  plugins: [],
};
