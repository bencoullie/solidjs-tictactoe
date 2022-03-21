import type { Component } from 'solid-js'
import styles from './Button.module.css'

interface Props {
  onclick: VoidFunction
}

const Button: Component<Props> = (props) => (
  <button onclick={props.onclick} class={styles.button}>
    Reset
  </button>
)

export { Button }
