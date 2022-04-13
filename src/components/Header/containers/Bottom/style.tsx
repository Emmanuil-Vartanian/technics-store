import styled from 'styled-components'

export const BackgroundContainer = styled.div`
  background: #0e1821;
  color: white;
  > div {
    justify-content: start;
    padding: 0px 20px;
  }
`

export const Catalog = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  background: #243c53;
  padding: 14px 20px;
  max-width: 270px;
  width: 100%;
  > span {
    margin: 0px 0px 2px 14px;
  }
`

export const InfoLink = styled.ul`
  display: flex;
  align-items: center;
  > li {
    padding: 0px 16px 0px 24px;
    cursor: pointer;
    :hover {
      color: #2a5275;
    }
  }
`
