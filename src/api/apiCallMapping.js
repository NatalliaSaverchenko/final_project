import * as loginActions from '../pages/Login/actions'
import AuthService from '../services/authService'

export const apiCallsMapping = (action) => {
  const actionCallMap = {
    [loginActions.SIGN_IN_REQUEST]: AuthService.signIn,
  }

  //   если забыли добавить request
  if (!actionCallMap[action.type]) {
    throw new Error('Not Mapped Action')
  }
  return actionCallMap[action.type]
}
