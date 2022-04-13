import React from 'react'

import MenuSvg from 'assets/svg/MenuSvg'
import { Container } from '../Top/style'
import { BackgroundContainer, Catalog, InfoLink } from './style'
import Link from 'components/Link'

const Bottom: React.FC = () => {
  return (
    <BackgroundContainer>
      <Container>
        <Catalog>
          <MenuSvg />
          <span>Каталог товаров</span>
        </Catalog>
        <InfoLink>
          <li>
            <Link to={'/'} color="#fff">
              О компании
            </Link>
          </li>
          <li>
            <Link to={'/'} color="#fff">
              Акции
            </Link>
          </li>
          <li>
            <Link to={'/'} color="#fff">
              Рассрочка 0|0|18
            </Link>
          </li>
          <li>
            <Link to={'/'} color="#fff">
              Сервис и гарантия
            </Link>
          </li>
          <li>
            <Link to={'/'} color="#fff">
              Опт/дропшиппинг
            </Link>
          </li>
          <li>
            <Link to={'/'} color="#fff">
              Контакты
            </Link>
          </li>
        </InfoLink>
      </Container>
    </BackgroundContainer>
  )
}

export default Bottom
