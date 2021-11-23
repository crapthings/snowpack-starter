module.exports = {
  mount: {
    src: '/',
    static: {
      url: '/static',
      static: true,
      resolve: false
    }
  },
  plugins: [
    '@snowpack/plugin-postcss'
  ],
  packageOptions: {
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    jsxInject: 'import React from \'react\''
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ]
}
