import React from 'react'
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