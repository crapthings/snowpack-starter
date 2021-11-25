import { useEffect } from 'react'
import stores from '../stores'

import Welcome from '../components/welcome'

export default () => {
  const text = stores((state) => state.text)
  const data = stores((state) => state.data)
  const loadData = stores((state) => state.loadData)

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div className='text-lg'>Home</div>
      <div>{text}</div>
      <Welcome />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
