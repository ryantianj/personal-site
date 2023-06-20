import React from "react";
import "./Filter.css"
import {types} from "../Globals";

const Filter = ({setFilter}) => {
    const typesArray = Object.values(types)

    const handleSelect = (e) => {
        setFilter(e.target.value)
    }

    return (
        <select onChange={handleSelect} className="filter">
            <option value="all">All</option>
            {typesArray.map((x, i)=> <option key={i} value={x}>{x}</option>)}
        </select>
    )
}
export default Filter
