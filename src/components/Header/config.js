import { ROUTE_NAMES } from '../../routes/routeNames'

export const NAVIGATION = {
  PUBLIC: [
    { title: 'Welcome to our online shop', path: ROUTE_NAMES.HOME },
    { title: 'Login or Sign up', path: ROUTE_NAMES.LOGIN },
  ],
  PRIVATE: [
    { title: 'Products', path: ROUTE_NAMES.PRODUCTS },
    { title: 'ProductsDetail', path: ROUTE_NAMES.PRODUCTS_DETAIL },
  ],
}
