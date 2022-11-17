/* eslint-disable react/no-children-prop */
/* eslint-disable eqeqeq */
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
        return task.id! === id
      })
    )
    console.log('cliclou delete')
  }

  return (
    <div>
      <Modal children={<Form btnText="Editar Tarefa" taskList={taskList} />} />
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
          <List taskList={taskList} handleDelete={deleteTask} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
