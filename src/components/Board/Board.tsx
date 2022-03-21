import { children, Component } from 'solid-js'
import styles from './Board.module.css'

const Board: Component = (props) => {
  const squares = children(() => props.children)

  return <div class={styles.board}>{squares()}</div>
}

export { Board }
