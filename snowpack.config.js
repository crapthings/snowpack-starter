module.exports = {
  // root: './app',
  mount: {
    app: '/',
    static: {
      url: '/static',
      static: true,
      resolve: false
    },
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js',
  },
  plugins: [
    '@snowpack/plugin-postcss',
  ],
}
