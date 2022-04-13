import React from 'react'
import Carousel from 'react-elastic-carousel'

import { ContainerCarousel } from './style'

import slider1 from 'assets/image/slider.png'

const Slider = () => {
  // const breakPoints = [
  //   { width: 320, itemsToShow: 1, itemsToScroll: 1 },
  //   { width: 600, itemsToShow: 2, itemsToScroll: 2 },
  //   { width: 900, itemsToShow: 3, itemsToScroll: 3 },
  //   { width: 1100, itemsToShow: 4, itemsToScroll: 4 }
  // ]

  const images = [
    { id: 1, src: slider1 },
    { id: 2, src: slider1 },
    { id: 3, src: slider1 },
    { id: 4, src: slider1 }
  ]

  return (
    <ContainerCarousel>
      <Carousel enableAutoPlay showArrows={false}>
        {images.map(({ id, src }) => (
          <img key={id} src={src} alt="slider" />
        ))}
      </Carousel>
    </ContainerCarousel>
  )
}

export default Slider
