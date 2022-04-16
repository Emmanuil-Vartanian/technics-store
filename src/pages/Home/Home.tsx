import React from 'react'

import { CategoriesContainer } from './style'

import Categories from './containers/Categories'
import Slider from './containers/Slider'
import ProductSection from './containers/ProductSection'
import gyroscooters from 'assets/image/gyroscooters.png'

const Home: React.FC = () => {
  const productList = [
    {
      id: 1,
      title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: true,
      hit: true,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    },
    {
      id: 2,
      title: 'Гироскутер Smart Balance Premium 10.5 Зелёный граффити',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: false,
      hit: true,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    },
    {
      id: 3,
      title: 'Гироскутер Smart Balance',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: false,
      hit: false,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    },
    {
      id: 4,
      title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: true,
      hit: false,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    }
  ]

  const productList1 = [
    {
      id: 1,
      title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: true,
      hit: true,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    },
    {
      id: 2,
      title: 'Гироскутер Smart Balance Premium 10.5 Зелёный граффити',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: false,
      hit: true,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    }
  ]

  return (
    <div>
      <CategoriesContainer>
        <Categories />
        <Slider />
      </CategoriesContainer>
      <ProductSection products={productList} title="Хиты продаж" />
      <ProductSection products={productList1} title="Новинки" />
    </div>
  )
}

export default Home
