import { CartData } from '../models/interface';

export function calcTotalSale(items: CartData[]) {
  return (
    Math.round(
      items.reduce(
        (acc, currentValue) =>
          acc + (currentValue.price * currentValue.sale * currentValue.count) / 100,
        0
      ) * 100
    ) / 100
  );
}
