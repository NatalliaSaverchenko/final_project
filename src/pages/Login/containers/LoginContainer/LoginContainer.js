import { LoginForm } from '../../components/LoginForm/LoginForm'
import { useForm } from '../../../../hooks'
import { SIGN_IN_REQUEST, SIGN_UP_REQUEST } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { authSelector } from '../../selectors'
import { ROUTE_NAMES } from '../../../../routes/routeNames'
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm'
import Button from '../../components/ButtonWrapper/ButtonWrapper'
import { Grid } from '@material-ui/core'

export const LoginContainer = () => {
  const [isLoginformVisible, setIsLoginformVisible] = useState(false)
  const [isRegisterformVisible, setIsRegisterformVisible] = useState(false)

  const { message } = useSelector(authSelector)
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
      <Grid
        container
        spacing={8}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Button onClick={loginformActive}>Sign In</Button>
        </Grid>
        <Grid item xs={3}>
          <Button onClick={registerformActive}>Sign Up</Button>
        </Grid>
      </Grid>

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
      {message && <p>{message}</p>}
    </div>
  )
}
