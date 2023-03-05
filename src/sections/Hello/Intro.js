import React from 'react'
import "./Intro.css"
import "./Hello.css"

const Intro = ({greeting, name, title}) => {
    return (
        <div className="introWrapper">
            <div>
                <div className="nameWrapper">
                    <h1 className="greetingWrapper" style={{color: "white"}}>{greeting}<br/><span className="boldName">{name}</span></h1>
                </div>
                <p className="title">
                    {title}
                </p>
            </div>
        </div>
    )
}
export default Intro