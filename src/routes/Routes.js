import { Routes, Route } from 'react-router-dom'
import { ROUTE_NAMES } from './routeNames'
import { LoginContainer } from '../pages/Login/containers/LoginContainer/LoginContainer'

export const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_NAMES.LOGIN} element={<LoginContainer />}></Route>
      </Routes>
    </>
  )
}
