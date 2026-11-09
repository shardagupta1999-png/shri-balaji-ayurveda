/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#234B38',
          sage: '#527A55',
          beige: '#F5F0E6',
          ivory: '#FCFAF5',
          gold: '#B89A5E',
          'gold-light': '#D8C396',
          charcoal: '#292D29',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 12px 40px -16px rgba(35, 75, 56, 0.25)',
        card: '0 1px 2px rgba(41, 45, 41, 0.04), 0 16px 40px -24px rgba(35, 75, 56, 0.35)',
      },
    },
  },
  plugins: [],
};
