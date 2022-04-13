import Button, { ButtonProps } from '@mui/material/Button'
import styled from 'styled-components'

export const ButtonStyled = styled<ButtonProps>(Button)`
  background: #4878a6 !important;
  text-transform: capitalize !important;
  padding: 10px 16px !important;
  font-size: 16px !important;
  :hover {
    background: #2a5275 !important;
  }
`
