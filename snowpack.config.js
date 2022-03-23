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
    jsxInject: 'import _ from \'lodash\'\nimport React, { useEffect, useLayoutEffect, useRef } from \'react\'\nimport faker from \'@faker-js/faker\''
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ]
}
