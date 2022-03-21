import type { Component } from 'solid-js'
import logo from '../../logo.svg'
import styles from './Loader.module.css'

const Loader: Component = () => (
  <div class={styles.container}>
    <img src={logo} class={styles.loader} alt="solid-js-loading" />
    <p>Loading...</p>
  </div>
)

export { Loader }
