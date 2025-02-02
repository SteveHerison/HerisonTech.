/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fira: ["var(--font-fira-code)", "Fira Code"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/backHero.png')",
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)",
      },
    },
  },
  plugins: [],
};
