import React from "react";
import "./SudokuBoard.css"
import SudokuCell from "./SudokuCell";

const SudokuSubBox = ({row}) => {
    const sudokuArray = Array.apply("", Array(9))
    return (
        <div className="sudokuSubBox">
            {sudokuArray.map((x, i) => <SudokuCell key={i} col={i} row={row} />)}
        </div>
    )
}
export default SudokuSubBox