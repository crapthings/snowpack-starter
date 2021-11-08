import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div className='space-x-2'>
      <Link to='/'>home</Link>
      <Link to='/about'>about</Link>
    </div>
  )
}
