import React, {useContext, useEffect, useState} from "react";
import sudokuContext from "./SudokuContext";

const SudokuCell = ({row, col}) => {
    const [value, setValue] = useState("")
    const [readOnly, setReadOnly] = useState(false)
    const sudokuCtx = useContext(sudokuContext)
    const colIndex = (col) % 3 + (row % 3) * 3
    const rowIndex = Math.floor(col / 3) + Math.floor(row / 3) * 3

    useEffect(() => {
        if (sudokuCtx.board !== null) {
            const val = sudokuCtx.board[rowIndex][colIndex]
            if (val !== ".") {
                setValue(sudokuCtx.board[rowIndex][colIndex])
                setReadOnly(true)
            } else {
                setValue("")
                setReadOnly(false)
            }
        } else {
            setValue("")
        }
    }, [sudokuCtx.board])
    const handleValue = (e) => {
        const inputValue = e.target.value
        if (0 < inputValue && inputValue <= 9) {
            sudokuCtx.setBoard(rowIndex, colIndex, inputValue)
            setValue(inputValue)
        } else {
            sudokuCtx.setBoard(rowIndex, colIndex, ".")
            setValue("")
        }
    }
    return (
        <div className="sudokuCell">
            <input type="number" className="sudokuCellInput" onChange={handleValue} value={value} readOnly={readOnly}/>
        </div>
    )
}
export default SudokuCell