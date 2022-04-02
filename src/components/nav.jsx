import { Link, useLocation } from 'react-router-dom'

const nav = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' }
]

export default () => {
  const location = useLocation()

  const isActive = (path) => classNames({
    'text-blue-500': path === location.pathname
  })

  return (
    <div className='space-x-2'>
      {nav.map((item) => (
        <Link key={item.name} to={item.path} className={isActive(item.path)}>{item.name}</Link>
      ))}
    </div>
  )
}
