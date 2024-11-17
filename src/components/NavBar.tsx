import { useState, useEffect } from 'react'
import logo from '../assets/logo.webp'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'
import SearchInputs from './SearchInputs'

const themes = {
  dark: 'dark',
  light: 'light',
}

const getThemeFromLocalStorage = () => {
    return localStorage.getItem('theme') || themes.light
}

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({ onSearch }: Props) => {
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
      <div className=" navbar items-center">
        <img className="navbar-start w-[80px] h-[80px]" src={logo} alt="logo" />
        <SearchInputs onSearch={onSearch} />

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
