export interface IData {
  products: ProductsData[];
}

export interface ProductsData {
  id: number;
  category: string;
  faculty: string;
  name: string;
  image: string;
  length?: string;
  core?: string;
  wood?: string;
  description: string;
  price: number;
  rate: number;
  sale: number;
  newProduct: boolean;
  bestseller: boolean;
}

export interface CartData extends ProductsData {
  count: number;
}

export interface UserData {
  id?: number;
  name: string;
  email: string;
  password?: string;
  isSignUp?: boolean;
}
