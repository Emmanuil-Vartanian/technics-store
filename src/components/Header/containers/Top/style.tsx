import styled from 'styled-components'
import InputField from 'components/FormFields/InputField'
import Button from 'components/Button'
import Link from 'components/Link'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1260px;
  padding: 15px 20px;
  margin: 0px auto;
`

export const BlockInfo = styled.div`
  display: flex;
  align-items: center;
  > a {
    color: #070c11;
    text-decoration: none;
    :hover {
      color: #2a5275;
    }
  }
  > a:nth-child(2) {
    margin: 0px 20px;
  }
  > svg {
    cursor: pointer;
  }
`

export const Schedule = styled.div`
  color: #838688;
  margin-right: 58px;
`

export const InputFieldStyled = styled(InputField)`
  width: 100px;
  margin-right: 8px;
`

export const ButtonStyled = styled(Button)`
  margin-left: 20px !important;
  padding: 10px 26px !important;
`

export const LinkStyled = styled(Link)`
  position: relative;
`

export const Count = styled.span`
  position: absolute;
  top: -2px;
  left: 50%;
  font-size: 14px;
  color: #ffffff;
  background: #4878a6;
  border-radius: 64px;
  justify-content: center;
  align-items: center;
  padding: 2px 6px 4px;
`
