import React, { useEffect, useState } from 'react'
import { format } from 'date-fns'
import logo from '../assets/bmm_logo_resized_png.png'
import logoWebp from '../assets/bmm_logo_resized.webp'
import '../styles/Banner.scss'
import { links } from '../links/website-links'

export const Banner = () => {
  const [nextConcertDate, setNextConcertDate] = useState('')

  const ONEDAY = 24 * 60 * 60 * 1000
  const concertDates = [
    new Date('2025-09-27'),
    new Date('2025-10-25'),
    new Date('2025-11-22'),
    new Date('2025-12-20'),
    new Date('2026-01-24'),
    new Date('2026-02-28'),
    new Date('2026-03-28'),
    new Date('2026-04-25'),
    new Date('2026-05-23'),
    new Date('2026-06-27')
  ]

  useEffect(() => {
    const currentDateTime = new Date().getTime()

    let filteredDates = [...concertDates]

    for (let i = 0; i < concertDates.length; i++) {
      if (currentDateTime - concertDates[i].getTime() > ONEDAY) {
        filteredDates = filteredDates.filter(date => date.getTime() !== concertDates[i].getTime())
      }

      const formattedDate = format(filteredDates[0], 'iiii do MMMM') || ''
      setNextConcertDate(formattedDate)
    }
  }, [])
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
        <p className="smallprint">81st Season</p>
        <p className="smallprint">Next Concert:</p>
        <p className="smallprint">
          <strong>{nextConcertDate}</strong>
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
