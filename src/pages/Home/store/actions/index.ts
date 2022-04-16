import { createAction } from 'typesafe-actions'
import { ProdutsActionTypes } from '../types'

/* SAGA ACTIONS */
const getProducts = createAction(ProdutsActionTypes.GET_PRODUCTS)()

/* REDUCER ACTIONS */
const setProductsToStore = createAction(
  ProdutsActionTypes.SET_PRODUCTS_TO_STORE,
  (products: Record<string, any>[]) => products
)()

export { getProducts, setProductsToStore }
