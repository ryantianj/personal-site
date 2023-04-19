import "./QrModal.css"
import React from "react";

const QrModal = ({data, close}) => {
    const handleClick = () => {
        document.body.style.overflow = 'unset';
        close(false)
    }
    return (
        <div className="qr">
            <img src={data} alt={data} className="qrCode"/>
            <button onClick={handleClick} className="projectModalButton">
                Close
            </button>
        </div>
    )
}
export default QrModal
