import React from 'react'
import ReactDOM from 'react-dom'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import App from './App'

import './index.css'

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
