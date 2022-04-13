import { createReducer } from 'typesafe-actions'
import {
  logOutUser,
  setUserAuthenticated,
  notFoundUserId,
  unauthorizedUserId,
  unauthorizedUserEmail
} from '../actions'
import { CurrentUser } from '../types'

export type AuthReducer = {
  isAuthenticated: boolean
  currentUser: Partial<CurrentUser>
  notFoundUserId: boolean
  unauthorizedUserId: boolean
  unauthorizedUserEmail: string
}

const initialState = {
  isAuthenticated: false,
  currentUser: {
    token: ''
  },
  notFoundUserId: false,
  unauthorizedUserId: false,
  unauthorizedUserEmail: ''
}

const authReducer = createReducer<AuthReducer>(initialState)
  .handleAction(setUserAuthenticated, (state, { payload }) => {
    return {
      isAuthenticated: true,
      currentUser: {
        ...state.currentUser,
        token: payload.jwtToken
      }
    }
  })
  .handleAction(logOutUser, () => {
    return {
      ...initialState
    }
  })
  .handleAction(notFoundUserId, (state, { payload }) => {
    return {
      ...state,
      notFoundUserId: payload
    }
  })
  .handleAction(unauthorizedUserId, (state, { payload }) => {
    return {
      ...state,
      unauthorizedUserId: payload
    }
  })
  .handleAction(unauthorizedUserEmail, (state, { payload }) => {
    return {
      ...state,
      unauthorizedUserEmail: payload
    }
  })

export default authReducer
