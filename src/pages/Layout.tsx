
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="p-5 bg-base-100 shadow-lg">
        <Outlet />
      </div>
      
    </>
  )
}

export default Layout
