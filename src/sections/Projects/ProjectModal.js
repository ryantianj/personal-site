import React from "react";
import "./ProjectModal.css"
import Skills from "../About/Skills";
import URLButton from "../../components/URLButton";
import {useNavigate} from "react-router-dom";

const ProjectModal = ({data, setIsShowMore}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        // can stop propagation here to not flip project back after modal close
      setIsShowMore(false)
        document.body.style.overflow = 'unset';
    }


    return (
        <div className="projectModalWrapper">
            <div className="projectModalBody">
                <h4 style={{width: "100%", textAlign: "center"}}>{data.title}</h4>
                <div style={{width: "100%", textAlign: "center"}}>
                    <img src={data.photo} alt={data.photo} className="projectModalImage"/>
                </div>
                {data.url !== null && <URLButton onClick={data.url} style={{width: "fit-content"}}>
                    View Project
                </URLButton>}
                <button onClick={() => navigate("/projects")}>
                    test
                </button>
                <p style={{whiteSpace: "pre-wrap"}}>{data.info}</p>
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
