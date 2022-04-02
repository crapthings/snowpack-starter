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
    knownEntrypoints: [
      'lodash',
      'dayjs',
      'classnames',
      '@faker-js/faker',
    ]
  },
  devOptions: {
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    jsxInject: `
      import _ from \'lodash\'\n
      import dayjs from \'dayjs\'\n
      import React, { useEffect, useLayoutEffect, useRef } from \'react\'\n
      import classNames from \'classnames\'\n
      import faker from \'@faker-js/faker\'\n
    `.trim()
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ]
}
