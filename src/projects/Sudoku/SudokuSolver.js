import React, {useContext, useState} from "react";
import "./Sudoku.css"
import SudokuBoard from "./SudokuBoard";
import sudokuContext from "./SudokuContext";
import {solveSudoku} from "./SudokuLogic"
import Button from "../../components/Button";

const SudokuSolver = () => {
    const TestComponent = () => {
        const sudokuCtx = useContext(sudokuContext)
        const [hasSolution, setHasSolution] = useState(-1) // -1 for waiting, 0 for solved, 1 for unsolvable

        const handleClick = () => {
            const board = sudokuCtx.getBoard()
            const parsedBoard = board.map(x => x.map(y => y === undefined ? "." : y))
            const solution = solveSudoku(parsedBoard)
            if (solution !== null) {
                setHasSolution(0)
                sudokuCtx.setWholeBoard(solution)
            } else {
                setHasSolution(1)
            }
        }

        const handleClear = () => {
            sudokuCtx.clearBoard()
        }

        return (
            <div>
                <Button onClick={handleClick}>
                    Solve
                </Button>
                <Button onClick={handleClear}>
                    Clear
                </Button>
                {hasSolution === -1 && "Enter some values into the grid"}
                {hasSolution === 0 && "Solved!"}
                {hasSolution === 1 && "Unsolvable, invalid puzzle!"}
            </div>
        )
    }

    return (
        <div className="componentWrapper">
            <div className="sudokuWrapper">
                <SudokuBoard />
                <TestComponent />
            </div>
        </div>
    )
}
export default SudokuSolver
