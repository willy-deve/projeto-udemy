import React from 'react'
import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import styles from './App.module.css'
import Form from './componentes/Form/Form'
import List from './componentes/List/List'

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <h1>Conteudo</h1>
      </main>
      <Footer />
    </div>
  )
}

export default App
