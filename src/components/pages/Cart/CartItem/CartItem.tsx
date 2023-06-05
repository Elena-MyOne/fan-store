import React from 'react';
import { CartData } from '../../../../models/interface';
import { useDispatch } from 'react-redux';
import {
  addItemToCart,
  minusItemFromCart,
  removeItemFromCart,
} from '../../../../redux/slices/CartSlice';

const CartItem = (props: CartData) => {
  const dispatch = useDispatch();

  const buttonsStyle = 'w-[30px] h-[30px] text-gray-400 hover:text-orange-500 duration-300';

  function onClickPlus() {
    dispatch(addItemToCart(props));
  }

  function onClickMinus() {
    dispatch(minusItemFromCart(props.id));
  }

  function onClickRemove() {
    dispatch(removeItemFromCart(props.id));
  }

  return (
    <div className="item flex justify-between items-center gap-6 px-2 py-3 relative">
      <div className="content flex justify-center items-center gap-4">
        <div className="image w-28">
          <img src={props.image} alt={props.category} />
        </div>
        <div className="description">
          <h3 className="name font-semibold mb-2">{props.name}</h3>
          <div className="text-orange-400 font-semibold absolute top-2 right-2">
            {props.sale !== 0 ? `- ${props.sale}%` : ''}
          </div>
          <p className="text text-gray-600 max-w-sm">{props.description}</p>
        </div>
      </div>

      <div className="amount flex justify-center items-center gap-2 text-orange-500">
        <button className="add" onClick={onClickPlus}>
          <svg className={buttonsStyle} viewBox="0 96 960 960">
            <path
              className="fill-current"
              d="M459.539 765.999h45.383V601.538h165.077v-45.384H504.922V386.001h-45.383v170.153H290.001v45.384h169.538v164.461Zm20.794 190q-78.955 0-147.897-29.92t-120.755-81.71q-51.814-51.791-81.747-120.777t-29.933-148.025q0-78.655 29.92-147.864t81.71-120.522q51.791-51.314 120.777-81.247t148.025-29.933q78.655 0 147.864 29.92t120.522 81.21q51.314 51.291 81.247 120.629 29.933 69.337 29.933 147.907 0 78.955-29.92 147.897t-81.21 120.571q-51.291 51.629-120.629 81.746-69.337 30.118-147.907 30.118Zm.167-45.384q139.192 0 236.654-97.769 97.461-97.769 97.461-237.346 0-139.192-97.274-236.654Q620.067 241.385 480 241.385q-139.077 0-236.846 97.274T145.385 576q0 139.077 97.769 236.846T480.5 910.615ZM480 576Z"
            />
          </svg>
        </button>
        <span className="number text-black ">{props.count}</span>
        <button className="minus" onClick={onClickMinus}>
          <svg className={buttonsStyle} viewBox="0 96 960 960">
            <path
              className="fill-current"
              d="M290.001 596.461h379.998v-45.383H290.001v45.383Zm190.066 359.538q-78.221 0-147.397-29.92-69.176-29.92-120.989-81.71-51.814-51.791-81.747-120.936-29.933-69.146-29.933-147.366 0-78.836 29.92-148.204 29.92-69.369 81.71-120.682 51.791-51.314 120.936-81.247 69.146-29.933 147.366-29.933 78.836 0 148.204 29.92 69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173 0 78.221-29.92 147.397-29.92 69.176-81.21 120.989-51.291 51.814-120.629 81.747-69.337 29.933-148.173 29.933ZM480 910.615q139.692 0 237.154-97.769Q814.615 715.077 814.615 576q0-139.692-97.461-237.154Q619.692 241.385 480 241.385q-139.077 0-236.846 97.461Q145.385 436.308 145.385 576q0 139.077 97.769 236.846T480 910.615ZM480 576Z"
            />
          </svg>
        </button>
      </div>

      <div className="price">
        $ <span>{(props.price * props.count).toFixed(2)}</span>
      </div>

      <button
        className="cancel text-gray-400 hover:text-orange-500 duration-300"
        onClick={onClickRemove}
      >
        <svg className={buttonsStyle} viewBox="0 96 960 960">
          <path
            className="fill-current"
            d="M331.539 756.461 480 607.999l148.461 148.462 32-32L511.999 576l148.462-148.461-32-32L480 544.001 331.539 395.539l-32 32L448.001 576 299.539 724.461l32 32Zm148.528 199.538q-78.221 0-147.397-29.92-69.176-29.92-120.989-81.71-51.814-51.791-81.747-120.936-29.933-69.146-29.933-147.366 0-78.836 29.92-148.204 29.92-69.369 81.71-120.682 51.791-51.314 120.936-81.247 69.146-29.933 147.366-29.933 78.836 0 148.204 29.92 69.369 29.92 120.682 81.21 51.314 51.291 81.247 120.629 29.933 69.337 29.933 148.173 0 78.221-29.92 147.397-29.92 69.176-81.21 120.989-51.291 51.814-120.629 81.747-69.337 29.933-148.173 29.933ZM480 910.615q139.692 0 237.154-97.769Q814.615 715.077 814.615 576q0-139.692-97.461-237.154Q619.692 241.385 480 241.385q-139.077 0-236.846 97.461Q145.385 436.308 145.385 576q0 139.077 97.769 236.846T480 910.615ZM480 576Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
