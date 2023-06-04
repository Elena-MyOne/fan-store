import React from 'react';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import { ROUTER_PATH } from '../../../../models/enums';
import { RootState } from '../../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { CartData } from '../../../../models/interface';

const ShoppingCart = () => {
  const { items, totalPrice, totalSale } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const cartItems = items.map((item: CartData) => {
    return <CartItem key={item.id} {...item} />;
  });

  return (
    <div className="fullCart grid grid-cols-1 my-10">
      <div className="divide-y">
        <div className="top flex justify-between items-center gap-10 p-2">
          <h1 className="title font-bold text-xl">Cart</h1>
          <button className="clear flex justify-between items-center gap-2 text-gray-400 hover:text-orange-500 duration-300">
            <svg className="w-[20px] h-[20px]" viewBox="0 96 960 960">
              <path
                className="fill-current"
                d="M278.309 915.999q-23.596 0-40.644-17.048-17.048-17.049-17.048-40.645V314.078h-40.616v-45.384h171.076v-28.077h257.846v28.077h171.076v45.384h-40.616v544.228q0 23.529-17.081 40.611-17.082 17.082-40.611 17.082H278.309ZM694 314.078H266v544.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h403.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463V314.078ZM381.232 786.154h45.383V397.539h-45.383v388.615Zm152.153 0h45.383V397.539h-45.383v388.615ZM266 314.078V870.615 314.078Z"
              />
            </svg>
            <span className="clear">Clear Cart</span>
          </button>
        </div>

        {cartItems}

        <div className="summary p-2 flex justify-between items-center gap-10">
          <div className="amount">
            Items: <span className="number font-bold">{items.length}</span>
          </div>
          <div className="sum">
            <div className="text-right">
              Sale:{' '}
              <span className="">
                $<span className="total">{totalSale}</span>
              </span>
            </div>
            <div className="text-right font-bold text-orange-500">
              Sum:{' '}
              <span className="">
                $<span className="total">{totalPrice}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="buttons flex w-full justify-between items-center gap-10 pt-7">
        <Link
          to={ROUTER_PATH.HOME}
          className="back px-6 py-2 block border-solid border-2 text-gray-400 hover:text-orange-500 border-gray-400 hover:border-orange-500 duration-300 rounded-3xl"
        >
          Go Back
        </Link>
        <Link
          to={`/${ROUTER_PATH.CHECKOUT}`}
          className="checkout px-6 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl"
        >
          Bay now
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
