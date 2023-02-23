import React, {useContext, useEffect} from "react";
import ReactDOM from "react-dom";
import ModalContext from "./ModalContext";
import "./Modal.css"


const ModalBody = ({component}) => {
    return (
        <div className="modalBackDrop">
            <div className="modal">
                {component}
            </div>
        </div>
        )
}
const Modal = ({component}) => {
    const modalContext = useContext(ModalContext)

    useEffect(() => {
        if (modalContext.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

    }, [modalContext.isOpen])
    return (
            <React.Fragment>
                {modalContext.isOpen && ReactDOM.createPortal(<ModalBody component={component}/>
                    , document.getElementById('modal')
                )}
            </React.Fragment>
    )
}
export default Modal