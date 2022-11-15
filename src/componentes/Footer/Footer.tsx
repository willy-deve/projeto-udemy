import React from 'react'
import styles from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <span>React + TS Todo</span> @ 2022
      </p>
    </footer>
  )
}

export default Footer
