import React, { useState, useEffect } from 'react'
import bmmLogo from '../assets/bmm_logo.png'

import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import '../styles/Header.scss'

export const Header = () => {
  const [showMenu, setShowMenu] = useState(true)
  const [showDropDown, setShowDropDown] = useState(false)

  const closeDropDown = () => {
    setShowDropDown(false)
  }
  const links = () => (
    <>
      <a href="#" onClick={closeDropDown}>Home</a>
      <a href="#concerts" onClick={closeDropDown}>Concerts</a>
      <a href="#about" onClick={closeDropDown}>About</a>
      <a href="#history" onClick={closeDropDown}>History</a>
      <a href="#contact" onClick={closeDropDown}>Contact</a>
    </>
  )

  const iconSizes = { width: 32, height: 32 }
  useEffect(() => {
    const handleMenu = () => {
      if (window.innerWidth > 980) {
        setShowMenu(false)
        setShowDropDown(false)
      }
      if (window.innerWidth <= 980) setShowMenu(true)
    }

    window.addEventListener('resize', handleMenu)
    handleMenu()

    return () => window.removeEventListener('resize', handleMenu)
  }, [])

  return (
    <header>
      <nav>
        <div className="logo-title-container">
          <img src={bmmLogo} height="36px" width="36px"
            alt="Bromley Music Makers Logo" />
          <p>Bromley Music Makers</p>
        </div>
        <aside className="links">
          {links()}
        </aside>
        {showMenu &&
          <button className="menu-btn" onClick={() => { setShowDropDown(prev => !prev) }}>
            {!showDropDown ? <MenuIcon sx={iconSizes} /> : <CloseIcon sx={iconSizes} />}
          </button>
        }
      </nav>
      {showDropDown &&
        <div className="dropdown-list-links">
          <div className="links-dropdown-container">
            {links()}
          </div>
        </div>}
    </header>

  )
}
