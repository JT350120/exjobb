/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.vue",
    "./src/*.js",
    "./src/components/*.vue",
  ],
  theme: {
    screens: {
      md: "768px",
    },
    colors: {
      transparent: "transparent",
      "black": "#1A1804",
      "white": "#FCFAED",
      "tan": "#E6DABC",
      "green": "#94997A",
      "yellow": "#D1BE40",
      "btn": "#008DAB",
      "btn-hover": "#00A9CC",
      "btn-active": "#006E85",
    },
    fontSize: {
      "sm": '0.8rem',
      "md": '1rem',
      "lg": '1.25rem',
      "xl": '2rem',
      "2xl": '3rem',
      "3xl": '4rem',
      "4xl": '5rem',
    },
    padding: {
      "x-standard": "5%",
      "y-standard": "25px"
    },
    margin: {
      "x-standard": "5%",
      "y-standard": "25px"
    },
    extend: {
      backgroundImage: {
        'castle1': "url('/src/assets/backgrounds/castle_bk_1.png')",
        'castle2': "url('/src/assets/backgrounds/castle_bk_2.png')",
        'shore': "url('/src/assets/backgrounds/shoreline_bk.png')",
    },
  },
  plugins: [],
}
}