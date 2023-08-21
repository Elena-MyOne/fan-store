import axios from 'axios';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ROUTER_PATH, URL } from '../../../models/enums';
import { ProductsData } from '../../../models/interface';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCart,
  addItemToCart,
  removeItemFromCart,
  setEmptyCart,
} from '../../../redux/slices/CartSlice';
import ProductSkeleton from './ProductSkeleton';
import StarsRating from '../../StarsRating/StarsRating';

const Product: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = React.useState(false);
  const [cartAdd, setCartAdd] = React.useState(false);

  const { items } = useSelector(selectCart);
  const dispatch = useDispatch();

  const [product, setProduct] = React.useState<ProductsData>({
    id: 0,
    category: '',
    faculty: '',
    name: '',
    image: '',
    description: '',
    price: 0,
    rate: 0,
    sale: 0,
    length: '',
  });

  const isMounted = React.useRef(false);

  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(items);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [items]);

  React.useEffect(() => {
    async function fetchProductById() {
      setIsLoading(true);
      try {
        const response = await axios.get(`${URL.PRODUCTS}/${id}`);
        setProduct({
          id: response.data.id,
          category: response.data.category,
          faculty: response.data.faculty,
          name: response.data.name,
          image: response.data.image,
          description: response.data.description,
          price: response.data.price,
          rate: response.data.rate,
          sale: response.data.sale,
        });
      } catch (error) {
        console.log(error);
        //TODO add popup
        navigate('/');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProductById();
  }, [id, navigate]);

  function onClickAddToCart() {
    setCartAdd((prev) => !prev);
    if (cartAdd) {
      dispatch(removeItemFromCart(product.id));
      if (items.length === 0) {
        dispatch(setEmptyCart(true));
      }
    } else {
      dispatch(addItemToCart(product));
      dispatch(setEmptyCart(false));
    }
  }

  const findItem = items.filter((item) => item.id === product.id);

  React.useEffect(() => {
    if (findItem.length) {
      setCartAdd(true);
    }
  }, [findItem.length]);

  const buttonsStyle =
    'button flex items-center justify-center gap-2 px-6 py-2 block text-white bg-gray-700 hover:bg-gray-900 duration-300 rounded-3xl';
  const activeButtonsStyle =
    'button flex items-center justify-center gap-2 px-6 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl';
  const buttonCartStyle = cartAdd ? buttonsStyle : activeButtonsStyle;

  return (
    <div className="body flex justify-center items-center h-full p-4 bg-gray-100">
      {isLoading ? (
        <ProductSkeleton />
      ) : (
        <div className="card bg-white flex flex-col md:flex-row justify-between gap-5 border border-gray-300 rounded p-2 max-w-5xl">
          <div className="column m-auto">
            <div className="image w-64">
              <img className="" src={product.image} alt={product.name} />
            </div>
            <div className="rate text-center font-semibold pt-2">
              <StarsRating rate={product.rate} />
            </div>
          </div>
          <div className="column flex flex-col gap-3 justify-between">
            <div className="top relative">
              <div className="title font-semibold text-center text-lg mt-2">{product.name}</div>
              <div className="sale font-semibold text-orange-500 text-lg absolute top-1 right-2">
                {product.sale === 0 ? '' : `-${product.sale}%`}
              </div>
            </div>
            <div className="middle">
              <div className="description pr-2">{product.description}</div>
              <div className="faculty mt-4">
                <span className="font-semibold">Faculty: </span>
                {product.faculty}
              </div>
              <div className="category">
                <span className="font-semibold">Category: </span>
                {product.category}
              </div>
            </div>
            <div className="bottom flex items-center justify-center gap-4 flex-col mb-2">
              <div className="price font-semibold text-center text-lg">
                {product.price === 0 ? '' : `$${product.price.toFixed(2)}`}
              </div>
              <div className="buttons flex flex-col sm:flex-row justify-center items-center gap-9">
                <button onClick={onClickAddToCart} className={buttonCartStyle}>
                  <svg className="w-[20px] h-[20px]" viewBox="0 96 960 960">
                    <path
                      className="fill-current"
                      d="M291.019 957.691q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.894-18.813 45.494-18.813 18.601-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615 893.172q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.894-18.814 45.494-18.813 18.601-45.706 18.601ZM232.692 310.769l111.539 232.616h278.384q3.461 0 6.346-1.731 2.885-1.731 4.424-4.808l118.461-215.307q2.308-4.231.384-7.501-1.923-3.269-6.539-3.269H232.692Zm-23.076-45.384h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Zm134.615 278h285.692-285.692Z"
                    />
                  </svg>
                  {cartAdd ? 'Remove from Cart' : 'Add to Cart'}
                </button>
                <Link
                  to={`/${ROUTER_PATH.HOME}`}
                  className="back px-6 py-2 block border-solid border-2 text-gray-400 hover:text-orange-500 border-gray-400 hover:border-orange-500 duration-300 rounded-3xl"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
