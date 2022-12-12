/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { ITask } from '../../interfaces/Task'
import style from './List.module.css'

interface ListProps {
  taskList: ITask[]
  handleDelete(id: number): void
  handleEdit(): void
}

const List: React.FC<ListProps> = ({ taskList, handleDelete, handleEdit }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id}>
            <div>
              <h4>{task.titulo}</h4>
              <p>Descrição: {task.descricao}</p>
            </div>
            <div>
              <i className="bi bi-pencil" onClick={() => handleEdit()} />
              <i
                className="bi bi-trash"
                onClick={() => {
                  handleDelete(task.id)
                }}
              />
            </div>
          </div>
        ))
      ) : (
        <p>Não ha tarefas cadastradas</p>
      )}
    </>
  )
}

export default List
