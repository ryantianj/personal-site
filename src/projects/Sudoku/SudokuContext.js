import React, {useState} from "react";
import Board from "./Logic/Board";

const SudokuContext = React.createContext({
    board: [],
    editCell: () => {},
    setFullBoard: () => {},
    clearBoard: () => {}
});
export const SudokuContextProvider = (props) => {
    const [board, setBoardValue] = useState(new Board())

    const editCell = (row, col, value) => {
        setBoardValue(prevState => {
            prevState.editCell(row, col, value)
            return prevState
        })
    }

    const setFullBoard = (boardString) => {
        const newBoard = new Board(boardString)
        setBoardValue(newBoard)
    }

    const clearBoard = () => {
        const newBoard = new Board()
        setBoardValue(newBoard)
    }


    return (
        <SudokuContext.Provider value={{
            board: board,
            editCell: editCell,
            setFullBoard: setFullBoard,
            clearBoard: clearBoard
        }}>
            {props.children}
        </SudokuContext.Provider>
    )
}
export default SudokuContext