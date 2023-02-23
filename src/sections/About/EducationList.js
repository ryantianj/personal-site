import React from "react";
import "./EducationList.css"

const EducationList = ({education}) => {
    const EducationItem = ({education}) => {
        return (
            <div className="educationListItem">
                <div className="educationListDate">
                    {education.year}
                </div>
                <div className="educationListInfoWrapper">
                    <div style={{fontWeight:"bold"}}>
                        {education.type}
                    </div>
                    <p>
                        {education.school}
                    </p>
                </div>
            </div>
        )
    }

    return (
        <div className="educationListWrapper">
            {education.map((x, i) => <EducationItem education={x} key={i}/>)}
        </div>
    )
}
export default EducationList
