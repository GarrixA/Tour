/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      Merriweather: ["Merriweather", "serif"],
      shine: ["Noto Sans JP", "sans-serif"]
    },
  },
  plugins: [],
}