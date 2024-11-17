import { useState, useEffect } from 'react'
import { BsMoonFill, BsSunFill } from 'react-icons/bs'

const themes = {
  dark: 'dark',
  light: 'light',
}
// Helper function to get the theme from localStorage
const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.light;
};

const ColorModeSwitch = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())

  // Function to toggle between light and dark themes
  const handleTheme = () => {
    const newTheme = theme === themes.light ? themes.dark : themes.light
    setTheme(newTheme)
  }

  // Update the document's theme when the theme state changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="flex items-center gap-2">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={theme === themes.dark}
          onChange={handleTheme}
          className="hidden"
        />
        <BsSunFill className="swap-on h-4 w-4 " />
        <BsMoonFill className="swap-off h-4 w-4 " />
      </label>
      <span className="text-sm whitespace-nowrap">
        {theme === themes.dark ? 'Dark Mode' : 'Light Mode'}
      </span>
    </div>
  )
}

export default ColorModeSwitch
