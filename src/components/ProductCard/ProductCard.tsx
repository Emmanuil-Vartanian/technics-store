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
  ButtonsBlock
} from './style'

import gyroscooters from 'assets/image/gyroscooters.png'
import MessageSvg from 'assets/svg/MessageSvg'
import LikeCardSvg from 'assets/svg/LikeCardSvg'
import CompareCardSvg from 'assets/svg/CompareCardSvg'
import Button from 'components/Button'
import CartSvg from 'assets/svg/CartSvg'

const ProductCard: React.FC = () => {
  return (
    <CardContainer>
      <div>
        <img src={gyroscooters} alt="Гироскутеры" />
        <InfoProduct>
          <NewProduct>Новинка</NewProduct>
          <HitProduct>Хит продаж</HitProduct>
        </InfoProduct>
      </div>

      <div>
        <TypeProduct>Сигвеи</TypeProduct>
        <TitleProduct>Гироскутер Smart Balance Well 6.5 Хип-Хоп (АКВАЗАЩИТА)</TitleProduct>
        <RatingProduct>
          <Rating name="half-rating-read" defaultValue={5} precision={0.5} readOnly />
          <MessageSvg />
          <div>(17)</div>
        </RatingProduct>
        <PriceBlock>
          <div>
            <OldPriceBlock>
              <OldPrice>5400₴</OldPrice>
              <Discount>-10%</Discount>
            </OldPriceBlock>
            <Price>4860₴</Price>
          </div>
          <SvgTools>
            <LikeCardSvg />
            <CompareCardSvg />
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
}

export default ProductCard
