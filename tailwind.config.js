/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          'inter-display': ['"Inter Display"', 'serif'],
        },
        fontWeight: {
          medium: '500', // Tailwind default for font-medium is 500
        },
        colors: {
          white: 'rgb(255, 255, 255)',
        },
        fontSize: {
          '60px': '60px',
        },
        lineHeight: {
          '60px': '60px',
        }
      },
    },
  }
  