import React, {useContext, useState} from "react";
import "./Sudoku.css"
import SudokuBoard from "./SudokuBoard";
import sudokuContext from "./SudokuContext";
import Button from "../../components/Button";
import {checkSolution, generateSudoku, getSolutionDepth, isValidSudoku, solveSudoku} from "./SudokuLogic"

const SudokuGame = () => {
    const GameBar = () => {
        const sudokuCtx = useContext(sudokuContext)
        const [valid, setValid] = useState(-1) // -1 for new, 0 for valid, 1 for invalid, 2 incomplete
        const handleGenerate = () => {
            const puzzleBoard = generateSudoku(20) // number of filled cells, do not go too high (random is slow) 50 is fine
            sudokuCtx.setWholeBoard(puzzleBoard)
        }

        const handleSolution = () => {
            const board = sudokuCtx.getBoard()
            const parsedBoard = board.map(x => x.map(y => y === undefined ? "." : y))
            const solution = solveSudoku(parsedBoard)
            if (solution !== null) {
                sudokuCtx.setWholeBoard(solution)
            }
        }

        const handleCheck = () => {
            checkSolution(sudokuCtx.getBoard())

        }

        const handleClear = () => {
            sudokuCtx.clearBoard()
        }
        return (
            <div>
                <Button onClick={handleGenerate}>
                    Generate
                </Button>
                <Button onClick={handleCheck}>
                    Check Solution
                </Button>
                <Button onClick={handleSolution}>
                    Show Solution
                </Button>
                <Button onClick={handleClear}>
                    Clear
                </Button>
                {valid === 0 && "Solution is valid"}
                {valid === 1 && "Solution is invalid"}
                {valid === 2 && "Solution is incomplete"}
            </div>
        )
    }
    return (
        <div className="componentWrapper">
            <div className="sudokuWrapper">
                <SudokuBoard />
                <GameBar />
            </div>
        </div>

    )
}
export default SudokuGame
