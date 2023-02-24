import React from "react";
import "./Button.css"

const URLButton = ({onClick, children, style}) => {
    return (
        <a style={style} className="button" href={onClick} target="_blank" rel="noreferrer">
            {children}
        </a>
    )
}
export default URLButton
