import { SagaIterator } from 'redux-saga'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { ProdutsActionTypes } from '../types'
import { getProductsAPI } from '../api'
import { setProductsToStore } from '../actions'
// import { clearEffectLoading, setEffectLoading } from 'containers/App/store/actions'
// import { EFFECT_LOADING } from 'constants/effectLoading'

function* getProductsSaga(): SagaIterator {
  try {
    // yield put(setEffectLoading(EFFECT_LOADING.MY_TASKS_PAGE))
    const result = yield call(getProductsAPI)
    console.log(result)
    if (result.status === 200) {
      yield put(setProductsToStore(result.data))
      // yield put(clearEffectLoading(EFFECT_LOADING.MY_TASKS_PAGE))
    }
  } catch (error) {
    const { response } = error
    // yield put(clearEffectLoading(EFFECT_LOADING.MY_TASKS_PAGE))
    console.error(ProdutsActionTypes.GET_PRODUCTS, response)
  }
}

export default function* root() {
  yield all([takeLatest(ProdutsActionTypes.GET_PRODUCTS, getProductsSaga)])
}
