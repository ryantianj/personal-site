import React from "react";
import "./Certs.css"
import CertsList from "./CertsList";
import {certsInfo} from "../../Information/Certs";
const Certs = () => {
    return (
        <div className="componentWrapper">
            <h2 className="sectionHeader">Certifications</h2>
            <CertsList certs={certsInfo}/>
        </div>
    )
}
export default Certs
