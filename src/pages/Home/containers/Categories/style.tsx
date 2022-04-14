import styled from 'styled-components'

export const Menu = styled.div`
  max-width: 310px;
  width: 100%;
  height: fit-content;
  position: static;
`

export const ContainerMenu = styled.div`
  background: #edf2f6;
  border-radius: 0px 0px 8px 8px;
  position: relative;
  z-index: 1;
`

export const BackgroundMenu = styled.div`
  background: #2a5275;
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  opacity: 0.6;
  z-index: 1;
`

export const ProductList = styled.ul`
  > li {
    transition: all 0.25s;
    > a {
      padding: 8px 18px;
      display: flex;
      align-items: center;
      > svg {
        margin-right: 10px;
      }
    }
    :last-child {
      border-radius: 0px 0px 8px 8px;
    }
    :hover {
      background: #dae4ed;
    }
  }
`
