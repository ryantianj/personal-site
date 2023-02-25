import React from "react";
import "./Scroller.css"
import {AiFillCaretUp, AiFillCaretDown} from "react-icons/ai";

const Scroller = () => {

    const handleUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleDown = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    return (
        <div className="scrollerWrapper">
            <button onClick={handleUp} className="scrollButton">
                <AiFillCaretUp />
            </button>
            <button onClick={handleDown} className="scrollButton">
                <AiFillCaretDown />
            </button>
        </div>
    )
}
export default Scroller
