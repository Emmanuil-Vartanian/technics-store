import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import { SagaIterator } from 'redux-saga'
import { push } from 'connected-react-router'
import { checkAuthAPI, doLoginAPI } from '../api'
import { AuthActionTypes } from '../types'
import {
  checkAuth,
  logOutUser,
  setUserAuthenticated,
  notFoundUserId,
  unauthorizedUserId,
  unauthorizedUserEmail
} from '../actions'
import * as Routes from 'constants/routes'
import { getCurrentUserTokenSelector } from '../reducers/selectors'
import { clearEffectLoading, setEffectLoading } from 'containers/App/store/actions'
import { EFFECT_LOADING } from 'constants/effectLoading'

export function* doLoginSaga(action): SagaIterator {
  const { payload } = action
  try {
    const result = yield call(doLoginAPI, payload)
    if (result.status === 200) {
      yield put(setUserAuthenticated(result.data))
      yield put(checkAuth())
    }
  } catch (error) {
    const { response } = error
    console.error(AuthActionTypes.START_AUTH, response)
    if (response.status === 404) {
      yield put(notFoundUserId(true))
    } else if (response.status === 401) {
      yield put(unauthorizedUserId(true))
      yield put(unauthorizedUserEmail(payload.email))
    }
  }
}

export function* chekAuthSaga() {
  try {
    const jwtToken = yield select(getCurrentUserTokenSelector)
    yield put(setEffectLoading('ProfileId'))

    const { data } = yield call(checkAuthAPI, jwtToken)

    // yield put(setCurrentUser(data))
  } catch (error) {
    const { response } = error
    yield put(logOutUser())
    yield put(clearEffectLoading('ProfileId'))
    // TODO: set error response to redux
    console.error(AuthActionTypes.CHECK_AUTH, response)
  }
}

export default function* root() {
  yield all([
    takeLatest(AuthActionTypes.START_AUTH, doLoginSaga),
    takeLatest(AuthActionTypes.CHECK_AUTH, chekAuthSaga)
  ])
}
