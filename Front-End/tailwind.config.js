/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    height: {
      "custom-1": "1170px",
      "custom-2": "500px",
      "custom-3": "220px",
      "custom-4": "350px",

      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
}

