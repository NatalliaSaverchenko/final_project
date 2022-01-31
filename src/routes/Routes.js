import { Routes, Route } from 'react-router-dom'
import { ROUTE_NAMES } from './routeNames'
import { LoginContainer } from '../pages/Login/containers/LoginContainer/LoginContainer'
import { PrivateRoute } from './PrivateRoute'

import { ProductsContainer } from '../pages/Products/ProductsContainer/ProductsContainer'
import { ProductsDetailContainer } from '../pages/ProductsDetail/ProductsDetailContainer/ProductsDetailContainer'

export const RouterView = () => {
  return (
    <>
      <Routes>
        <Route path={ROUTE_NAMES.LOGIN} element={<LoginContainer />} />
        <Route
          path={ROUTE_NAMES.PRODUCTS}
          element={
            <PrivateRoute>
              <ProductsContainer />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTE_NAMES.PRODUCTS_DETAIL}
          element={
            <PrivateRoute>
              <ProductsDetailContainer />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}
