/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { ITask } from '../../interfaces/Task'
import style from './List.module.css'

interface ListProps {
  taskList: ITask[]
  handleDelete(id: number): void
}

const List: React.FC<ListProps> = ({ taskList, handleDelete }) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={style.task}>
            <div className={style.details}>
              <h4>{task.titulo}</h4>
              <p>Descrição: {task.descricao}</p>
            </div>
            <div className={style.actions}>
              <i className="bi bi-pencil" />
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
