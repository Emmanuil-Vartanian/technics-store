import React from 'react'

import { ProductContainer, Title } from './style'

import ArrowRightSvg from 'assets/svg/ArrowRightSvg'
import Link from 'components/Link'
import { ROUTES } from 'constants/routes'
import ProductCard from 'components/ProductCard'
import gyroscooters from 'assets/image/gyroscooters.png'

const Products: React.FC = () => {
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
      title: 'Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)',
      type: 'Сигвеи',
      image: gyroscooters,
      newest: true,
      hit: false,
      price: 4860,
      oldPrice: 5400,
      discountInPercent: 10
    }
  ]

  return (
    <ProductContainer>
      <div>
        <Title>Хиты продаж</Title>
        <Link to={ROUTES.HOME_PAGE} color="#2A5275">
          Все товары <ArrowRightSvg />
        </Link>
      </div>
      <ProductCard products={productList} />
    </ProductContainer>
  )
}

export default Products
