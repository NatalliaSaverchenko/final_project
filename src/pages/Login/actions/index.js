import { createAction } from 'redux-actions'

export const SIGN_IN_REQUEST = createAction('SIGN_IN_REQUEST')
export const SIGN_IN_SUCCESS = createAction('SIGN_IN_SUCCESS')
export const SIGN_IN_FAIL = createAction('SIGN_IN_FAIL')

export const SIGN_UP_REQUEST = createAction('SIGN_UP_REQUEST')
export const SIGN_UP_SUCCESS = createAction('SIGN_UP_SUCCESS')
export const SIGN_UP_FAIL = createAction('SIGN_UP_FAIL')
