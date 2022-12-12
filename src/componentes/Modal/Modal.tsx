<<<<<<< HEAD
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
=======
import React from 'react'
import style from './Modal.module.css'

interface ComponetNameProps {
  children: React.ReactNode
}

const Modal: React.FC<ComponetNameProps> = ({ children }) => {
  return (
    <div id="modal">
      <div className={style.fade} />
      <div className={style.modal}>
>>>>>>> af569e47a97319753e3acaed2b5a392487603d91
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
