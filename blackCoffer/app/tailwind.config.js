/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
                'hero-pattern': "url('https://e0.pxfuel.com/wallpapers/388/333/desktop-wallpaper-future-technology-cool-future-technology.jpg')",
                 
                })
    },
  },
  plugins: [],
}

