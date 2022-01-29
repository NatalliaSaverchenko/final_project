import * as actions from '../actions'
import { handleActions } from 'redux-actions'
import { LOCAL_STORAGE_KEYS } from '../../../constants/localStorageKeys'

const defaultState = {
  isLoading: false,
  errors: null,
  userData: {},
  accessToken: null,
  isAuth: false,
  message: '',
}

export const authReducer = handleActions(
  {
    [actions.SIGN_IN_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      errors: null,
    }),
    [actions.SIGN_IN_SUCCESS]: (state, { payload }) => {
      const { accessToken, ...userData } = payload.response

      localStorage.setItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN, accessToken)

      return {
        ...state,
        isLoading: false,
        isAuth: true,
        userData,
        accessToken,
      }
    },
    [actions.SIGN_IN_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
    [actions.SIGN_UP_REQUEST]: (state) => ({
      ...state,
      isLoading: true,
      errors: null,
    }),
    [actions.SIGN_UP_SUCCESS]: (state, { payload }) => {
      const { message } = payload.response
      alert(message)

      return {
        ...state,
        isLoading: false,
        message,
      }
    },
    [actions.SIGN_UP_FAIL]: (state, { payload }) => ({
      ...state,
      isLoading: false,
      errors: payload.response,
    }),
  },
  defaultState
)
