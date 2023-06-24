import react from 'react';
import bmmLogo from '../assets/bmm_logo.png';

export const Header = () => {
  return (
    <header>
      <nav>
        <img src={bmmLogo} height="48px" width="48px"
          alt="Bromley Music Makers Logo" />
        <a href="#concerts">Concerts</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}