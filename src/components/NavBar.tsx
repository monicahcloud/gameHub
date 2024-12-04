import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'



const NavBar = () => {
  return (
    <div className="flex items-center gap-4 p-2">
      <img src={logo} alt="Logo" className="w-16 h-16" />
      <SearchInput />
      <ColorModeSwitch />
    </div>
  )
}

export default NavBar
