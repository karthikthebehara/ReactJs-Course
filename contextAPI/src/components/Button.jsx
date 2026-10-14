import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Button = () => {
    const [theme, setTheme] = useContext(ThemeDataContext);
    const changeMode = () => {
        setTheme((currentTheme) => currentTheme === "light" ? "dark" : "light");
    }
  return (
    <div>
      <button onClick={changeMode}>Switch to {theme === "light" ? "dark" : "light"} theme</button>
    </div>
  )
}

export default Button
