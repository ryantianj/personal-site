import React from "react";
import "./Projects.css"
import {projectsInfo} from "../../Information/Projects";
import Project from "./Project";
const Projects = () => {
    return (
        <div className="componentWrapper">
            <h2 className="sectionHeader">Projects</h2>
            <div className="projectWrapper">
                {projectsInfo.map((x, i) => <Project project={x} key={i}/>)}
            </div>
        </div>
    )
}
export default Projects
