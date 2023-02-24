import React from "react";
import "./Cert.css"

const Cert = ({cert}) => {
    return (
        <div className="certWrapper">
            <h4>{cert.name}</h4>
            <p>Source: {cert.from}</p>
            <p>ID: {cert.number}</p>
            <p>{cert.date.toLocaleDateString("en-US")}</p>
        </div>
    )
}
export default Cert
