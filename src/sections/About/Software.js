import React, {useState} from "react";
import "./Software.css"
import Search from "../../components/Search";
import Filter from "../../components/Filter";
import {AiFillCaretDown} from "react-icons/ai";

const Software = ({software}) => {
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")
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

    const handleDown = () => {
        const objDiv = document.getElementById("technologies");
        objDiv.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
    }

    const softwareFilter = software.filter(y => y.text.trim().toLowerCase().includes(search))
        .filter(z => {
            if (filter === "all") {
                return true
            }
            return z.type === filter
        })
        .map((x, i) => <SoftwareItem software={x} key={i}/>)

    return (
        <div className="softwareWrapper">
            <div className="softwareHeader">
                <h2 className="aboutmeHeaders">
                    Technologies
                </h2>
                <Filter setFilter={setFilter}/>
                <Search setSearch={setSearch}/>
            </div>
            <div className="softwareList" id="technologies">
                {softwareFilter}
            </div>
            <div className="softwareScroll">
                <button onClick={handleDown} className="softwareScrollButton">
                    <AiFillCaretDown />
                </button>
            </div>
        </div>
    )
}
export default Software
