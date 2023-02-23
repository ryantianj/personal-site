import React, {useContext} from "react";
import "./ProjectModal.css"
import ModalContext from "../../components/ModalContext";
import Skills from "../About/Skills";

const ProjectModal = ({data}) => {
    const modalContext = useContext(ModalContext)

    const handleClick = () => {
        modalContext.setIsOpen(false)
        modalContext.setData({})
    }


    return (
        <div className="projectModalWrapper">
            <div className="projectModalBody">
                <h4 style={{width: "100%", textAlign: "center"}}>{data.title}</h4>
                <div style={{width: "100%", textAlign: "center"}}>
                    <img src={data.photo} alt={data.photo} className="projectModalImage"/>
                </div>
                <p>{data.info}</p>
                <br/>
                <p style={{fontWeight: "bold"}}>{data.role}</p>
                <Skills skills={data.technologies}/>
            </div>
            <button onClick={handleClick} className="projectModalButton">
                Close
            </button>
        </div>
    )
}
export default ProjectModal
