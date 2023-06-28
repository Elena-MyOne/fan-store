export enum ROUTER_PATH {
  HOME = '/',
  PRODUCT = '/:id',
  CART = 'cart',
  CHECKOUT = 'cart/checkout',
  LOGIN = 'login',
  SIGNUP = 'signup',
  PROFILE = 'profile',
  LOGOUT = 'logout',
  BILLING = 'billing',
  CHANGE_PASSWORD = 'change-password',
  ACCOUNT = 'account',
  DELETE_ACCOUNT = 'delete-account',
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
