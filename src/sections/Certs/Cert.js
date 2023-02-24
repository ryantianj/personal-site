import React, {useContext} from "react";
import "./Cert.css"
import NotificationContext from "../../components/Notification/NotificationContext";
import openInNewTab from "../../components/NewTab";

const Cert = ({cert}) => {
    const notificationCtx = useContext(NotificationContext)

    const CertNotification = () => {
        return (
            <div className="certNotification">
                This certification has no link!
            </div>
        )
    }
    const handleClick = () => {
        if (cert.url === null) {
            notificationCtx.setComponent(<CertNotification />)
            notificationCtx.setIsOpen(true)
        } else {
            openInNewTab(cert.url)
        }
    }

    return (
        <div className="certWrapper" onClick={handleClick}>
            <img src={cert.photo} style={{height: "180px", width: "180px"}} alt={cert.photo}/>
            <div className="certDetails">
                <h4>{cert.name}</h4>
                <p>Source: {cert.from}</p>
                <p>ID: {cert.number}</p>
                <p>{cert.date}</p>
            </div>
        </div>
    )
}
export default Cert
