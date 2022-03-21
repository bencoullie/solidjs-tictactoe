import { Component } from 'solid-js'
import { ISquare } from '../../App'
import styles from './Square.module.css'

interface Props {
  content: ISquare['content']
  squareId: number
  onclick: (squareId: number) => void
  isActive: boolean
}

const Square: Component<Props> = (props) => {
  return (
    <div
      class={`${styles.square} ${
        !props.content && props.isActive && styles.clickableSquare
      }`}
      onclick={() =>
        !props.content && props.isActive && props.onclick(props.squareId)
      }
    >
      <span class={styles.text}>{props.content}</span>
    </div>
  )
}

export { Square }
