import React from 'react'
import './styles/App.scss'

import { Banner, Header, Main } from './components'

function App () {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main />
    </div>
  )
}

export default App
