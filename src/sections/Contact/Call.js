import React from "react";
import "./Call.css"
import {profilePhoto, finalCall} from "../../Information/Contact";

const Call = () => {
    return (
        <div className="callWrapper">
            <img src={profilePhoto} alt={profilePhoto}/>
            <div>
                {/*<h3 style={{fontSize: "30px"}}>Get in touch</h3>*/}
                <p>{finalCall}</p>
            </div>
        </div>
    )
}
export default Call
