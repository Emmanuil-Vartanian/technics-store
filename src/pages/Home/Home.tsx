import React from 'react'

import { CategoriesContainer } from './style'

import Categories from './containers/Categories'
import Slider from './containers/Slider'
import Products from './containers/Products'

const Home: React.FC = () => {
  return (
    <div>
      <CategoriesContainer>
        <Categories />
        <Slider />
      </CategoriesContainer>
      <Products />
    </div>
  )
}

export default Home
