import React from 'react'

import useAppStore from '../stores'

const HomeComponent = () => {
  const { test } = useAppStore(({ test }) => ({ test }))
  return (
    <div>{test}</div>
  )
}

export default () => <HomeComponent />
