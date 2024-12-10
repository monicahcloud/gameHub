import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'



const NavBar = () => {
  return (
    <div className="flex items-center gap-4 p-2">
      <Link to='/'><img src={logo} alt="Logo" className="w-16 h-16" object-cover /></Link>
      <SearchInput />
      <ColorModeSwitch />
    </div>
  )
}

export default NavBar
