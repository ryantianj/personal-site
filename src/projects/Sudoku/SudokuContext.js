import React, {useState} from "react";

const SudokuContext = React.createContext({
    board: [],
    setBoard: (row, col, value) => {},
    setWholeBoard: () => {},
    getBoard: () => {},
    clearBoard: () => {}
});
export const SudokuContextProvider = (props) => {
    const create2DArray = () => {
        const board = new Array(9)
        for (let i = 0; i < 9; i++) {
            board[i] = new Array(9)
        }
        board.map(x => x.fill("."))
        return board
    }
    const [board, setBoardValue] = useState(create2DArray())

    const setBoard = (row, col, value) => {
        setBoardValue(prevState => {
            const newArray = [...prevState].map(function(arr) {
                return arr.slice();
            });
            newArray[row][col] = value === "" ? "." : value
            return newArray
        })
    }

    const getBoard = () => {
        return board
    }

    const clearBoard = () => {
        setBoardValue(create2DArray())
    }

    return (
        <SudokuContext.Provider value={{
            board: board,
            setBoard: setBoard,
            getBoard: getBoard,
            clearBoard: clearBoard,
            setWholeBoard: setBoardValue
        }}>
            {props.children}
        </SudokuContext.Provider>
    )
}
export default SudokuContext