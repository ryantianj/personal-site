import React, {useState} from "react";
import "./Search.css"
import {ImCancelCircle} from "react-icons/im";

const Search = ({setSearch}) => {
    const [value, setValue] = useState("")
    const handleChange = (e) => {
        setSearch(e.target.value.trim().toLowerCase())
        setValue(e.target.value)
    }

    const handleClear = () => {
        setSearch("")
        setValue("")
    }

    return (
        <div className="searchWrapper">
            <input onChange={handleChange} className="search" placeholder="Search" value={value}/>
            {value.length > 0 && <ImCancelCircle className="searchIcon" onClick={handleClear}/>}
        </div>
    )
}
export default Search
