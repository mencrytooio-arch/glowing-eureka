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
          neutral: '#0E0E0E',      // Charcoal Black - Headings, body text, navigation
          primary: '#1F4A5F',      // Deep Calm Blue - Primary CTAs, active states
          secondary: '#7F97A0',    // Muted Blue-Grey - Subheadings, icons, dividers
          background: '#F4F3F1',   // Warm Off-White - Page backgrounds
          dark: '#0B1F2A',         // Ink Navy - Footer, dark sections
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
