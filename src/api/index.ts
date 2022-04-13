const apiBase = '/api'

/* SERVICES */
const AUTH_SERVICE = `${apiBase}/auth`
const USER_SERVICE = `${apiBase}/user/user`

/* AUTH SERVICE */
const LOGIN = `${AUTH_SERVICE}/auth/login`
const VALIDATE_TOKEN = `${AUTH_SERVICE}/auth/validate`

/* USER_SERVICE */
const REGISTER_USER = `${USER_SERVICE}/users`
const GET_USER = `${USER_SERVICE}/users/:id`

export const URL = {
  LOGIN,
  GET_USER,
  REGISTER_USER,
  VALIDATE_TOKEN
}
