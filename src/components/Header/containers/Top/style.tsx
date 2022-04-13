import styled from 'styled-components'
import InputField from 'components/FormFields/InputField'
import Button from 'components/Button'

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
