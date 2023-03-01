import React from "react";
import "./Button.css"
import {HASH_ROUTE, LOCAL} from "../Globals";

const URLButton = ({onClick, children, style}) => {
    const parseURL = (url) => {
        if (url.substring(0, 5) === LOCAL) {
            const path = HASH_ROUTE + url.substring(5)
            return (
                <a style={style} className="button" href={path} target="_blank" rel="noreferrer">
                    {children}
                </a>
            )
        }

        return (
            <a style={style} className="button" href={onClick} target="_blank" rel="noreferrer">
                {children}
            </a>
        )
    }
    return (
      <React.Fragment>
          {parseURL(onClick)}
      </React.Fragment>
    )
}
export default URLButton
