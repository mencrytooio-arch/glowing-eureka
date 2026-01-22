/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
    },
    extend: {
      fontWeight: {
        light: '300',
        normal: '400',
        medium: '500',
      },
      letterSpacing: {
        'heading': '-0.02em',
        'body': '0em',
        'ui': '0.04em',
      },
      lineHeight: {
        'heading': '1.05',
        'body': '1.55',
        'statement': '1.4',
        'relaxed': '1.55',
        'comfortable': '1.4',
      },
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
    },
  },
  plugins: [],
}
