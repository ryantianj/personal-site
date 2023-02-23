import React, {useState} from "react";

const ModalContext = React.createContext({
    data: {},
    setData: () => {},
    isOpen: false,
    setIsOpen: () => {},
});
export const ModalContextProvider = (props) => {
    const [data, setData] = useState({})
    const [open, setIsOpen] = useState(false)

    const dataHandler = (data) => {
        setData(data)
    }

    const setOpen = (boo) => {
        setIsOpen(boo)
    }

    return (
        <ModalContext.Provider value={{
            data: data,
            setData: dataHandler,
            isOpen: open,
            setIsOpen: setOpen
        }}>
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalContext