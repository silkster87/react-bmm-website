import React from 'react'

import martin from '../assets/martin_sharpe.jpg'
import lois from '../assets/lois_jones.jpeg'
import sara from '../assets/sara_williams_edit.jpg'

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
        <iframe loading="lazy" src={links.googleMapSrc} id="bmmMap" />
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
        <p>{'The membership of Bromley Music Makers consists of both listeners and performers. We are a large group with diverse musical interests, naturally all sharing a love of classical music.'}</p>
        <p>{'Pianists who join us have the opportunity to perform as soloists, duettists or accompanists. Other stringed or wind instrumentalists may perform as soloists or as part of a trio, quartet or larger chamber ensemble. If you are a singer or instrumentalist and you need an accompanist, we’ll help you to find one from amongst the membership.'}</p>
        <p>{'One of the benefits of joining Bromley Music Makers is finding other like-minded musicians to play and perform with. Many musical partnerships and groups have been formed over the years in this way.'}</p>
        <p>{'Whether you play an instrument, sing or just enjoy listening to live classical music, you will receive a warm welcome at Bromley Music Makers. Musicians of all standards who are able to offer a well-prepared and enjoyable performance are always appreciated and well received. Why not come along to one of our concerts and find out for yourself what a rich and rewarding experience joining us would be.'}</p>
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
          <img alt="Martin Sharpe" src={martin} />
          <p>Chairman, Martin Sharpe - Tel: <a href={links.telMartinSharpe}>{'(020) 8402 1947'}</a></p>
        </div>
        <div className="profile-row">
          <img alt="Sara Williams" src={sara} />
          <p>Secretary, Sara Williams - Email: <a href={links.emailBMM}>bromleymusicmakers@gmail.com</a></p>
        </div>
        <div className="profile-row">
          <img alt="Lois Jones" src={lois} />
          <p>Music Secretary, Lois Jones - Email: <a href={links.emailMusicSec}>loisjones958@gmail.com</a></p>
        </div>
      </div>
    </main>
  )
}
