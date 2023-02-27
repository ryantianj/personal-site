import React, {useEffect, useState} from "react";
import "./Theme.css"
import {MdOutlineLightMode, MdDarkMode} from "react-icons/md";

const LIGHT_MODE = 'light'
const DARK_MODE = 'dark'
const Theme = () => {
    const [isDark, setIsDark] = useState(window.matchMedia(`(prefers-color-scheme: ${DARK_MODE}`).matches)

    const handleClick = (e) => {
        setIsDark(prevState => !prevState)
    }

    useEffect(() => {
        if (isDark) {
            document.documentElement.setAttribute('data-theme', DARK_MODE)
        } else {
            document.documentElement.setAttribute('data-theme', LIGHT_MODE)
        }
    }, [isDark])

    return (
        <div className="themeWrapper">
            {!isDark && <MdOutlineLightMode className="themeIcons" onClick={handleClick}/>}
            {isDark && <MdDarkMode className="themeIcons" style={{color: "white"}} onClick={handleClick}/>}
        </div>
    )
}
export default Theme
