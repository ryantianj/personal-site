import React, {useContext, useEffect} from "react";
import ReactDOM from "react-dom";
import "./Notification.css"
import NotificationContext from "./NotificationContext";

const NotificationBody = () => {
    const notificationCtx = useContext(NotificationContext)
    useEffect(() => {
        if (notificationCtx.time > 0) {
            setTimeout(() => {
                notificationCtx.setIsOpen(false)
            }, notificationCtx.time * 1000)
        }
    }, [notificationCtx])
    return (
        <div className="notification">
            {notificationCtx.component}
        </div>
    )
}

const Notification = () => {
    const notificationCtx = useContext(NotificationContext)

    return (
        <React.Fragment>
            {notificationCtx.isOpen && ReactDOM.createPortal(<NotificationBody />
                , document.getElementById('notification')
            )}
        </React.Fragment>
    )
}
export default Notification
