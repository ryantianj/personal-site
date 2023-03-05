import React from 'react'
import "./Portrait.css"
import "./Hello.css"

const Portrait = ({profilePicture}) => {
    return (
        <div className="portraitWrapper">
            <img src={profilePicture} style={{width: "350px", borderRadius: "1000px"}}/>
        </div>
    )
}
export default Portrait