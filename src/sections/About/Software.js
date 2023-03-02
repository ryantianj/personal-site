import React, {useState} from "react";
import "./Software.css"
import Search from "../../components/Search";

const Software = ({software}) => {
    const [search, setSearch] = useState("")
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

    const softwareFilter = software.filter(y => y.text.trim().toLowerCase().includes(search))
        .map((x, i) => <SoftwareItem software={x} key={i}/>)

    return (
        <div className="softwareWrapper">
            <div className="softwareHeader">
                <h2 className="aboutmeHeaders">
                    Software
                </h2>
                <Search setSearch={setSearch}/>
            </div>
            <div className="softwareList">
                {softwareFilter}
            </div>
        </div>
    )
}
export default Software
