/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, muted palette inspired by hero image
        warm: {
          50: '#faf9f7',   // Very light warm grey-beige
          100: '#f5f3f0',  // Light warm background
          200: '#e8e5e0',  // Soft warm grey for dividers
          300: '#d4cfc7',  // Medium warm grey
          400: '#a69f94',  // Muted warm accent
          500: '#8b8276',  // Warm earth tone
          600: '#6b6358',  // Deeper warm tone
          700: '#4a443c',  // Dark warm tone
          800: '#2d2924',  // Near black warm tone
          900: '#1a1714',  // Deep warm black
        },
      },
      maxWidth: {
        'prose': '65ch', // Optimal reading width
      },
      lineHeight: {
        'relaxed': '1.75', // Better readability for body text
        'comfortable': '1.85', // Extra comfortable for long-form
      },
    },
  },
  plugins: [],
}
