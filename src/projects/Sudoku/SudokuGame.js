import React, {useContext, useState} from "react";
import "./Sudoku.css"
import SudokuBoard from "./SudokuBoard";
import sudokuContext from "./SudokuContext";
import Button from "../../components/Button";
import {checkSolution, generateSudoku, getSolutionDepth, isValidSudoku, solveSudoku} from "./Logic/SudokuLogic"

const SudokuGame = () => {
    const GameBar = () => {
        const sudokuCtx = useContext(sudokuContext)
        const handleGenerate = () => {
            const generated = generateSudoku(20)
            sudokuCtx.setFullBoard(generated)
        }

        const handleSolution = () => {
            const solution = solveSudoku(sudokuCtx.board.getBoardString())
            sudokuCtx.setFullBoard(solution)
        }

        const handleCheck = () => {

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
