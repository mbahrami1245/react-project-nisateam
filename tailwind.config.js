/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dayone: ["Days One"],
        archivo: ["Archivo"],
      },
      colors: {
        blue: "#0E63FF",
        blueblack: "#171151",
        green: "#10D0A1",
        bg: "#F2F5FA",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/aspect-ratio")],
};
