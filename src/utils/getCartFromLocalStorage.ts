import { calcItemsCount } from './calcItemsCount';
import { calcTotalPrice } from './calcTotalPrice';
import { calcTotalSale } from './calcTotalSale';

export function getCartFromLocalStorage() {
  const cart = localStorage.getItem('cart');

  const items = cart ? JSON.parse(cart) : [];
  const isEmptyCart = items.length === 0;
  const totalPrice = calcTotalPrice(items);
  const totalSale = calcTotalSale(items);
  const itemsCount = calcItemsCount(items);

  return {
    isEmptyCart,
    totalPrice,
    totalSale,
    items,
    itemsCount,
  };
}
