import { all, fork } from 'redux-saga/effects'

import ProductSaga from 'pages/Home/store/sagas'

export default function* rootSaga() {
  yield all([fork(ProductSaga)])
}
