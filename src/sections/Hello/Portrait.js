import React from 'react'
import profilePicture from "../../Information/logo192.png"
import "./Portrait.css"
import "./Hello.css"

const Portrait = ({profilePicture}) => {
    return (
        <div className="portraitWrapper">
            <img src={profilePicture}/>
        </div>
    )
}
export default Portrait