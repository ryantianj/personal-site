import React, {useState} from "react";

const NotificationContext = React.createContext({
    isOpen: false,
    setIsOpen: () => {},
    component: <div></div>,
    setComponent: () => {},
    time: 5,
    setTime: () => {},
});
export const NotificationContextProvider = (props) => {
    const [open, setIsOpen] = useState(false)
    const [time, setTime] = useState(2)
    const [component, setComponent] = useState(<div></div>)

    const setOpen = (boo) => {
        setIsOpen(boo)
    }

    const timeHandler = (time) => {
        setTime(time)
    }

    const componentHandler = (component) => {
        setComponent(component)
    }

    return (
        <NotificationContext.Provider value={{
            isOpen: open,
            setIsOpen: setOpen,
            component: component,
            setComponent: componentHandler,
            time: time,
            setTime: timeHandler,
        }}>
            {props.children}
        </NotificationContext.Provider>
    )
}
export default NotificationContext