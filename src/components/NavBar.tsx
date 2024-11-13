import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <>
      <div className="flex space-x-4 w-[60px] h-[60px] flex items-center justify-center">
        <img src={logo} alt="logo" />
        <h2>Navbar</h2>
      </div>
    </>
  )
}

export default NavBar
