import React, { useState } from 'react'

import { Menu, ContainerMenu, BackgroundMenu, ProductList } from './style'

import Link from 'components/Link'
import { ROUTES } from 'constants/routes'
import GyroscooterSvg from 'assets/svg/GyroscooterSvg'
import ElectricScooterSvg from 'assets/svg/ElectricScooterSvg'
import MonowheelSvg from 'assets/svg/MonowheelSvg'

const Categories: React.FC = () => {
  const [backgroundMenu, setBackgroundMenu] = useState(false)

  const handleBackgroundMenuOpen = () => {
    setBackgroundMenu(true)
  }

  const handleBackgroundMenuClose = () => {
    setBackgroundMenu(false)
  }

  return (
    <Menu>
      {backgroundMenu && <BackgroundMenu />}
      <ContainerMenu
        onMouseEnter={handleBackgroundMenuOpen}
        onMouseLeave={handleBackgroundMenuClose}
      >
        <ProductList>
          <li>
            <Link to={ROUTES.HOME_PAGE}>
              <GyroscooterSvg />
              <span>Гироскутеры</span>
            </Link>
          </li>
          <li>
            <Link to={ROUTES.HOME_PAGE}>
              <ElectricScooterSvg />
              <span>Электросамокаты</span>
            </Link>
          </li>
          <li>
            <Link to={ROUTES.HOME_PAGE}>
              <MonowheelSvg />
              <span>Моноколеса</span>
            </Link>
          </li>
        </ProductList>
      </ContainerMenu>
    </Menu>
  )
}

export default Categories
