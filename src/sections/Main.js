import React from 'react'
import './Main.css'
import NavBar from "../components/navbar/navbar"
import Hello from "./Hello/Hello";
import About from "./About/About"
import Projects from "./Projects/Projects";

const Main = () => {
    return (
        <React.Fragment>
            {/*<NavBar />*/}
            <div className="appWrapper">
                <Hello />
                <About />
                <Projects />
            </div>
        </React.Fragment>
    )
}

export default Main
