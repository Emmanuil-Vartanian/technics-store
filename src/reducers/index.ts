import { combineReducers } from 'redux'
import { connectRouter, RouterState } from 'connected-react-router'
import { History } from 'history'
import { persistReducer, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import appReducer, { StateToProps as AppInitialStateType } from 'containers/App/store/reducers'
import productsReducer from 'pages/Home/store/reducers'

export interface State {
  // auth: AuthReducer
  // register: RegisterReducer
  router: RouterState
  app: AppInitialStateType
  entities: Record<string, any>
}

const entitiesReducer = combineReducers({
  products: productsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
  // whitelist: ["auth", "register"],
}

const createRootReducer = (history: History): any =>
  persistCombineReducers<State>(persistConfig, {
    // auth: authReducer,
    // register: registerReducer,
    router: connectRouter(history),
    app: appReducer,
    entities: entitiesReducer
  })

export default createRootReducer
