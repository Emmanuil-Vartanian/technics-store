import React from 'react'
import Rating from '@mui/material/Rating'

import {
  CardContainer,
  InfoProduct,
  NewProduct,
  HitProduct,
  TypeProduct,
  TitleProduct,
  RatingProduct,
  PriceBlock,
  Price,
  OldPrice,
  Discount,
  OldPriceBlock,
  SvgTools,
  ButtonsBlock,
  CardBlock
} from './style'

import MessageSvg from 'assets/svg/MessageSvg'
import Button from 'components/Button'
import CartSvg from 'assets/svg/CartSvg'
import CompareSvg from 'assets/svg/CompareSvg'
import LikeSvg from 'assets/svg/LikeSvg'

interface ProductCardProps {
  products: Record<string, any>
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  return (
    <CardBlock>
      {products.map(
        ({ id, title, type, image, newest, hit, price, oldPrice, discountInPercent }) => (
          <CardContainer to={'#'} key={id}>
            <div>
              <img src={image} alt="Гироскутеры" />
              <InfoProduct>
                {newest && <NewProduct>Новинка</NewProduct>}
                {hit && <HitProduct>Хит продаж</HitProduct>}
              </InfoProduct>
            </div>

            <div>
              <TypeProduct>{type}</TypeProduct>
              <TitleProduct>{title}</TitleProduct>
              <RatingProduct>
                <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
                <MessageSvg />
                <div>(17)</div>
              </RatingProduct>
              <PriceBlock>
                <div>
                  <OldPriceBlock>
                    <OldPrice>{oldPrice}₴</OldPrice>
                    <Discount>-{discountInPercent}%</Discount>
                  </OldPriceBlock>
                  <Price>{price}₴</Price>
                </div>
                <SvgTools>
                  <LikeSvg />
                  <CompareSvg />
                </SvgTools>
              </PriceBlock>
              <ButtonsBlock>
                <Button variant="outlined">Купить в 1 клик</Button>
                <Button variant="contained">
                  <CartSvg />
                </Button>
              </ButtonsBlock>
            </div>
          </CardContainer>
        )
      )}
    </CardBlock>
  )
}

export default ProductCard
