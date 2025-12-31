/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand color system using CSS variables
        brand: {
          neutral: 'var(--color-text-primary)',
          primary: 'var(--color-accent-primary)',
          secondary: 'var(--color-accent-secondary)',
          background: 'var(--color-background)',
          dark: 'var(--color-dark-section)',
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
