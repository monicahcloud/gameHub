import { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  dark: 'dark',
  light: 'light',
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.light
}

const NavBar = () => {
  const [theme, setTheme] = useState(themes.light)
  const handleTheme = () => {
    const { light, dark } = themes
    const newTheme = theme === light ? dark : light
    setTheme(newTheme)
  }
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className=" navbar align-element ">
        <img className="navbar-start w-[80px] h-[80px]" src={logo} alt="logo" />
        <h2 className=" navbar-center text-3xl items-center">Navbar</h2>
        <div className="navbar-end ">
          <label className="swap swap-rotate">
            <input type="checkbox" onChange={handleTheme} />
            <BsSunFill className="swap-on h-4 w-4 " />
            <BsMoonFill className="swap-off h-4 w-4 " />
          </label>
        </div>
      </div>
    </>
  )
}

export default NavBar
