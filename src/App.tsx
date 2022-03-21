import { Component, createEffect, createSignal } from 'solid-js'
import { Loader } from './components/Loader/Loader'
import { Board } from './components/Board/Board'
import { Square } from './components/Square/Square'
import { celebrate } from './utilities/celebrate'
import styles from './App.module.css'
import { checkForWin } from './utilities/checkForWin'
import { Button } from './components/Button/Button'

export interface ISquare {
  content: 'X' | 'O' | ''
  squareId: number
}

const generateBoard = () => {
  const squares: ISquare[] = []
  for (let i = 0; i < 9; i++) {
    squares.push({ content: '', squareId: i })
  }
  return squares
}

const App: Component = () => {
  const [isLoading, setIsLoading] = createSignal(true)
  const [squares, setSquares] = createSignal(generateBoard())
  const [player, setPlayer] = createSignal<ISquare['content']>('X')
  const [isWin, setIsWin] = createSignal(false)
  const [isDraw, setIsDraw] = createSignal(false)
  const [isGameOver, setIsGameOver] = createSignal(false)

  setTimeout(() => {
    setIsLoading(false)
  }, 3000)

  createEffect(() => {
    const isGameOver = isWin() || isDraw()

    setIsGameOver(isGameOver)
  })

  createEffect(() => {
    isWin() && celebrate()
  })

  createEffect(() => {
    const board = squares()
    const isWin = checkForWin(board)

    setIsWin(isWin)
  })

  createEffect(() => {
    const board = squares()
    const isWin = checkForWin(board)
    const isFull = board.every((square) => square.content)
    const isDraw = !isWin && isFull

    setIsDraw(isDraw)
  })

  const squareClick = (squareId: number) => {
    const currentSquare = squares()[squareId]

    if (currentSquare.content) {
      return
    }

    const newContent = player()
    const newSquaresArr = [...squares()]
    newSquaresArr[squareId].content = newContent
    setSquares(newSquaresArr)

    const newPlayer = player() === 'X' ? 'O' : 'X'
    setPlayer(newPlayer)
  }

  const resetClick = () => {
    setSquares(generateBoard())
    setPlayer('X')
  }

  return (
    <>
      {isLoading() ? (
        <Loader />
      ) : (
        <main class={styles.main}>
          <Board>
            {squares().map((square) => (
              <Square
                content={square.content}
                squareId={square.squareId}
                onclick={squareClick}
                isActive={!isGameOver()}
              />
            ))}
          </Board>
          {(isDraw() || isWin()) && <Button onclick={resetClick}>Reset</Button>}
        </main>
      )}
    </>
  )
}

export default App
