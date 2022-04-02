// const fs = require('fs')

// const cert = fs.readFileSync('./localhost.cert')
// const key = fs.readFileSync('./localhost.key')

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
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-react-refresh'
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
    // secure: {
    //   cert,
    //   key
    // },
    tailwindConfig: './tailwind.config.js'
  },
  buildOptions: {
    jsxInject: `
      import React, { useEffect, useLayoutEffect, useRef } from 'react'
      import classNames from 'classnames'
    `.replace(/^\s+/gm, '')
  },
  routes: [
    {
      match: 'routes',
      src: '.*',
      dest: '/index.html'
    }
  ]
}
