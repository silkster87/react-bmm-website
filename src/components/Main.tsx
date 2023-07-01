import React from 'react'

import martin from '../assets/martin_sharpe.jpg'
import lois from '../assets/lois_jones.jpeg'
import sara from '../assets/sara_williams_edit.jpg'
import martinWebp from '../assets/martin_sharpe_resized.webp'
import loisWebp from '../assets/lois_jones_profile_pic_resized.webp'
import saraWebp from '../assets/sara_williams_edit_resized.webp'

import { links } from '../links/website-links'
import { ImageCarousel } from '../components'
import { words } from '../words/wordContents'
import '../styles/Main.scss'

export const Main = () => {
  return (
    <main>
      <h2>Welcome to BMM</h2>
      <p>
        Bromley Music Makers (BMM) hold monthly concerts of live classical music with the aim of giving
        pleasure to those who enjoy performing or listening to music. Our concerts are held at:</p>
      <br />
      <strong>Christ Church, Tudor Way, Petts Wood, Kent, BR5 1LH</strong>
      <br />
      <br />
      <div className="map-container">
        <iframe loading="lazy" src={links.googleMapSrc} id="bmmMap" title="Map of venue location" />
      </div>
      <p>The standard annual subscription is <strong>£25</strong>, but the subscription is waived for full-time students. For other members aged 18-29 the subscription is £5. </p>
      <p>Visitors are welcome to attend concerts at a charge of <strong>£5</strong>.</p>
      <div className="btn-container">
        <button className="join-bmm-btn">
          <a href={links.joinBMM} target="_blank" style={{ color: 'white' }} rel="noreferrer">Join BMM</a>
        </button>
      </div>
      <p>Members have the opportunity to hear or take part in performances of classical music in the form of solo items or small ensembles. All music lovers are welcome, including:</p>
      <ul>
        <li>Listening members</li>
        <li>Wind Players</li>
        <li>String Players</li>
        <li>Singers</li>
        <li>Pianists</li>
      </ul>
      <ImageCarousel />
      <div className="concerts-container">
        <h2 id="concerts">
          <span>CONCERTS - 79th SEASON</span>
        </h2>
        <p>{'All concerts 3-5pm unless stated'}</p>
        <h2>2023</h2>
        <p>
        Saturday September 23rd<br />
        Saturday October 28rd<br />
        Saturday November 25th<br />
        Saturday December 16th
        </p>
        <h2>2024</h2>
        <p>
        Saturday January 27th<br />
        Saturday February 24th<br />
        Saturday March 23rd<br />
        Saturday April 27th<br />
        Saturday May 25th<br />
        Saturday June 22nd (2:45 pm)<br />
        </p>
        <p>An example of a typical programme is available to download here: </p>
        <div className="btn-container">
          <button className="join-bmm-btn">
            <a href={links.exampleProgramme} target="_blank" rel="noreferrer">Download</a>
          </button>
        </div>
      </div>
      <div className="about-container" id="about">
        <h2>About BMM</h2>
        <p>{words.aboutBMM}</p>
      </div>
      <div className="history-container" id="history">
        <h2>History of BMM</h2>
        <p>{words.historyOfBMM}</p>
      </div>
      <div className="contact-container" id="contact">
        <h2>Contact</h2>
      </div>
      <p>{'If you would like to know more about Bromley Music Makers please contact the secretary by email, or you may also contact the chairman by telephone. Alternatively, simply come along to our next concert. Visitors are always welcome and you will have the opportunity to speak to the Secretary or one of the other committee members before the concert and during the interval.'}</p>
      <div className="profiles-container">
        <div className="profile-row">
          <picture>
            <source srcSet={martinWebp} />
            <img alt="Martin Sharpe" src={martin} width="182px" height="auto" />
          </picture>
          <p>Chairman, Martin Sharpe - Tel: <a href={links.telMartinSharpe}>{'(020) 8402 1947'}</a></p>
        </div>
        <div className="profile-row">
          <picture>
            <source srcSet={saraWebp} />
            <img alt="Sara Williams" src={sara} width="182px" height="auto"/>
          </picture>
          <p>Secretary, Sara Williams - Email: <a href={links.emailBMM}>bromleymusicmakers@gmail.com</a></p>
        </div>
        <div className="profile-row">
          <picture>
            <source srcSet={loisWebp} />
            <img alt="Lois Jones" src={lois} width="182px" height="auto"/>
          </picture>
          <p>Music Secretary, Lois Jones - Email: <a href={links.emailMusicSec}>loisjones958@gmail.com</a></p>
        </div>
      </div>
    </main>
  )
}
