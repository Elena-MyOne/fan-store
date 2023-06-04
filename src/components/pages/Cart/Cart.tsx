import React, { useState } from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';

const Cart = () => {
  const { isEmptyCart } = useSelector((state: RootState) => state.cart);
  return (
    <div className="cart flex justify-center items-center flex-col gap-6 h-full">
      {isEmptyCart ? <EmptyCart /> : <ShoppingCart />}
    </div>
  );
};

export default Cart;
