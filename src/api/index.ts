const apiBase = '/api'

/* SERVICES */
const AUTH_SERVICE = `${apiBase}/auth`
const USER_SERVICE = `${apiBase}/user/user`
const PRODUCT = `${apiBase}/product`

/* AUTH SERVICE */
const LOGIN = `${AUTH_SERVICE}/auth/login`
const VALIDATE_TOKEN = `${AUTH_SERVICE}/auth/validate`

/* USER_SERVICE */
const REGISTER_USER = `${USER_SERVICE}/users`
const GET_USER = `${USER_SERVICE}/users/:id`

/* PRODUCT_SERVICE */
const GET_PRODUCTS = `${PRODUCT}/list`

export const URL = {
  LOGIN,
  GET_USER,
  REGISTER_USER,
  VALIDATE_TOKEN,
  GET_PRODUCTS
}
