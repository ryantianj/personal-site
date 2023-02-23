import React, {useContext, useState} from "react";
import backUp from "../../Information/logo192.png";
import Skills from "../About/Skills";
import "./Project.css"
import ModalContext from "../../components/ModalContext";

const Project = ({project}) => {
    const [clicked, setClicked] = useState(true)
    const projectContext = useContext(ModalContext)

    const handleShowMore = (e, project) => {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        projectContext.setData(project)
        projectContext.setIsOpen(true)
    }

    return (
        <div className="projectItem" onClick={() => setClicked(prev => !prev)}>
            {clicked &&
                <React.Fragment>
                    <img src={project.photo} alt={backUp} className="projectItemImage"/>
                    <p className="projectTitle">{project.title}</p>
                </React.Fragment>}
            {!clicked &&
                <div className="projectItemInfo">
                    <p style={{textOverflow: "ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{project.info}</p>
                    <p style={{fontWeight: "bold"}}>{project.role}</p>
                    <Skills skills={project.technologies} />
                    <button onClick={(e) => handleShowMore(e, project)} className="projectItemShowMore">
                        Show more
                    </button>
                </div>}
        </div>
    )
}
export default Project
