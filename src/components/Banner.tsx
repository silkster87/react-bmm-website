import React from 'react'

import '../styles/Banner.scss'

export const Banner = () => {
  return (
    <div id="banner">
      <div className="banner-title">
        <p>Bromley Music Makers</p>
        <p className="smallprint">79th Season</p>
        <p className="smallprint">
          {'Next Concert: Saturday 23rd September 2024 (3-5pm)'}
        </p>
      </div>
    </div>
  )
}
