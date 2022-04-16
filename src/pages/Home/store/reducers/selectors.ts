import { createSelector } from 'reselect'

const getProducts = state => state.entities.products.data

export const getProductsSelector = createSelector([getProducts], data => data)
