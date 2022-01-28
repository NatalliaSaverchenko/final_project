import { LoginForm } from '../../components/LoginForm/LoginForm'

import { useForm } from '../../../../hooks'
import { SIGN_IN_REQUEST } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { authSelector } from '../../selectors'
import { ROUTE_NAMES } from '../../../../routes/routeNames'

export const LoginContainer = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector(authSelector)
  const { formValues, handleChange, handleReset } = useForm({
    email: '',
    password: '',
  })
  const navigate = useNavigate()
  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(SIGN_IN_REQUEST(formValues))
  }

  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.PRODUCTS)
    }
  }, [isAuth, navigate])

  return (
    <LoginForm
      formData={formValues}
      handleFormChange={handleChange}
      handleSubmit={handleLogin}
    />
  )
}
