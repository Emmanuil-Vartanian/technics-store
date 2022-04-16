// import { combineReducers } from 'redux'
import { createReducer } from 'typesafe-actions'
import { setProductsToStore } from '../actions'

const productsInitialState = {
  data: []
}

const productsReducer = createReducer(productsInitialState).handleAction(
  setProductsToStore,
  (state, { payload }) => {
    return {
      data: [...payload]
    }
  }
)

export default productsReducer
