import React from 'react'
import "./Aboutme.css"
import Skills from "./Skills";

const Aboutme = ({bioInfo, skills}) => {
    return (
        <div className="aboutmeWrapper">
            <h1 className="aboutme">About Me</h1>
            <p>{bioInfo}</p>

            <Skills skills={skills} />

        </div>
    )
}
export default Aboutme