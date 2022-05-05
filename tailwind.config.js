const {fontFamily} = require('tailwindcss/defaultTheme');
const colorStyles = require('./color-styles');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: colorStyles,
    extend: {
      fontFamily: {
        sans: ['Lexend Deca', ...fontFamily.sans],
        heading: ['Big Shoulders Display', ...fontFamily.sans],
      },
      fontSize: {
        base: ['0.9375rem', '1.5625rem'],
        '4xl': ['2.5rem', '3rem'],
      },
      maxWidth: {
        auto: 'auto',
      },
      minWidth: {
        auto: 'auto',
      },
    },
  },
  plugins: [],
};
