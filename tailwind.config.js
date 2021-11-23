module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './src/**/*.{js,jsx}'
  ],
  darkMode: false,
  theme: {
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ]
}
