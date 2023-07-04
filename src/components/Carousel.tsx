import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import churchHall from '../assets/church_hall.jpg'
import piano1 from '../assets/piano_empty_1.jpg'
import piano2 from '../assets/piano_empty_2.jpg'
import yoheiMartin from '../assets/yohei_martin.jpg'
import churchHallWebp from '../assets/church_hall.webp'
import piano1Webp from '../assets/piano_empty_1.webp'
import piano2Webp from '../assets/piano_empty_2.webp'
import yoheiMartinWebp from '../assets/yohei_martin.webp'

import '../styles/Carousel.scss'

export const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    dotsClass: 'slick-dots dots-style',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 5000
  }

  return (
    <div className="image-carousel">
      <Slider { ...settings }>
        <div>
          <picture>
            <source srcSet={churchHallWebp} width="800" height="auto" />
            <img src={churchHall} width="800" height="auto" alt="Church Hall" />
          </picture>
        </div>
        <div>
          <picture>
            <source srcSet={piano1Webp} width="800" height="auto" />
            <img src={piano1} width="800" height="auto" alt="Grand Piano" />
          </picture>
        </div>
        <div>
          <picture>
            <source srcSet={piano2Webp} width="800" height="auto"/>
            <img src={piano2} width="800" height="auto" alt="Grand Piano" />
          </picture>
        </div>
        <div>
          <picture>
            <source srcSet={yoheiMartinWebp} width="800" height="auto"/>
            <img src={yoheiMartin} width="800" height="auto" alt="Piano and Violin musicians" />
          </picture>
        </div>
      </Slider>
    </div>
  )
}
