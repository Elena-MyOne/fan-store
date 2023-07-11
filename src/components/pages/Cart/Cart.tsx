import React from 'react';
import EmptyCart from './EmptyCart/EmptyCart';
import ShoppingCart from './ShoppingCart/ShoppingCart';
import { useSelector } from 'react-redux';
import { selectCart } from '../../../redux/slices/CartSlice';

const Cart: React.FC = () => {
  const { isEmptyCart } = useSelector(selectCart);

  return (
    <div className="cart flex justify-center items-center flex-col gap-6 h-full">
      {isEmptyCart ? <EmptyCart /> : <ShoppingCart />}
    </div>
  );
};

export default Cart;
