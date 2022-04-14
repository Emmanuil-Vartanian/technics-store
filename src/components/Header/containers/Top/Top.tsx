import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import InputAdornment from '@mui/material/InputAdornment'
import { Form } from 'react-final-form'

import {
  Container,
  BlockInfo,
  Schedule,
  InputFieldStyled,
  ButtonStyled,
  LinkStyled,
  Count
} from './style'

import logo from 'assets/image/logo.png'
import CompareSvg from 'assets/svg/CompareSvg'
import EyeSvg from 'assets/svg/EyeSvg'
import LikeSvg from 'assets/svg/LikeSvg'
import CartSvg from 'assets/svg/CartSvg'
import { ROUTES } from 'constants/routes'
import Link from 'components/Link'

const Top: React.FC = () => {
  const handleFormSubmit = () => {
    console.log('first')
  }

  return (
    <Form
      onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <form id={'object-filters-form'} onSubmit={handleSubmit}>
          <Container>
            <Link to={ROUTES.HOME_PAGE}>
              <img src={logo} alt="logo" />
            </Link>

            <BlockInfo>
              <a href="tel:000 000 00 00">+380 00 000 00 00</a>
              <a href="tel:000 000 00 00">+380 00 000 00 00</a>
              <Schedule>Пн-вс: с 10:00 до 21:00</Schedule>

              <InputFieldStyled
                name={'search'}
                placeholder={'Поиск'}
                variant="standard"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
              <LinkStyled to={ROUTES.HOME_PAGE}>
                <EyeSvg />
                <Count>20</Count>
              </LinkStyled>
              <LinkStyled to={ROUTES.HOME_PAGE}>
                <LikeSvg />
                <Count>20</Count>
              </LinkStyled>
              <LinkStyled to={ROUTES.HOME_PAGE}>
                <CompareSvg />
                <Count>20</Count>
              </LinkStyled>
              <LinkStyled to={ROUTES.HOME_PAGE}>
                <CartSvg />
                <Count>20</Count>
              </LinkStyled>

              <ButtonStyled variant="contained">Войти</ButtonStyled>
            </BlockInfo>
          </Container>
        </form>
      )}
    />
  )
}

export default Top
