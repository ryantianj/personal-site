import React from 'react'
import "./Skills.css"

const Skills = ({skills}) => {

    const Skill = ({skill}) => {
        return  (
            <div className="skillWrapper">
                {skill}
            </div>
        )
    }

    return (
        <div className="skillsWrapper">
            {skills.map((x, i) => <Skill skill={x} key={i}/>)}
        </div>
    )
}
export default Skills