import React, {useState} from "react";
import "./Footer.css"
import Button from "../../components/Button";
import {AiFillLinkedin, AiTwotoneMail, AiFillGithub, AiOutlineQrcode} from "react-icons/ai";
import URLButton from "../../components/URLButton";
import {email, github, linkedInURL, qrCode} from "../../Information/Contact";
import Modal from "../../components/Modal";
import QrModal from "./QrModal";

const Footer = () => {
    const [qrOpen, isQrOpen] = useState(false)
    const handleEmail = () => {
        window.open('mailto:' + email)
    }

    const handleQR = (e) => {
        if (e.stopPropagation) {
            e.stopPropagation();
        }
        document.body.style.overflow = 'hidden';
        isQrOpen(true)
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
                <Button onClick={handleQR} style={{fontSize: "20px"}}>
                    <AiOutlineQrcode /> QR Code
                </Button>
            </div>
            {qrOpen && <Modal component={<QrModal data={qrCode} close={isQrOpen}/>}/>}
        </div>
    )
}
export default Footer
