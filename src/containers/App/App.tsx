import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import store from 'store'
import Router from 'router'
import { Main } from './style'

import Header from 'components/Header'

const App: React.FC = () => {
  return (
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <Header />
        <Main>
          <Router />
        </Main>
      </PersistGate>
    </Provider>
  )
}

export default App
