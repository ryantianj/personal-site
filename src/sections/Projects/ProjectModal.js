import React from "react";
import "./ProjectModal.css"
import Skills from "../../components/Skills";
import URLButton from "../../components/URLButton";
import {AiFillCaretDown} from "react-icons/ai";

const ProjectModal = ({data, setIsShowMore}) => {
    const handleClick = () => {
        // can stop propagation here to not flip project back after modal close
      setIsShowMore(false)
        document.body.style.overflow = 'unset';
    }

    const handleDown = () => {
        const objDiv = document.getElementById("projectModal");
        objDiv.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    return (
        <div className="projectModalWrapper">
            <div className="projectModalBody" id="projectModal">
                <h4 style={{width: "100%", textAlign: "center"}}>{data.title}</h4>
                <div style={{width: "100%", textAlign: "center"}}>
                    <img src={data.photo} alt={data.photo} className="projectModalImage"/>
                </div>
                {data.url !== null && <URLButton onClick={data.url} style={{width: "fit-content"}}>
                    View Project
                </URLButton>}
                <p style={{whiteSpace: "pre-wrap"}}>{data.info}</p>
                <br/>
                <p style={{fontWeight: "bold"}}>{data.role}</p>
                <Skills skills={data.technologies}/>
            </div>
            <button onClick={handleClick} className="projectModalButton">
                Close
            </button>
            <button onClick={handleDown} className="projectScroll">
                <AiFillCaretDown />
            </button>
        </div>
    )
}
export default ProjectModal
