import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import johnAndPeter from '../assets/IMG_2910.webp'
import yoheiMartin from '../assets/yohei_martin.jpg'
import yoheiMartinWebp from '../assets/yohei_martin.webp'
import trioPic1 from '../assets/IMG_1566_resized.webp'
import quintetPic1 from '../assets/IMG_1573_resized.webp'
import trioPic2 from '../assets/IMG_2332.webp'
import flutePlayer from '../assets/IMG_2336.webp'

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
            <img src={johnAndPeter} alt="John and Peter duet" width="800" height="600"/>
          </picture>
        </div>
        <div>
          <picture>
            <img src={trioPic2} width="800" height="600" alt="trio of musicians"/>
          </picture>
        </div>
        <div>
          <picture>
            <img src={flutePlayer} width="800" height="600" alt="flute player"/>
          </picture>
        </div>
        <div>
          <picture>
            <img src={trioPic1} width="800" height="600" alt="trio of musicians"/>
          </picture>
        </div>
        <div>
          <picture>
            <img src={quintetPic1} width="800" height="600" alt="Quintet of musicians" />
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
