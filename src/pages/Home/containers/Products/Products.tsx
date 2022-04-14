import React from 'react'

import { ProductContainer, Title } from './style'

import ArrowRightSvg from 'assets/svg/ArrowRightSvg'
import Link from 'components/Link'
import { ROUTES } from 'constants/routes'
import ProductCard from 'components/ProductCard'

const Products: React.FC = () => {
  return (
    <ProductContainer>
      <div>
        <Title>Хиты продаж</Title>
        <Link to={ROUTES.HOME_PAGE} color="#2A5275">
          Все товары <ArrowRightSvg />
        </Link>
      </div>
      <div>
        <ProductCard />
      </div>
    </ProductContainer>
  )
}

export default Products
