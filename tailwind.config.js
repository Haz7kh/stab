/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 10s linear infinite",
        "scroll-right": "scroll-right 10s linear infinite",
      },
    },
  },
  plugins: [],
};
