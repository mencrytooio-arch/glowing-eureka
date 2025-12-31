/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand color system
        brand: {
          primary: '#1E4357',      // Deep Slate Blue - Headings, CTAs, navigation accents
          secondary: '#84999F',    // Muted Steel Blue - Subheadings, links, icons
          dark: '#08202E',         // Midnight Blue-Black - Footer, dark sections
          light: '#F3F5F5',        // Soft Off-White - Backgrounds, cards
        },
      },
      maxWidth: {
        'prose': '65ch',
      },
      lineHeight: {
        'relaxed': '1.75',
        'comfortable': '1.85',
      },
    },
  },
  plugins: [],
}
