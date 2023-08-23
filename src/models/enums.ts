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
  FAVORITE = 'favorite',
  NOTFOUND = '*',
}

export enum URL {
  PRODUCTS = 'https://fan-store-backend-elena-myone.onrender.com/products',
  // PRODUCTS = '/products?page=1&limit=50&sort=rate&order=5products',
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
  TRUNKS = 'trunks',
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
  DEFAULT = '',
}

export enum ORDER {
  DESC = 'desc',
  ASC = 'asc',
  FIVE = '5',
  FOUR = '4',
  THREE = '3',
  TWO = '2',
  ONE = '1',
  SALE_30 = '30-20',
  SALE_15 = '15-5',
  PRICE_25 = '25-40',
  PRICE_40 = '40-70',
  PRICE_70 = '70-100',
  PRICE_100 = '100',
  DEFAULT = '',
}

export enum SALE {
  TRUE = 'true',
  DEFAULT = '',
}
