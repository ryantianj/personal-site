import React from 'react'
import "./Skills.css"

const Skills = ({skills}) => {

    const Skill = ({skill}) => {
        const getBackGroundColour = () => {
            const firstChar = skill.substring(0, 1).toLowerCase()
            switch (firstChar) {
                case 'a':
                case 'h' :
                case 'o':
                case 'u' :
                    return {backgroundColor: "red"}
                case 'b':
                case 'i' :
                case 'p':
                case 'v' :
                    return {backgroundColor: "orange"}
                case 'c':
                case 'j' :
                case 'q':
                case 'w' :
                    return {backgroundColor: "yellow"}
                case 'd':
                case 'k' :
                case 'r':
                case 'x' :
                    return {backgroundColor: "green" , color: "white"}
                case 'e':
                case 'l' :
                case 's':
                case 'y' :
                    return {backgroundColor: "blue"}
                case 'g':
                case 'm' :
                case 't':
                case 'z' :
                    return {backgroundColor: "indigo", color: "white"}
                case 'f':
                case 'n' :
                    return {backgroundColor: "violet"}
                default:
                    return {backgroundColor: "grey", color: "white"}
            }
        }
        return  (
            <div className="skillWrapper" style={getBackGroundColour()}>
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