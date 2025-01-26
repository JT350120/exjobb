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
      "blue": "#86B2E6",
      "map-blue": "#80D2F1",
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
        'castle1': "url('/src/assets/backgrounds/castle_bk_1.webp')",
        'castle2': "url('/src/assets/backgrounds/castle_bk_2.webp')",
        'shore': "url('/src/assets/backgrounds/shoreline_bk.webp')",
        'edward': "url('/src/assets/backgrounds/shears.webp')",
        'truck': "url('/src/assets/backgrounds/truck.webp')",
        '150_explore_img_village': "url('/src/assets/backgrounds/150_explore_img_village.webp')",
        '150_presentation_portrait': "url('/src/assets/backgrounds/150_presentation_portrait.webp')",
        '150_presentation_landscape': "url('/src/assets/backgrounds/150_presentation_landscape.webp')",
    },
  },
  plugins: [],
}
}