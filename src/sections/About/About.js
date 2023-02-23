import React from 'react'
import "./About.css"
import Aboutme from "./Aboutme";
import Education from "./Education";
import {skillsInfo, bioInfo, softwareInfo} from "../../Information/About";

const About = () => {
    return (
        <div className="componentWrapper">
            <Aboutme skills={skillsInfo} bioInfo={bioInfo} software={softwareInfo}/>
            <Education/>
        </div>
    )
}
export default About