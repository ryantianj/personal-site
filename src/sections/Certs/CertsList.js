import React from "react";
import Cert from "./Cert";
import "./CertsList.css"

const CertsList = ({certs}) => {

    return (
        <div className="certsListWrapper">
            {certs.map((x, i) => <Cert cert={x} key={i}/>)}
        </div>
    )
}
export default CertsList
