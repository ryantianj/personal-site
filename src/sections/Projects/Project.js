import React, {useState} from "react";
import backUp from "../../Information/logo192.png";
import Skills from "../About/Skills";
import "./Project.css"
import ProjectModal from "./ProjectModal";
import Modal from "../../components/Modal";

const Project = ({project}) => {
    const [clicked, setClicked] = useState(true)
    const [isShowMore, setIsShowMore] = useState(false)

    const handleShowMore = (e) => {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        setIsShowMore(true)
        document.body.style.overflow = 'hidden';
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
            {isShowMore && <Modal component={<ProjectModal data={project} setIsShowMore={setIsShowMore}/>}/>}
        </div>
    )
}
export default Project
