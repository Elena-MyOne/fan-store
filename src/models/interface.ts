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
}

export interface CartData extends ProductsData {
  count: number;
}

export interface paymentInfoData {
  cardNumber: string;
  holderName: string;
  expirationDate: string;
  cvc: string;
  isCardNumberError: boolean;
  isHolderNameError: boolean;
  isExpirationDateError: boolean;
  isCvcError: boolean;
  cardNumberSuccess: boolean;
  holderNameSuccess: boolean;
  expirationDateSuccess: boolean;
  cvcSuccess: boolean;
  isSubmit: boolean;
}
