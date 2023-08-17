import React from 'react';
import { ProductsData } from '../../../../models/interface';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  selectCart,
  setEmptyCart,
  setItemsCount,
} from '../../../../redux/slices/CartSlice';
import StarsRating from './StarsRating/StarsRating';

const ProductCard: React.FC<ProductsData> = (props: ProductsData) => {
  const [addWishlist, setAddWishlist] = React.useReducer((prev) => !prev, false);
  const [addCart, setAddCart] = React.useState(false);

  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  function onClickCartButton() {
    setAddCart((prev) => !prev);
    const item: ProductsData = {
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
    if (addCart) {
      dispatch(removeItemFromCart(props.id));
    } else {
      dispatch(addItemToCart(item));
      dispatch(setEmptyCart(false));
      dispatch(setItemsCount());
    }
  }

  React.useEffect(() => {
    items.filter((item) => item.id === props.id).forEach((item) => setAddCart(true));

    if (items.length === 0) {
      dispatch(setEmptyCart(true));
    }
  }, [dispatch, items, props.id]);

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  const iconsStyleActive = 'text-orange-400 hover:text-orange-500 duration-300';
  const iconsStyle = 'text-gray-600 hover:text-orange-500 duration-300';
  const sale = props.sale === 0 ? '' : `-${props.sale}%`;

  return (
    <div
      className="product hover:shadow-lg duration-300 border py-4 border-gray-300 px-4 rounded-lg flex flex-col gap-2 items-center"
      key={props.id}
    >
      <div className="top flex justify-between items-center gap-4 w-full">
        <div className="buttons cursor-pointer flex items-center gap-4 ">
          <button
            className={addWishlist ? `wishlist ${iconsStyleActive}` : `wishlist ${iconsStyle}`}
            onClick={setAddWishlist}
          >
            <svg className="w-[25px] h-[25px]" viewBox="0 -960 960 960">
              {addWishlist ? (
                <path
                  className="fill-current"
                  d="m480-147.54-31.769-28.923q-103.307-94.307-170.384-162.5-67.077-68.192-106.73-120.999-39.654-52.808-55.385-95.307-15.731-42.5-15.731-85.423 0-82.307 55.5-137.807 55.5-55.5 137.192-55.5 55.846 0 103.576 28.154Q444-777.691 480-723.998q40.461-55.923 86.884-82.962t100.423-27.039q81.692 0 137.192 55.5 55.5 55.5 55.5 137.807 0 42.923-15.731 85.423-15.731 42.499-55.385 95.307-39.653 52.807-106.73 120.999-67.077 68.193-170.384 162.5L480-147.54Z"
                />
              ) : (
                <path
                  className="fill-current"
                  d="m480-147.54-31.769-28.923q-103.075-94.428-170.268-162.56T171.117-459.962q-39.654-52.808-55.385-95.373-15.731-42.566-15.731-85.357 0-82.294 55.5-137.8 55.5-55.507 137.192-55.507 55.846 0 103.576 28.154Q444-777.691 480-723.998q40.461-55.923 86.829-82.962 46.368-27.039 100.478-27.039 81.692 0 137.192 55.507 55.5 55.506 55.5 137.8 0 42.791-15.731 85.357-15.731 42.565-55.341 95.29-39.609 52.725-106.846 120.939-67.237 68.215-170.312 162.643L480-147.54Zm0-60.153q99.719-91.285 164.121-156.481 64.401-65.197 102.332-114.088 37.931-48.892 53.047-86.933 15.115-38.042 15.115-75.353 0-64.221-41.615-106.144-41.616-41.923-105.468-41.923-51.139 0-94.028 30.538-42.889 30.539-74.889 90.231H460.77q-31.77-59.077-74.651-89.923-42.881-30.846-93.651-30.846-63.468 0-105.275 41.923-41.808 41.923-41.808 106.443 0 37.252 15.177 75.497t52.846 87.383q37.669 49.138 102.708 113.984Q381.154-298.539 480-207.693Zm0-290.461Z"
                />
              )}
            </svg>
          </button>
          <button
            onClick={onClickCartButton}
            className={addCart ? `cart ${iconsStyleActive}` : `cart ${iconsStyle}`}
          >
            <svg className="w-[24px] h-[24px]" viewBox="0 -960 960 960">
              {addCart ? (
                <path
                  className="fill-current"
                  d="M291.019-98.309q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.893-18.813 45.494t-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615-162.828q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.893-18.814 45.494-18.813 18.601-45.706 18.601ZM209.616-790.615h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Z"
                />
              ) : (
                <path
                  className="fill-current"
                  d="M291.019-98.309q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.893-18.813 45.494t-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615-162.828q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.893-18.814 45.494-18.813 18.601-45.706 18.601ZM232.692-745.231l111.539 232.616h278.384q3.461 0 6.346-1.731 2.885-1.731 4.424-4.808l118.461-215.307q2.308-4.231.384-7.501-1.923-3.269-6.539-3.269H232.692Zm-23.076-45.384h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Zm134.615 278h285.692-285.692Z"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="sale text-lg text-orange-400">{sale}</div>
      </div>

      <div className="image h-[190px] m-auto">
        <img className="h-full" src={props.image} alt={props.category} />
      </div>
      <div className="content">
        <div className="title text-lg">{props.name}</div>
        <div className="title mb-3">
          <StarsRating rate={props.rate} />
        </div>
        <div className="price font-semibold mb-3">${props.price.toFixed(2)}</div>
        <Link
          to={`/${props.id}`}
          className="inline-block px-6 py-2 block text-white bg-gray-700 hover:bg-orange-600 duration-300 rounded-3xl"
        >
          See details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
