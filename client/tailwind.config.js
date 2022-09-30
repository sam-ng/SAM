/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        'ch-20': '20ch',
      },
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
