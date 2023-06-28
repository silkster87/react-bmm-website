import React from 'react'

import '../styles/Footer.scss'
import { links } from '../links/website-links'

export const Footer = () => {
  return (
    <footer>
      <p>Website designed and built by Silky Ng | Email: <a href={links.emailSilky}>silky.ng@gmail.com</a></p>
    </footer>
  )
}
