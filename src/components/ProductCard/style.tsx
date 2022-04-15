import styled from 'styled-components'

export const CardBlock = styled.div`
  display: flex;
  > div:first-child {
    border-radius: 8px 0px 0px 8px;
  }
  > div:last-child {
    border-radius: 0px 8px 8px 0px;
  }
`

export const CardContainer = styled.div`
  background: #ffffff;
  border: 1px solid #eaeaf0;
  box-sizing: border-box;
  max-width: 326px;
  width: 100%;
  padding: 20px;
  margin-top: 40px;
  > div:first-child {
    position: relative;
  }
`

export const InfoProduct = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  text-align: -webkit-right;
  > div {
    border-radius: 4px;
    padding: 5px 16px;
    width: fit-content;
    color: #edf2f6;
  }
`

export const NewProduct = styled.div`
  background: #48a69b;
  margin-bottom: 10px;
`

export const HitProduct = styled.div`
  background: #d73838;
`

export const TypeProduct = styled.div`
  color: #838688;
`

export const TitleProduct = styled.div`
  color: #070c11;
  font-size: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 10px 0px 20px;
  height: 72px;
`

export const RatingProduct = styled.div`
  display: flex;
  > svg {
    margin: 0px 5px 0px 10px;
  }
`

export const PriceBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin: 20px 0px;
`

export const OldPriceBlock = styled.div`
  display: flex;
  align-items: center;
`

export const OldPrice = styled.span`
  color: #838688;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  text-decoration: line-through;
  margin-right: 8px;
`

export const Discount = styled.span`
  font-size: 13px;
  background: red;
  color: #fff;
  border-radius: 7px;
  padding: 0px 5px 1px;
`

export const Price = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 130%;
  color: #070c11;
  margin-top: 3px;
`

export const SvgTools = styled.div`
  display: flex;
  > svg,
  div {
    border: 1px solid #c8cacb;
    border-radius: 4px;
    cursor: pointer;
    path:first-child {
      fill: #c8cacb;
    }
  }
  > div {
    margin-right: 10px;
  }
  > svg:last-child:hover > path {
    fill: #2a5275;
  }
  > div:hover > svg {
    width: 24px;
    > path:first-child {
      fill: #fff;
    }
    > path:last-child {
      fill: red;
    }
  }
`

export const ButtonsBlock = styled.div`
  display: flex;
  align-items: center;
  > button:first-child {
    background: #fff !important;
    font-weight: 700 !important;
    border: 1px solid #4878a6 !important;
    max-width: 228px;
    width: 100%;
    margin-right: 10px;
    color: #4878a6 !important;
    :hover {
      background: #4878a6 !important;
      color: #fff !important;
    }
  }
  > button:last-child {
    padding: 0px !important;
    min-width: auto;
    path {
      fill: #fff;
    }
  }
`
