import { createSelector } from 'reselect'

const getIsAuthenticatedState = state => state.auth.isAuthenticated
const getCurrentUserToken = state => state.auth.currentUser.token
const getCurrentUserId = state => state.auth.currentUser.userId
const notFoundUserId = state => state.auth.notFoundUserId
const unauthorizedUserId = state => state.auth.unauthorizedUserId
const unauthorizedUserEmail = state => state.auth.unauthorizedUserEmail
const getCurrenAuthorities = state => state.auth.currentUser.authorities

export const getIsAuthenticatedSelector = createSelector([getIsAuthenticatedState], value => value)

export const getCurrentUserTokenSelector = createSelector([getCurrentUserToken], value => value)

export const getCurrentUserIdSelector = createSelector([getCurrentUserId], value => value)

export const notFoundUserIdSelector = createSelector([notFoundUserId], value => value)

export const unauthorizedUserIdSelector = createSelector([unauthorizedUserId], value => value)

export const unauthorizedUserEmailSelector = createSelector([unauthorizedUserEmail], value => value)

export const getCurrenAuthoritiesSelector = createSelector([getCurrenAuthorities], value => value)
