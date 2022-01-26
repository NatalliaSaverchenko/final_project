import { put, call, takeEvery } from 'redux-saga/effects'
import { REQUEST_POSTFIXES } from '../constants/requestPostfixes'
import { createActionWhithPostfix } from '../utils/createActionWithPostfix'
import { isApiCallAction } from '../utils/isApiCallAction'
import { apiCallsMapping } from './apiCallMapping'

function* watchRequestWorker(action) {
  try {
    const foundApiCall = apiCallsMapping(action)
    const response = yield call(foundApiCall, action.payload)
    yield put(
      createActionWhithPostfix(action, REQUEST_POSTFIXES.SUCCESS, response.data)
    )
  } catch (error) {
    yield put(
      createActionWhithPostfix(action, REQUEST_POSTFIXES.FAIL, error.message)
    )
  }
}
export function* watchRequest() {
  yield takeEvery(isApiCallAction, watchRequestWorker)
}
