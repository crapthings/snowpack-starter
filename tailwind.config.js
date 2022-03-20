module.exports = {
  mode: 'jit',
  content: [
    './src/**/*.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('daisyui')
  ]
}
