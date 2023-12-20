/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        'xl': 'repeat(18, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-14': 'span 14 / span 14',
      }
    },
  },
  plugins: [],
}

