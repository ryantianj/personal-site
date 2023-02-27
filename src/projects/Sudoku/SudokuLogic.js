/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */


const SIZE = 9
// Each state is represented by board, depth
export const solveSudoku = function(board) {
    const solDepth = getSolutionDepth(board)
    return backTrack([board, solDepth])
};


const backTrack = (csp) => {
    if (csp[1] === 0) { // depth
        return csp[0] // board
    }

    const unassigned = selectUnassignedVar(csp)
    const valueOrder = orderValues(csp, unassigned)
    const domain = valueOrder[1]
    const coords = valueOrder[0]

    for (let i = 0; i < domain.length; i++) {
        csp[1]--
        addNumberToBoard(csp[0], domain[i], coords)
        if (inference(csp[0])) {
            const result = backTrack(csp)
            if (result !== null) {
                return result
            }
        }
        removeNumberFromBoard(csp[0], domain[i], coords)
        csp[1]++
    }
    return null
}


const inference = (board) => {
    return isValidSudoku(board)
}


const addNumberToBoard = (board, value, coords) => {
    const row = parseInt(coords.substring(0, 1))
    const col = parseInt(coords.substring(2, 3))
    board[row][col] = value
    return board
}


const removeNumberFromBoard = (board, value, coords) => {
    const row = parseInt(coords.substring(0, 1))
    const col = parseInt(coords.substring(2, 3))
    board[row][col] = "."
    return board
}


// select value that is least restrictive
const orderValues = (csp, unassigned) => {
    const coords = unassigned[0]
    const domain = unassigned[1]
    const otherDomains = unassigned[2]


    // for (let i = 0; i < domain.length; i++) {
    //     for (let j = 0; )
    // }
    return unassigned
}


// select the cell with the smallest domain, also returns domains of other cells
const selectUnassignedVar = (csp) => {
    const board = csp[0]
    const domains = {}
    let currentSmallestDomain = ["1","2","3","4","5","6","7","8","9"]
    let domainCoords = [0, 0]
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            const cell = board[i][j]
            if (cell === ".") {
                const domain = getDomain(board, i, j)
                if (domain.length < currentSmallestDomain.length) {
                    currentSmallestDomain = domain
                    domainCoords = i + " " + j
                }
                domains[i + " " + j] = domain
            }
        }
    }
    return [domainCoords, currentSmallestDomain, domains]
}


const getDomain = (board, i, j) => {
    const domain = ["1","2","3","4","5","6","7","8","9"]
    // check row
    for (let row = 0; row < SIZE; row++) {
        const cell = board[i][row]
        if (domain.indexOf(cell) > -1) {
            domain.splice(domain.indexOf(cell), 1)
        }
    }
    // check col
    for (let col = 0; col < SIZE; col++) {
        const cell = board[col][j]
        if (domain.indexOf(cell) > -1) {
            domain.splice(domain.indexOf(cell), 1)
        }
    }
    // check box
    const startRow = i < 3 ? 0 : i < 6 ? 3 : i < 9 ? 6 : 0
    const startCol = j < 3 ? 0 : j < 6 ? 3 : j < 9 ? 6 : 0
    for (let k = startRow; k < startRow + 3; k++) {
        for (let l = startCol; l < startCol + 3; l++) {
            const cell = board[k][l]
            if (domain.indexOf(cell) > -1) {
                domain.splice(domain.indexOf(cell), 1)
            }
        }
    }
    return domain
}


const getSolutionDepth = (board) => {
    let count = 0
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if (board[i][j] !== ".") {
                count++
            }
        }
    }
    return SIZE * SIZE - count
}

export const isValidSudoku = function(board) {
    // check rows, then columns, then sub-boxes
    return checkRows(board) && checkCols(board) && checkBoxes(board)
};

const checkRows = (board) => {
    for (let i = 0; i < SIZE; i++) {
        const hashMap = {}
        for (let j = 0; j < SIZE; j++) {
            const current = board[i][j]
            if (hashMap[current] !== undefined) {
                return false
            }
            if (current !== ".") {
                hashMap[current] = current
            }
        }
    }
    return true
}

const checkCols = (board) => {
    for (let i = 0; i < SIZE; i++) {
        const hashMap = {}
        for (let j = 0; j < SIZE; j++) {
            const current = board[j][i]
            if (hashMap[current] !== undefined) {
                return false
            }
            if (current !== ".") {
                hashMap[current] = current
            }
        }
    }
    return true
}

const checkBoxes = (board) => {
    for (let i = 0; i < SIZE; i+=3) {
        for (let j = 0; j < SIZE; j+=3) {
            const hashMap = {}
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    const current = board[k][l]
                    if (hashMap[current] !== undefined) {
                        return false
                    }
                    if (current !== ".") {
                        hashMap[current] = current
                    }
                }
            }
        }
    }
    return true
}
export default solveSudoku
