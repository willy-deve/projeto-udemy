<<<<<<< HEAD
/* eslint-disable no-shadow */
/* eslint-disable react/no-children-prop */
=======
/* eslint-disable react/no-children-prop */
/* eslint-disable eqeqeq */
>>>>>>> af569e47a97319753e3acaed2b5a392487603d91
import React, { useState } from 'react'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import styles from './App.module.css'
import Form from './componentes/Form/Form'
import List from './componentes/List/List'
import { ITask } from './interfaces/Task'
import Modal from './componentes/Modal/Modal'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
<<<<<<< HEAD
        return task.id !== id
      })
    )
  }

  const hiderOrShowModal = (display: boolean) => {
    const modal = document.querySelector('#modal')

    if (display) {
      modal!.classList.remove('hide')
    } else {
      modal!.classList.add('hide')
    }
  }

  const editTask = (): void => {
    hiderOrShowModal(true)
=======
        return task.id! === id
      })
    )
    console.log('cliclou delete')
>>>>>>> af569e47a97319753e3acaed2b5a392487603d91
  }

  return (
    <div>
<<<<<<< HEAD
      <Modal children={<Form btnText="Editar" taskList={taskList} />} />
=======
      <Modal children={<Form btnText="Editar Tarefa" taskList={taskList} />} />
>>>>>>> af569e47a97319753e3acaed2b5a392487603d91
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que voce vai fazer?</h2>
          <Form
            btnText="Criar tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas</h2>
<<<<<<< HEAD
          <List
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
=======
          <List taskList={taskList} handleDelete={deleteTask} />
>>>>>>> af569e47a97319753e3acaed2b5a392487603d91
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
