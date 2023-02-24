import React from 'react'
import './Main.css'
import NavBar from "../components/navbar/navbar"
import Hello from "./Hello/Hello";
import About from "./About/About"
import Projects from "./Projects/Projects";
import Certs from "./Certs/Certs";
import Contact from "./Contact/Contact";

const Main = () => {
    return (
        <React.Fragment>
            {/*<NavBar />*/}
            <div className="appWrapper">
                <Hello />
                <About />
                <Projects />
                <Certs />
                <Contact/>
            </div>
        </React.Fragment>
    )
}

export default Main
