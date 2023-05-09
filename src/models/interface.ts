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
}
