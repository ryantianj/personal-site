import React, {useEffect, useState} from "react";
import "./Theme.css"
import {MdOutlineLightMode, MdDarkMode} from "react-icons/md";

const LIGHT_MODE = 'light'
const DARK_MODE = 'dark'
const Theme = () => {
    const [isLight, setIsLight] = useState(window.matchMedia(`(prefers-color-scheme: ${LIGHT_MODE}`).matches)

    const handleClick = (e) => {
        setIsLight(prevState => !prevState)
    }

    useEffect(() => {
        if (isLight) {
            document.documentElement.setAttribute('data-theme', DARK_MODE)
        } else {
            document.documentElement.setAttribute('data-theme', LIGHT_MODE)
        }
    }, [isLight])

    return (
        <div className="themeWrapper">
            {!isLight && <MdOutlineLightMode className="themeIcons" onClick={handleClick}/>}
            {isLight && <MdDarkMode className="themeIcons" style={{color: "white"}} onClick={handleClick}/>}
        </div>
    )
}
export default Theme
