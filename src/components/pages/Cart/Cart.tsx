import React from 'react';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = () => {
  return (
    <div className="empty flex justify-center items-center flex-col gap-6 h-full">
      <EmptyCart />
    </div>
  );
};

export default Cart;
