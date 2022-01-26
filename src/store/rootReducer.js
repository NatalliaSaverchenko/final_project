import { combineReducers } from 'redux'
import { authReducer } from '../pages/Login/reducers'

export const rootReducer = combineReducers({
  auth: authReducer,
})
