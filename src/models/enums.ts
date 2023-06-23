export enum ROUTER_PATH {
  HOME = '/',
  PRODUCT = '/:id',
  CART = 'cart',
  CHECKOUT = 'cart/checkout',
  LOGIN = 'login',
  LOGOUT = 'logout',
  SIGNUP = 'signup',
  PROFILE = 'profile',
  NOTFOUND = '*',
}

export enum URL {
  PRODUCTS = 'http://localhost:4200/products',
  USERS = 'http://localhost:4200/users',
}

export enum STATUS {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
