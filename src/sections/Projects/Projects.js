import React, {useContext, useState} from "react";
import "./Projects.css"
import {projectsInfo} from "../../Information/Projects";
import Project from "./Project";
import Modal from "../../components/Modal";
import ModalContext from "../../components/ModalContext";
import ProjectModal from "./ProjectModal";

const Projects = () => {
    const projectContext = useContext(ModalContext)

    return (
        <div className="componentWrapper">
            <h2 className="sectionHeader">Projects</h2>
            <div className="projectWrapper">
                {projectsInfo.map((x, i) => <Project project={x} key={i}/>)}
            </div>
            <Modal component={<ProjectModal data={projectContext.data}/>}/>
        </div>
    )
}
export default Projects
