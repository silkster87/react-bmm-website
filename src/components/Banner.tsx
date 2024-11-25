import React from 'react'

import logo from '../assets/bmm_logo_resized_png.png'
import logoWebp from '../assets/bmm_logo_resized.webp'
import '../styles/Banner.scss'
import { links } from '../links/website-links'

export const Banner = () => {
  return (
    <div id="banner">
      <div className="bmm-logo-container">
        <picture>
          <source srcSet={logoWebp} />
          <img
            className="bmm-logo"
            src={logo}
            alt="Bromley Music Makers Logo"
            height="90px"
            width="auto"/>
        </picture>
      </div>
      <div className="banner-title">
        <p>Bromley Music Makers</p>
        <p className="smallprint">80th Season</p>
        <p className="smallprint">Next Concert:</p>
        <p className="smallprint">
          <strong>Saturday 14th December (3pm)</strong>
        </p>
        <div className="btn-container">
          <button className="join-bmm-btn">
            <a
              href={links.joinBMM}
              target="_blank"
              style={{ color: 'white' }}
              rel="noreferrer">
                Join BMM
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
