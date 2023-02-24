import React from "react";
import "./Contact.css"
import Call from "./Call";
import Details from "./Details";
import Footer from "./Footer";

const Contact = () => {
    return (
        <div className="componentWrapper">
            <div className="finalCallWrapper">
                <Call />
                <Details />
            </div>
            <Footer />
        </div>
    )
}
export default Contact
