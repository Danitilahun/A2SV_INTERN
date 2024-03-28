import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        auto: "auto",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "4": "16px",
        "5": "20px",
      },
      colors: {
        "custom-yellow": "#FFB836",
        "custom-blue": "#4640DE",
        "custom-text-color": "#56CDAD",
        "custom-bg-color": "#e0f5ef",
        "custom-bg-gray": "#7C8493",
        "custom-text-darkblue": "#25324B",
        primary: {
          50: "#eae9f8",
          100: "#d0cdf2",
          200: "#b4b1ec",
          300: "#9793e6",
          400: "#7b77e0",
          500: "#645ed6",
          600: "#534dc2",
          700: "#423cad",
          800: "#312a98",
          900: "#211b82",
        },
      },
      borderColor: {
        "custom-yellow": "#FFB836",
        "custom-blue": "#4640DE",
      },

      // Add custom height
      height: {
        "custom-height": "500px", // Example custom height
        "screen-75": "75vh", // 75% of the viewport height
      },
      // Add custom width
      width: {
        "custom-width": "919px", // Example custom width
        "screen-50": "50vw", // 50% of the viewport width
      },
    },
  },
  plugins: [],
};
export default config;
