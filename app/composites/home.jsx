import React from 'react'

import useAppStore from '../stores'

import Welcome from '../components/welcome'

export default () => {
  const { text } = useAppStore(({ text }) => ({ text }))
  return (
    <div>
      <div className='text-lg'>home</div>
      <div>{text}</div>
      <Welcome />
    </div>
  )
}
