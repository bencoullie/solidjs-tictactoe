import { ISquare } from '../App'

const checkForWin = (board: ISquare[]) => {
  const lineOfOs = (square: ISquare) => square.content === 'O'
  const lineOfXs = (square: ISquare) => square.content === 'X'

  const topRow = [board[0], board[1], board[2]]
  const bottomRow = [board[6], board[7], board[8]]
  const rightColumn = [board[2], board[5], board[8]]
  const leftColumn = [board[0], board[3], board[6]]
  const midColumn = [board[1], board[4], board[7]]
  const midRow = [board[3], board[4], board[5]]
  const downDiag = [board[0], board[4], board[8]]
  const upDiag = [board[6], board[4], board[2]]

  const topWin = topRow.every(lineOfOs) || topRow.every(lineOfXs)
  const bottomWin = bottomRow.every(lineOfOs) || bottomRow.every(lineOfXs)
  const rightWin = rightColumn.every(lineOfOs) || rightColumn.every(lineOfXs)
  const leftWin = leftColumn.every(lineOfOs) || leftColumn.every(lineOfXs)
  const midColumnWin = midColumn.every(lineOfOs) || midColumn.every(lineOfXs)
  const midRowWin = midRow.every(lineOfOs) || midRow.every(lineOfXs)
  const downDiagWin = downDiag.every(lineOfOs) || downDiag.every(lineOfXs)
  const upDiagWin = upDiag.every(lineOfOs) || upDiag.every(lineOfXs)

  const isWin =
    topWin ||
    bottomWin ||
    rightWin ||
    leftWin ||
    midColumnWin ||
    midRowWin ||
    downDiagWin ||
    upDiagWin

  return isWin
}

export { checkForWin }
