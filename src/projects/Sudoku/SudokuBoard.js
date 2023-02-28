import React from "react";
import "./SudokuBoard.css"
import SudokuSubBox from "./SudokuSubBox";

const SudokuBoard = () => {
    const sudokuArray = Array.apply("", Array(9))

    return (
        <div className="sudokuBoardWrapper">
            {sudokuArray.map((x, i) => {
                return <SudokuSubBox key={i} row={i} />
            })}
        </div>
    )
}
export default SudokuBoard
