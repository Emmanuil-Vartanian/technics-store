import { createSelector } from 'reselect'

const loaderFromState = state => state.app.loading
const profileCurrencyState = state => state.app.currency
const profileLanguageState = state => state.app.language

export const loaderSelector = createSelector(loaderFromState, loading => loading)

export const profileCurrencySelector = createSelector([profileCurrencyState], value => value)

export const profileLanguageSelector = createSelector([profileLanguageState], value => value)
