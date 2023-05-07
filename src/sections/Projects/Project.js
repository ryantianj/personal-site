import React, {useState} from "react";
import backUp from "../../Information/logo192.png";
import Skills from "../../components/Skills";
import "./Project.css"
import ProjectModal from "./ProjectModal";
import Modal from "../../components/Modal";
import Button from "../../components/Button";

const Project = ({project}) => {
    const [isShowMore, setIsShowMore] = useState(false)

    const handleShowMore = (e) => {
        try {
            if (e && e.stopPropagation) {
                e.stopPropagation();
            }
            setIsShowMore(true)
            document.body.style.overflow = 'hidden';
        } catch (e) {
            alert(e)
        }

    }
    
    return (
        <div className="projectItem">
            <div className="projectItemInner">
                <div className="projectItemSummary">
                    <img src={project.photo} alt={backUp} className="projectItemImage"/>
                    <p className="projectTitle">{project.title}</p>
                </div>
                <div className="projectItemInfo">
                    <p style={{textOverflow: "ellipsis", whiteSpace:"nowrap", overflow:"hidden"}}>{project.info}</p>
                    <p style={{fontWeight: "bold"}}>{project.role}</p>
                    <Skills skills={project.technologies} />
                    <Button onClick={(e) => handleShowMore(e, project)}>
                        Show more
                    </Button>
                </div>
            </div>
            {isShowMore && <Modal component={<ProjectModal data={project} setIsShowMore={setIsShowMore}/>}/>}
        </div>
    )
}
export default Project
