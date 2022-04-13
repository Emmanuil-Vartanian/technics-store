import styled from 'styled-components'

export const ContainerMenu = styled.div`
  background: #edf2f6;
  border-radius: 0px 0px 8px 8px;
  height: fit-content;
  max-width: 310px;
  width: 100%;
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
