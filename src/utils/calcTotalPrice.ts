import { CartData } from '../models/interface';

export function calcTotalPrice(items: CartData[]) {
  return (
    Math.round(
      items.reduce(
        (acc: number, currentValue) =>
          acc + (currentValue.price * (100 - currentValue.sale) * currentValue.count) / 100,
        0
      ) * 100
    ) / 100
  );
}
