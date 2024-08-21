/** @type {import('tailwindcss').Config} */
module.exports={
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        primary: "#f1f6f9",
        secondary: "#212a3e",
        tertiary: "#394867",
        alternative: "#914c07",
        darkBlue: "#1d2b38",
        golden: "#ccaf61",
        offWhite: "#c2c2c2",
        customBlack: "#030303",
        customGreen: "#57b46a",
        customBlue: "#85c9feff"
      },
      screens: {
        xmd: "900px"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

  },
  plugins: [],
};
