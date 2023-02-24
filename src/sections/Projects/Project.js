import React, {useState} from "react";
import backUp from "../../Information/logo192.png";
import Skills from "../About/Skills";
import "./Project.css"
import ProjectModal from "./ProjectModal";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

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

    const handleClick = () => {
        if (!isShowMore) {
            setClicked(prev => !prev)
        }
    }
    
    return (
        <div className="projectItem" onClick={handleClick}>
            {clicked &&
                <React.Fragment>
                    <img src={project.photo} alt={backUp} className="projectItemImage"/>
                    <p className="projectTitle">{project.title}</p>
                    <span className="tooltip">Click for more info</span>
                </React.Fragment>}
            {!clicked &&
                <div className="projectItemInfo">
                    <p style={{textOverflow: "ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{project.info}</p>
                    <p style={{fontWeight: "bold"}}>{project.role}</p>
                    <Skills skills={project.technologies} />
                    <Button onClick={(e) => handleShowMore(e, project)}>
                        Show more
                    </Button>
                </div>}
            {isShowMore && <Modal component={<ProjectModal data={project} setIsShowMore={setIsShowMore}/>}/>}
        </div>
    )
}
export default Project
