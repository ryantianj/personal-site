import React from "react";
import "./Software.css"

const Software = ({software}) => {
    const SoftwareItem = ({software}) => {
        return (
            <div className="softWareItem">
                <div style={{fontSize: "70px"}}>
                    {software.icon}
                </div>
                <div style={{fontWeight: "bold"}}>
                    {software.text}
                </div>
            </div>
        )
    }

    return (
        <div className="softwareWrapper">
            <h2 className="aboutmeHeaders">
                Software
            </h2>
            <div className="softwareList">
                {software.map((x, i) => <SoftwareItem software={x} key={i}/>)}
            </div>
        </div>
    )
}
export default Software
