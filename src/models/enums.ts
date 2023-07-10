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
  PRODUCTS = 'https://fan-store-backend-elena-myone.onrender.com/products',
  USERS = 'https://fan-store-backend-elena-myone.onrender.com/users',
  USERS_LOGIN = 'https://fan-store-backend-elena-myone.onrender.com/users/login',
}

export enum STATUS {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
