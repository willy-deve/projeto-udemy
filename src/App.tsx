import React, { useState } from 'react'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import styles from './App.module.css'
import Form from './componentes/Form/Form'
import List from './componentes/List/List'
import { ITask } from './interfaces/Task'

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([])

  return (
    <div>
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
          <List taskList={taskList} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
