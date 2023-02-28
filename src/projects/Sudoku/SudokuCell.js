import React, {useContext, useEffect, useState} from "react";
import "./SudokuBoard.css"
import sudokuContext from "./SudokuContext";

const SudokuCell = ({row, col, cell}) => {
    const [value, setValue] = useState(cell.getValue())
    const sudokuCtx = useContext(sudokuContext)

    const handleInputChange = (e) => {
        const inputValue = e.target.value
        if (1 <= inputValue && inputValue <= 9) {
            sudokuCtx.editCell(row, col, inputValue.toString())
            setValue(inputValue)
        }

    }

    useEffect(() => {
        if (cell.getValue() === ".") {
            setValue("")
        } else {
            setValue(cell.getValue())
        }

    }, [cell])

    const getCSSClass = () => {
        // rows 2, 5 have bottom border, cols 2, 5 have right border
        let currentString = 'sudokuCell'
        if (row === 2 || row === 5) {
            currentString += ' sudokuCellBottom'
        }
        if (col === 2 || col === 5) {
            currentString += ' sudokuCellRight'
        }
        return currentString
    }

    const className = getCSSClass()

    return (
        <div className={className}>
            <input type="number" className="sudokuCellInput" onChange={handleInputChange} value={value}
            readOnly={sudokuCtx.board.getCell(row, col).getReadOnly()}/>
        </div>
    )
}
export default SudokuCell