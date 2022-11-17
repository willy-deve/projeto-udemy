import React from 'react'
import { ITask } from '../../interfaces/Task'
import style from './List.module.css'

interface ListProps {
  taskList: ITask[]
}

const List: React.FC<ListProps> = ({ taskList }) => {
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
              <i className="bi bi-pencil" />
              <i className="bi bi-trash" />
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
