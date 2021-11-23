import stores from '../stores'

import Welcome from '../components/welcome'

export default () => {
  const text = stores((state) => state.text)

  return (
    <div>
      <div className='text-lg'>Home</div>
      <div>{text}</div>
      <Welcome />
    </div>
  )
}
