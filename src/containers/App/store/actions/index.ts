import { ActionType, createAction } from 'typesafe-actions'
import { ErrorType } from '../../../../types'

import { ActionTypes } from '../types'

interface SetErrorParam {
  error: ErrorType
}

const setError = createAction(ActionTypes.SET_ERROR, (error: ErrorType) => ({
  error
}))<SetErrorParam>()

interface SetEffectLoading {
  name: string
}

const setEffectLoading = createAction(ActionTypes.SET_EFFECT_LOADING, (name: string) => ({
  name
}))<SetEffectLoading>()

const clearEffectLoading = createAction(ActionTypes.CLEAR_EFFECT_LOADING, (name: string) => ({
  name
}))<SetEffectLoading>()

const profileCurrency = createAction(ActionTypes.PROFILE_CIRRENCY, (currency: string) => ({
  currency
}))()

const profileLanguage = createAction(ActionTypes.PROFILE_LANGUAGE, (language: string) => ({
  language
}))()

export const actions = {
  setError,
  setEffectLoading,
  clearEffectLoading,
  profileCurrency,
  profileLanguage
}

export type AppActions = ActionType<typeof actions>

export { setError, setEffectLoading, clearEffectLoading, profileCurrency, profileLanguage }
