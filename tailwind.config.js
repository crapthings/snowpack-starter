module.exports = {
  mode: 'jit',
  purge: ['./app/**/*.html', './app/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
