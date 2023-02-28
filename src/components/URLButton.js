import React from "react";
import "./Button.css"
import {useNavigate} from "react-router-dom";
import {LOCAL} from "../Globals";
import Button from "./Button";

const URLButton = ({onClick, children, style}) => {
    const navigate = useNavigate()
    const parseURL = (url) => {
        if (url.substring(0, 5) === LOCAL) {
            const path = "/" + url.substring(5)
            return (
                <Button onClick={() => navigate(path)}>
                    View Project
                </Button>
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
