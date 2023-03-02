import React from 'react'
import "./Aboutme.css"
import Skills from "../../components/Skills";
import Software from "./Software";
import Divisor from "../../components/Divisor";

const Aboutme = ({bioInfo, skills, software}) => {
    return (
        <div className="aboutmeWrapper">
            <h1 className="aboutme">About Me</h1>
            <p>
                {bioInfo}
            </p>

            <Skills skills={skills} />
            <Divisor />
            <Software software={software}/>

        </div>
    )
}
export default Aboutme