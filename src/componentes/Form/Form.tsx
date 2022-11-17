/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import style from './Form.module.css'
import { ITask } from '../../interfaces/Task'
import { RecadoRequest } from '../../Types'

interface FormProps {
  btnText: string
  taskList: ITask[]
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>
}

const Form: React.FC<FormProps> = ({ btnText, taskList, setTaskList }) => {
  const [id, seId] = useState<number>(0)
  const [titulo, setTitulo] = useState<string>('')
  const [descricao, setDescricao] = useState<string>('')

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const id = Math.floor(Math.random() * 1000)
    const newTask: ITask = { id, titulo, descricao }

    setTaskList!([...taskList, newTask])

    setTitulo('')
    setDescricao('')

    console.log(taskList)
  }

  const handleChange = () => {
    if (titulo === '' || descricao === '') {
      alert('Preencha todos os campos')
    } else {
      const novoRecado: RecadoRequest = {
        titulo,
        descricao,
      }
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={style.form}>
      <div className={style.input_container}>
        <label htmlFor="text">Titulo: </label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={(e) => setTitulo(e.target.value)}
          value={titulo}
        />
      </div>

      <div className={style.input_container}>
        <label htmlFor="description">Descrição: </label>
        <input
          type="text"
          name="description"
          placeholder="Descrição da tarefa"
          onChange={(e) => setDescricao(e.target.value)}
          value={descricao}
        />
      </div>
      <input
        type="submit"
        value={btnText}
        onChange={(e) => setDescricao(e.target.value)}
      />
    </form>
  )
}

export default Form
