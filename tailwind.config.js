/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/home/hero.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors: {
        brandColor: "#BE123C",
      },
    },
  },
  plugins: [],
}