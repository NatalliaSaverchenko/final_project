import { LoginForm } from '../../components/LoginForm/LoginForm'

import { useForm } from '../../../../hooks'
import { SIGN_IN_REQUEST } from '../../actions'
import { useDispatch } from 'react-redux'

export const LoginContainer = () => {
  const dispatch = useDispatch()
  const { formValues, handleChange, handleReset } = useForm({
    email: '',
    password: '',
  })
  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(SIGN_IN_REQUEST(formValues))
  }
  return (
    <LoginForm
      formData={formValues}
      handleFormChange={handleChange}
      handleSubmit={handleLogin}
    />
  )
}
