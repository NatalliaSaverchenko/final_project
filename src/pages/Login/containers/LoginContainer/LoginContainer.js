import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useForm } from '../../../../hooks'
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { authSelector } from '../../selectors'
import { ROUTE_NAMES } from '../../../../routes/routeNames'
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm'

export const LoginContainer = () => {
  const [isLoginformVisible, setIsLoginformVisible] = useState(false)
  const [isRegisterformVisible, setIsRegisterformVisible] = useState(false)

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
  const handleSignUp = (signData) => {
    dispatch(SIGN_UP_REQUEST(signData))
  }
  const loginformActive = () => {
    setIsLoginformVisible(!isLoginformVisible)
    setIsRegisterformVisible(false)
  }
  const registerformActive = () => {
    setIsRegisterformVisible(!isRegisterformVisible)
    setIsLoginformVisible(false)
  }
  useEffect(() => {
    if (isAuth) {
      navigate(ROUTE_NAMES.PRODUCTS)
    }
  }, [isAuth, navigate])

  return (
    <div>
      <button onClick={loginformActive}>Sign In</button>
      <button onClick={registerformActive}>Sign Up</button>
      {isLoginformVisible && (
        <LoginForm
          formData={formValues}
          handleFormChange={handleChange}
          handleSubmit={handleLogin}
        />
      )}
      {isRegisterformVisible && (
        <RegistrationForm handleSignUp={handleSignUp} />
      )}
    </div>
  )
}
