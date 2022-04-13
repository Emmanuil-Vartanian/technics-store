export interface AuthRequestParams {
  email: string
  password
}

export type CurrentUser = {
  authorities: string[]
  email: string
  token: string
  userId: number
}

export enum AuthActionTypes {
  START_AUTH = '@@auth-saga/START_AUTH',
  AUTH_SUCCESS = '@@auth-reducer/AUTH_SUCCESS',
  CHECK_AUTH = '@@auth-saga/CHECK_AUTH',
  LOG_OUT = '@@auth-reducer/LOG_OUT',
  NOT_FOUND_USER_ID = '@@auth-reducer/NOT_FOUND_USER_ID',
  UNAITHORIZED_USER_ID = '@@auth-reducer/UNAITHORIZED_USER_ID',
  UNAITHORIZED_USER_EMAIL = '@@auth-reducer/UNAITHORIZED_USER_EMAIL',
  RESET_PASSWORD_BY_EMAIL = '@@auth-saga/RESET_PASSWORD_BY_EMAIL'
}
