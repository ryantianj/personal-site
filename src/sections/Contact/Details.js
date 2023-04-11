import React from "react";
import "./Details.css"
import {email, location} from "../../Information/Contact";
import {MdEmail} from "react-icons/md";
import {ImLocation} from "react-icons/im";

const Details = () => {
    return (
        <div className="detailsWrapper">
            <div className="detailWrapper">
                <MdEmail style={{fontSize : "20px"}}/>
                <p>{email}</p>
            </div>
            <div className="detailWrapper">
                <ImLocation style={{fontSize : "20px"}}/>
                <p>{location}</p>
            </div>
        </div>
    )
}
export default Details
