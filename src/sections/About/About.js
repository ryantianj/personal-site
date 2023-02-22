import React from 'react'
import "./About.css"
import Aboutme from "./Aboutme";
import Education from "./Education";
import {skillsInfo, bioInfo} from "../../Information/About";

const About = () => {
    return (
        <div className="aboutWrapper">
            <Aboutme skills={skillsInfo} bioInfo={bioInfo}/>
            <Education/>
        </div>
    )
}
export default About