import { ROUTE_NAMES } from '../../routes/routeNames'

export const NAVIGATION = {
  PUBLIC: [{ title: 'Login', path: ROUTE_NAMES.LOGIN }],
  PRIVATE: [
    { title: 'Products', path: ROUTE_NAMES.PRODUCTS },
    { title: 'ProductsDetail', path: ROUTE_NAMES.PRODUCTS_DETAIL },
  ],
}
