import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { URL } from '../../../models/enums';
import { ProductsData } from '../../../models/interface';

const Product = () => {
  const { id } = useParams();
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

  React.useEffect(() => {
    axios.get(`${URL.PRODUCTS}/${id}`).then((res) => {
      setProduct({
        id: res.data.id,
        category: res.data.category,
        faculty: res.data.faculty,
        name: res.data.name,
        image: res.data.image,
        description: res.data.description,
        price: res.data.price,
        rate: res.data.rate,
        sale: res.data.sale,
      });
    });
  }, [id]);

  const [cartAdd, setCartAdd] = React.useState(false);

  const buttonsStyle =
    'button flex items-center justify-center gap-2 px-6 py-2 block text-white bg-gray-700 hover:bg-gray-900 duration-300 rounded-3xl';
  const activeButtonsStyle =
    'button flex items-center justify-center gap-2 px-6 py-2 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl';
  const buttonCartStyle = cartAdd ? buttonsStyle : activeButtonsStyle;

  const sale = product.sale === 0 ? '' : `-${product.sale}%`;

  return (
    <div className="body flex justify-center items-center h-full p-4 bg-gray-100">
      <div className="card bg-white flex justify-between gap-5 border border-gray-300 rounded p-2 max-w-5xl">
        <div className="column">
          <div className="image w-64">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="rate text-center font-semibold pt-2">Rate: {product.rate}</div>
        </div>
        <div className="column flex flex-col gap-3 justify-between">
          <div className="top relative">
            <div className="title font-semibold text-center text-lg mt-2">{product.name}</div>
            <div className="sale font-semibold text-orange-400 text-lg absolute top-0 right-0">
              {sale}
            </div>
          </div>
          <div className="middle">
            <div className="description pr-2">{product.description}</div>
            <div className="faculty mt-4">
              <span className="font-semibold">Faculty: </span>
              {product.faculty}
            </div>
            <div className="category">
              <span className="font-semibold">Category: </span> {product.category}
            </div>
          </div>
          <div className="bottom flex items-center justify-center gap-4 flex-col mb-2">
            <div className="price font-semibold text-center text-lg">${product.price}</div>
            <button onClick={() => setCartAdd((prev) => !prev)} className={buttonCartStyle}>
              <svg className="w-[20px] h-[20px]" viewBox="0 96 960 960">
                <path
                  className="fill-current"
                  d="M291.019 957.691q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.894-18.813 45.494-18.813 18.601-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615 893.172q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.894-18.814 45.494-18.813 18.601-45.706 18.601ZM232.692 310.769l111.539 232.616h278.384q3.461 0 6.346-1.731 2.885-1.731 4.424-4.808l118.461-215.307q2.308-4.231.384-7.501-1.923-3.269-6.539-3.269H232.692Zm-23.076-45.384h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Zm134.615 278h285.692-285.692Z"
                />
              </svg>
              {cartAdd ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
