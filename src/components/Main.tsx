import React from 'react'

import { links } from '../links/website-links'
import '../styles/Main.scss'

export const Main = () => {
  return (
    <main>
      <h2>Welcome to BMM</h2>
      <p>
        Bromley Music Makers (BMM) hold monthly concerts of live classical music with the aim of giving
        pleasure to those who enjoy performing or listening to music. BMM concerts for 2023/24 season will now be held in:</p>
      <br />
      <strong>Christ Church, Tudor Way, Petts Wood, Kent, BR5 1LH</strong>
      <br />
      <br />
      <div className="map-container">
        <iframe loading="lazy" src={links.googleMapSrc} id="bmmMap" />
      </div>
      <p>General subscription will be <strong>£25</strong> for the season of concerts. The subscription is waived for full-time students at music college. For former students and all other members aged 18-29 the subscription is £5. </p>
      <p>Guests are welcome to attend concerts at a charge of <strong>£5</strong>.</p>
      <button className="join-bmm-btn">
        <a href={links.joinBMM} target="_blank" style={{ color: 'white' }} rel="noreferrer">Join BMM</a>
      </button>
      <p>Members have the opportunity to hear or take part in performances of classical music in the form of solo items or small ensembles. Music lovers of all ages are welcome, including:</p>
      <ul>
        <li>Listening members</li>
        <li>Wind Players</li>
        <li>String Players</li>
        <li>Singers</li>
        <li>Pianists</li>
      </ul>
      <div className="concerts-container">
        <h2 id="concerts">
          <span>CONCERTS - 78th SEASON</span>
        </h2>
        <p>{'All concerts 3-5pm'}</p>
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
        Saturday June 22nd<br />
        </p>
        <p>An example programme is available to download here: </p>
        <button className="join-bmm-btn">
          <a href={links.exampleProgramme} target="_blank" rel="noreferrer">Download</a>
        </button>
      </div>
      <div className="about-container" id="about">
        <h2>About BMM</h2>
        <p>{'The membership of Bromley Music Makers consists of both listeners and performers. We are a large group with diverse musical interests, naturally all sharing a love of classical music.'}</p>
        <p>{'Pianists who join us have the opportunity to perform as soloists, duettists or accompanists. Other stringed or wind instrumentalists may perform as soloists or as part of a trio, quartet or larger chamber ensemble. If you are a singer or instrumentalist and you need an accompanist, we’ll help you to find one from amongst the membership.'}</p>
        <p>{'One of the benefits of joining Bromley Music Makers is finding other like-minded musicians to play and perform with. Many musical partnerships and groups have been formed over the years in this way.'}</p>
      </div>
    </main>
  )
}
