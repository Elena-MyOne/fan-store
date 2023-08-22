/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        // socialBg: '#f7f9fc',
      },
      fontFamily: {
        fjalla: ['Fjalla One'],
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries'), require('tw-elements/dist/plugin.cjs')],
  darkMode: 'class',
};
