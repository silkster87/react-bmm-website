import React from 'react'
import './styles/App.scss'

import { Banner, Footer, Header, Main } from './components'

function App () {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
      <Footer />
    </div>
  )
}

export default App
