/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

interface FormProps {
  btnText: string
}

const Form: React.FC<FormProps> = ({ btnText }) => {
  return (
    <form>
      <div>
        <label htmlFor="text">Titulo: </label>
        <input type="text" name="title" placeholder="Título da tarefa" />
      </div>

      <div>
        <label htmlFor="description">Descrição: </label>
        <input
          type="text"
          name="description"
          placeholder="Descrição da tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  )
}

export default Form
