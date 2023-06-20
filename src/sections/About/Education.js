import React from 'react'
import "./Education.css"
import EducationList from "./EducationList";
import {educationInfo, interestInfo} from "../../Information/About";
import Skills from "../../components/Skills";
import Divisor from "../../components/Divisor";

const Education = () => {
    return (
        <div className="educationWrapper">
            <h2 className="educationHeader">
                Education
            </h2>
            <EducationList education={educationInfo}/>
            <Divisor />
            <h2 className="educationHeader">
                Hobbies
            </h2>
            <Skills skills={interestInfo} />
        </div>
    )
}
export default Education