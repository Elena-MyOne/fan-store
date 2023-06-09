import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  CartSelector,
  addItemToCart,
  removeItemFromCart,
  setEmptyCart,
  setItemsCount,
} from '../../../../../redux/slices/CartSlice';

interface ProductItemProps {
  id: number;
  category: string;
  faculty: string;
  name: string;
  image: string;
  description: string;
  price: number;
  rate: number;
  sale: number;
}

const ProductItem = (props: ProductItemProps) => {
  const [description, setDescription] = useState(false);
  const [cartAdd, setCartAdd] = useState(false);

  const { items } = useSelector(CartSelector);
  const dispatch = useDispatch();

  const buttonsStyle =
    'flex items-center gap-1 px-2 py-1 hover:text-white bg-gray-200 hover:bg-gray-900 duration-300 rounded-3xl';
  const activeButtonsStyle =
    'flex gap-1 items-center px-2 py-1 text-white bg-orange-500 hover:bg-orange-600 rounded-2xl bg-gray-200 duration-300';
  const descriptionButtonStyle = description
    ? 'px-6 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl'
    : 'px-6 py-2 block text-white bg-gray-700 hover:bg-gray-900 duration-300 rounded-3xl';
  const buttonCartStyle = cartAdd ? activeButtonsStyle : buttonsStyle;
  const sale = props.sale === 0 ? '' : `-${props.sale}%`;

  function onClickCartButton() {
    setCartAdd((prev) => !prev);
    const item: ProductItemProps = {
      id: props.id,
      category: props.category,
      faculty: props.faculty,
      name: props.name,
      image: props.image,
      description: props.description,
      price: props.price,
      rate: props.rate,
      sale: props.sale,
    };
    if (cartAdd) {
      dispatch(removeItemFromCart(props.id));
    } else {
      dispatch(addItemToCart(item));
      dispatch(setEmptyCart(false));
      dispatch(setItemsCount());
    }
  }

  React.useEffect(() => {
    items.filter((item) => item.id === props.id).forEach((item) => setCartAdd(true));

    if (items.length === 0) {
      dispatch(setEmptyCart(true));
    }
  }, [dispatch, items, props.id]);

  return (
    <div className="flex flex-col items-center border border-gray-300 pt-3 pb-3 px-4 rounded mb-2 hover:shadow-lg duration-300 relative">
      <div className="top flex items-center justify-between w-full">
        <div className="buttons flex gap-4">
          <button onClick={onClickCartButton} className={buttonCartStyle}>
            <svg className="w-[20px] h-[20px]" viewBox="0 96 960 960">
              <path
                className="fill-current"
                d="M291.019 957.691q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.894-18.813 45.494-18.813 18.601-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615 893.172q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.894-18.814 45.494-18.813 18.601-45.706 18.601ZM232.692 310.769l111.539 232.616h278.384q3.461 0 6.346-1.731 2.885-1.731 4.424-4.808l118.461-215.307q2.308-4.231.384-7.501-1.923-3.269-6.539-3.269H232.692Zm-23.076-45.384h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Zm134.615 278h285.692-285.692Z"
              />
            </svg>
            {cartAdd ? 'remove' : 'add'}
          </button>
          <Link to={`/${props.id}`} className={`details ${buttonsStyle}`}>
            <svg className="w-[20px] h-[20px]" viewBox="0 96 960 960">
              <path
                className="fill-current"
                d="M197.694 955.999q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611v-491.92q0-23.529 17.082-40.61 17.082-17.082 40.611-17.082h109.615q0-72.076 48.577-122.384 48.576-50.307 120.46-50.307 71.884 0 124.115 50.401 52.23 50.4 52.23 122.29h109.615q23.529 0 40.611 17.082 17.082 17.081 17.082 40.61v491.92q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H197.694Zm0-45.384h564.612q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-491.92q0-4.616-3.846-8.462-3.847-3.846-8.463-3.846H197.694q-4.616 0-8.463 3.846-3.846 3.846-3.846 8.462v491.92q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846ZM480 614.076q72.076 0 124.307-52.23 52.23-52.231 52.23-124.307h-45.383q0 53.846-38.892 92.5-38.891 38.654-92.307 38.654-53.416 0-92.07-38.654-38.654-38.654-38.654-92.5h-45.383q0 72.076 52.038 124.307 52.038 52.23 124.114 52.23ZM352.693 348.694h254.614q0-53.461-36.923-90.384-36.923-36.924-90.384-36.924t-90.384 36.924q-36.923 36.923-36.923 90.384ZM185.385 910.615V394.078v516.537Z"
              />
            </svg>
            details
          </Link>
        </div>
        <div className="sale font-semibold text-orange-400 text-lg">{sale}</div>
      </div>

      <div className="image">
        <img className="h-48 p-2" src={props.image} alt={`${props.category} ${props.faculty}`} />
      </div>
      <div className="flex flex-col justify-between w-full h-52 p-2 gap-4">
        <h4 className="title text-center font-semibold text-lg">{props.name}</h4>
        <div className="">
          <div className="rate">
            <span className="font-semibold">Rate:</span> {props.rate}
          </div>
          <div className="faculty">
            <span className="font-semibold">Faculty or school:</span> {props.faculty}
          </div>
        </div>
        <div className="price font-semibold text-center text-lg">$ {props.price.toFixed(2)}</div>
        <div className="buttons flex justify-center items-center">
          <button
            className={descriptionButtonStyle}
            onClick={() => setDescription((prev) => !prev)}
          >
            {description ? 'Hide Description' : 'Show Description'}
          </button>
        </div>
      </div>
      {description && <div className="description pt-2">{props.description}</div>}
    </div>
  );
};

export default ProductItem;
