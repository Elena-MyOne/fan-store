import { CartData } from '../models/interface';

export function calcItemsCount(items: CartData[]) {
  return items.reduce((acc: number, currentValue) => acc + currentValue.count, 0);
}
