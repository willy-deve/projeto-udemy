/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import styles from './Modal.module.css'
import '../../index.css'

interface Props {
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children }) => {
  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector('#modal')
    modal!.classList.add('hide')
    console.log('clicou')
  }

  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal} />
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
