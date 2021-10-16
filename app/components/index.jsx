import React from 'react'

import useAppStore from '../stores'

const App = () => {
  const { test } = useAppStore(({ test }) => ({ test }))
  return (
    <div>{test}</div>
  )
}

export default () => <App />
