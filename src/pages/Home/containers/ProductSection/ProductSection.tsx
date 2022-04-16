import React from 'react'

import { ProductContainer, Title } from './style'

import ArrowRightSvg from 'assets/svg/ArrowRightSvg'
import Link from 'components/Link'
import { ROUTES } from 'constants/routes'
import ProductCard from 'components/ProductCard'

interface ProductSectionProps {
  title: string
  products: Record<string, any>
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  return (
    <ProductContainer>
      <div>
        <Title>{title}</Title>
        <Link to={ROUTES.HOME_PAGE} color="#2A5275">
          Все товары <ArrowRightSvg />
        </Link>
      </div>
      <ProductCard products={products} />
    </ProductContainer>
  )
}

export default ProductSection
