import { createAction } from 'typesafe-actions'
import { AuthActionTypes } from '../types'

const startAuth = createAction(AuthActionTypes.START_AUTH, params => params)()

const setUserAuthenticated = createAction(AuthActionTypes.AUTH_SUCCESS, payload => payload)()

const logOutUser = createAction(AuthActionTypes.LOG_OUT)()

const checkAuth = createAction(AuthActionTypes.CHECK_AUTH)()

const notFoundUserId = createAction(
  AuthActionTypes.NOT_FOUND_USER_ID,
  (status: boolean) => status
)()

const unauthorizedUserId = createAction(
  AuthActionTypes.UNAITHORIZED_USER_ID,
  (status: boolean) => status
)()

const unauthorizedUserEmail = createAction(
  AuthActionTypes.UNAITHORIZED_USER_EMAIL,
  (email: string) => email
)()

const resetPasswordByEmail = createAction(
  AuthActionTypes.RESET_PASSWORD_BY_EMAIL,
  (data: Record<string, any>) => data
)()

export {
  startAuth,
  setUserAuthenticated,
  logOutUser,
  checkAuth,
  notFoundUserId,
  unauthorizedUserId,
  unauthorizedUserEmail,
  resetPasswordByEmail
}
