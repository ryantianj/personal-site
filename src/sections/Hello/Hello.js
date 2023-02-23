import React from 'react'
import "./Hello.css"
import Portrait from "./Portrait";
import Intro from "./Intro";
import {IntroInfo, portraitInfo} from "../../Information/Hello";

const Hello = () => {
    return (
        <div className="helloWrapper">
            <Portrait profilePicture={portraitInfo.photo}/>
            <Intro greeting={IntroInfo.greeting} name={IntroInfo.name} title={IntroInfo.title}/>
        </div>
    )
}
export default Hello