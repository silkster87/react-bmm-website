import React from 'react'
import bmmLogo from '../assets/bmm_logo.png'

import '../styles/Header.scss'

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={bmmLogo} height="36px" width="36px"
          alt="Bromley Music Makers Logo" />
        <aside>
          <a href="#concerts">Concerts</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </aside>
      </nav>
    </header>
  )
}
