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
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal
