import React, { useState } from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import ShoppingCart from './ShoppingCart/ShoppingCart';

const Cart = () => {
  const [isEmptyCart, setEmptyCart] = useState(false);
  return (
    <div className="cart flex justify-center items-center flex-col gap-6 h-full">
      {isEmptyCart ? <EmptyCart /> : <ShoppingCart />}
    </div>
  );
};

export default Cart;
