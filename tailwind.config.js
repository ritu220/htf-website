/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          500: '#76A3BE', // Define your custom color here
        },
      }
    },
  },
  plugins: [],
};
