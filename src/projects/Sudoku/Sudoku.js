import React, {useState} from "react";
import "./Sudoku.css"
import {SudokuContextProvider} from "./SudokuContext";
import SudokuSolver from "./SudokuSolver";
import SudokuGame from "./SudokuGame";

const Sudoku = () => {
    const [tab, setTab] = useState(1) // 0 for game, 1 for solver

    return (
        <SudokuContextProvider>
            <div>
                <button onClick={() => setTab(0)}>
                    game
                </button>
                <button onClick={() => setTab(1)}>
                    solver
                </button>
            </div>
            {tab === 0 && <SudokuGame/>}
            {tab === 1 && <SudokuSolver/>}
        </SudokuContextProvider>
    )
}
export default Sudoku
