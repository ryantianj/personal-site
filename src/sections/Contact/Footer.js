import React from "react";
import "./Footer.css"
import Button from "../../components/Button";
import {AiFillLinkedin, AiTwotoneMail, AiFillGithub} from "react-icons/ai";
import URLButton from "../../components/URLButton";
import {email, github, linkedInURL} from "../../Information/Contact";

const Footer = () => {
    const handleEmail = () => {
        window.open('mailto:' + email)
    }

    return (
        <div className="footerWrapper">
            <p style={{color: "white"}}>Drop me a message on Linkedin or send me a direct email.</p>
            <div className="footerButtons">
                <URLButton onClick={linkedInURL} style={{fontSize: "20px"}}>
                    <AiFillLinkedin /> LinkedIn
                </URLButton>
                <Button onClick={handleEmail} style={{fontSize: "20px"}}>
                    <AiTwotoneMail /> Email
                </Button>
                <URLButton onClick={github} style={{fontSize: "20px"}}>
                    <AiFillGithub /> Github
                </URLButton>
            </div>
        </div>
    )
}
export default Footer
