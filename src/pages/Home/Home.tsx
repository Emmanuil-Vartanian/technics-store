import React from 'react'

import { Container } from './style'

import Categories from './containers/Categories'
import Slider from './containers/Slider'

const Home: React.FC = () => {
  return (
    <Container>
      <Categories />
      <Slider />
    </Container>
  )
}

export default Home
