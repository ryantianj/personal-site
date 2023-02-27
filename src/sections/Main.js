import React from 'react'
import './Main.css'
import ScrollBar from "../components/ScrollBar/ScrollBar"
import Hello from "./Hello/Hello";
import About from "./About/About"
import Projects from "./Projects/Projects";
import Certs from "./Certs/Certs";
import Contact from "./Contact/Contact";
import Notification from "../components/Notification/Notification";
import Scroller from "../components/Scroller/Scroller";
import Theme from "../components/DarkMode/Theme";

const Main = () => {

    return (
        <React.Fragment>
            <ScrollBar />
            <Theme />
            <div className="appWrapper">
                <Hello />
                <About />
                <Projects />
                <Certs />
                <Contact/>
            </div>
            <Notification />
            <Scroller />
        </React.Fragment>
    )
}

export default Main
