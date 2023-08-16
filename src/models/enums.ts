export enum ROUTER_PATH {
  MAIN = '/',
  HOME = 'home',
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
  // PRODUCTS = 'http://localhost:4200/products',
  USERS = 'https://fan-store-backend-elena-myone.onrender.com/users',
  // USERS = 'http://localhost:4200/users',
  USERS_LOGIN = 'https://fan-store-backend-elena-myone.onrender.com/users/login',
  // USERS_LOGIN = 'http://localhost:4200/users/login',
}

export enum STATUS {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export enum CATEGORIES {
  WANDS = 'wands',
  DECORATIONS = 'decorations',
  PILLOWS = 'pillows',
  SWEATERS = 'sweaters',
  SOUVENIRS = 'souvenirs',
  ROBES = 'robes',
  ALL = 'all',
}

export enum FACULTY {
  GRYFFINDOR = 'gryffindor',
  HUFFLEPUFF = 'hufflepuff',
  RAVENCLAW = 'ravenclaw',
  SLYTHERIN = 'slytherin',
  ALL = 'All',
}

export enum SORT {
  SALE = 'sale',
  RATE = 'rate',
  PRICE = 'price',
}

export enum ORDER {
  DESC = 'desc',
  ASC = 'asc',
}
