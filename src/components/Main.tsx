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
      <h2>Welcome to Bromley Music Makers</h2>
      <p>Do you love classical music and want to hear live concerts in your local area?
        Are you a classical musician looking for opportunities to perform?
        Do you want to meet other classical musicians with whom to play and collaborate?
      </p>
      <p>Why not join Bromley Music Makers?</p>
      <p>We present varied, interesting and enjoyable concerts every month, with our members performing as instrumentalists or singers.</p>
      <p>It’s very easy to join – just fill in our online form.  Or if you just want to find out more, come to one of our concerts as a listener for just £5.
        If you then decide to join, we’ll deduct that from your first year’s subscription.</p>
      <p>We hold our concerts in a pleasant venue with a lovely acoustic and an excellent grand piano:&nbsp;
        <strong><a href={links.googleMapShareLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>Christ Church URC in Petts Wood.</a> </strong>
        It is a short walk from the train station and there is both a car park and local on-street parking.</p>
      <br />
      <section className="map-container">
        <iframe loading="lazy" src={links.googleMapSrc} id="bmmMap" title="Map of venue location" />
      </section>
      <p>The standard annual subscription is <strong>£25</strong>, but the subscription is waived for full-time students. For other members aged 18-29 the subscription is £5. </p>
      <p>Visitors are welcome to attend concerts at a charge of <strong>£5</strong>.</p>
      <div className="btn-container">
        <button className="join-bmm-btn">
          <a href={links.joinBMM} target="_blank" style={{ color: 'white' }} rel="noreferrer">Join BMM</a>
        </button>
      </div>
      <p>Join us to perform classical music or just listen. All instruments and voice types are welcome but you must be over 18.</p>
      <ImageCarousel />
      <section className="video-container">
        <iframe loading="lazy" src={links.trioYTPart1}></iframe>
        <p>Ayako Yamazaki (violin), Lois Jones (cello) and Michelle Mutian Xu Watkins (piano) performing selected works from Piazzolla&apos;s
          <em> &quot;Cuatro Estaciones Porteñas&quot;.</em> (23rd September 2023 concert)
        </p>
        <iframe loading="lazy" src={links.trioYTPart2}></iframe>
        <p>One of our soprano members: Joanna Whalley. Performing &quot;Quel guardo il Cavaliere&quot; by Gaetano Donizetti.</p>
        <iframe loading="lazy" src={links.joannaWhalleyYT}></iframe>
      </section>
      <section className="concerts-container">
        <h2 id="concerts">
          <span>CONCERTS - 81st SEASON</span>
        </h2>
        <p>{'All concerts 3-5pm unless stated'}</p>
        <h2>2025</h2>
        <p>
        Saturday September 27th<br />
        Saturday October 25th<br />
        Saturday November 22nd<br />
        Saturday December 20th
        </p>
        <h2>2026</h2>
        <p>
        Saturday January 24th<br />
        Saturday February 28th<br />
        Saturday March 28th<br />
        Saturday April 25th<br />
        Saturday May 23rd<br />
        Saturday June 27th (2:45 pm)<br />
        </p>
        <p>An example of a typical programme is available to download here: </p>
        <div className="btn-container">
          <button className="join-bmm-btn">
            <a href={links.exampleProgramme} target="_blank" rel="noreferrer">Download</a>
          </button>
        </div>
      </section>
      <section className="about-container" id="about">
        <h2>About BMM</h2>
        <p>{words.aboutBMM}</p>
      </section>
      <section className="history-container" id="history">
        <h2>History of BMM</h2>
        <p>{words.historyOfBMM}</p>
      </section>
      <section className="contact-container" id="contact">
        <h2>Contact</h2>
      </section>
      <p>{words.contactBMM}</p>
      <section className="profiles-container">
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
      </section>
    </main>
  )
}
