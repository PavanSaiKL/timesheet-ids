/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*',
    './node_modules/@kaaylabs-v2/ids/**/*',
  ],
  presets: [require('@kaaylabs-v2/ids/tailwind')],
  theme: {
    extend: {},
  },
  plugins: [],
};
