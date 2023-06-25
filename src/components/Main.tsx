import React from 'react'

import '../styles/Main.scss'

export const Main = () => {
  const googleMapsSrc = `https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&q=Christ+Church%2C+Tudor+Way%2C+Petts+Wood%2C+Kent%2C+BR5+1LH&zoom=15`

  return (
    <main>
      <h2>Welcome to BMM</h2>
      <p>
        Bromley Music Makers (BMM) hold monthly concerts of live classical music with the aim of giving
        pleasure to those who enjoy performing or listening to music. BMM concerts for 2021/22 season will now be held in:</p>
      <br />
      <strong>Christ Church, Tudor Way, Petts Wood, Kent, BR5 1LH</strong>
      <br />
      <br />
      <div className="map-container">
        <iframe loading="lazy" src={googleMapsSrc} id="bmmMap" />
      </div>
      <p>The annual membership subscription is <strong>£25</strong>{' (this is reduced to '}<strong>£10</strong>{' for students).'}</p>
      <p>Guests are welcome to attend concerts at a charge of <strong>£5</strong>.</p>
      <button className="join-bmm-btn">
        <a href="https://www.cognitoforms.com/BromleyMusicMakers/BromleyMusicMakersApplicationForm" target="_blank" style={{ color: 'white' }} rel="noreferrer">Join BMM</a>
      </button>
      <p>Members have the opportunity to hear or take part in performances of classical music in the form of solo items or small ensembles. Music lovers of all ages are welcome, including:</p>
      <ul>
        <li>Listening members</li>
        <li>Wind Players</li>
        <li>String Players</li>
        <li>Singers</li>
        <li>Pianists</li>
      </ul>
      <h2 id="concerts">
        <span>CONCERTS - 78th SEASON</span>
      </h2>
      <h2>2021</h2>
      <p>
        Saturday September 25th<br />
        Saturday October 23rd<br />
        Saturday November 20th<br />
        Saturday December 18th
      </p>
      <h2>2022</h2>
      <p>
        Saturday January 22nd<br />
        Saturday February 26th<br />
        Saturday March 26th<br />
        Saturday April 23rd<br />
        Saturday May 28th<br />
        Saturday June 11th (Complete Works)<br />
        Saturday June 25th (Concert &amp; AGM)<br /><br />
        An example programme of our concerts can be downloaded <a href="https://drive.google.com/file/d/1HPbwlRXAT3aqaUBBhO9PMXiFoFEjPNUM/view?usp=sharing">here</a>
      </p>
    </main>
  )
}
