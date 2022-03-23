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
      <div className='text-lg underline'>Home</div>
      <div>{text}</div>
      <Welcome />
      <div className='p-8'>
        <button className='w-28 h-8 rounded-md text-sm text-white bg-blue-500 shadow-lg shadow-blue-500/50'>Tailwind CSS 3</button>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
