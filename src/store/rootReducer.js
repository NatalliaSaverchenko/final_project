import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { createBlacklistFilter } from 'redux-persist-transform-filter'

import { combineReducers } from 'redux'
import { authReducer } from '../pages/Login/reducers'

const authBlackListedFields = createBlacklistFilter('auth', [
  'isLoading',
  'errors',
])

const persistConfig = {
  key: 'root',
  storage,
  whiteList: ['auth'],
  transforms: [authBlackListedFields],
}
const rootReducer = combineReducers({
  auth: authReducer,
})

export default persistReducer(persistConfig, rootReducer)
