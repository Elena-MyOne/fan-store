import React, { useState } from 'react';

interface ProductItemProps {
  id: number;
  category: string;
  faculty: string;
  name: string;
  image: string;
  length?: string;
  core?: string;
  wood?: string;
  description: string;
  price: number;
  rate: number;
}

const ProductItem = (props: ProductItemProps) => {
  const [details, setDetails] = useState(false);
  const [cartAdd, setCartAdd] = useState(false);

  const buttonStyles = details
    ? 'button px-6 py-1 block text-white bg-orange-500 hover:bg-orange-600 duration-300 rounded-3xl'
    : 'button px-6 py-1 block text-white bg-gray-700 hover:bg-gray-900 duration-300 rounded-3xl';

  const buttonCartStyles = cartAdd
    ? 'flex gap-1 items-center cart absolute top-3 left-3 p-2 text-white bg-orange-500 hover:bg-orange-600 rounded-2xl bg-gray-200 duration-300'
    : 'flex gap-1 items-center cart absolute top-3 left-3 p-2 text-black hover:text-white bg-gray-200 hover:bg-gray-900 duration-300 rounded-2xl bg-gray-200';

  return (
    <div className="flex flex-col items-center border border-gray-300 pt-7 pb-2 px-4 rounded mb-2 hover:shadow-lg duration-300 relative">
      <button onClick={() => setCartAdd((prev) => !prev)} className={buttonCartStyles}>
        <svg className="w-[20px] h-[20px]" viewBox="0 96 960 960">
          <path
            className="fill-current"
            d="M291.019 957.691q-26.735 0-45.223-18.813-18.487-18.813-18.487-45.706 0-26.894 18.695-45.494 18.695-18.601 45.422-18.601 26.728 0 45.42 18.813t18.692 45.706q0 26.894-18.813 45.494-18.813 18.601-45.706 18.601Zm387.691 0q-26.734 0-45.222-18.813T615 893.172q0-26.894 18.695-45.494 18.695-18.601 45.423-18.601 26.727 0 45.419 18.813 18.693 18.813 18.693 45.706 0 26.894-18.814 45.494-18.813 18.601-45.706 18.601ZM232.692 310.769l111.539 232.616h278.384q3.461 0 6.346-1.731 2.885-1.731 4.424-4.808l118.461-215.307q2.308-4.231.384-7.501-1.923-3.269-6.539-3.269H232.692Zm-23.076-45.384h554.812q24.516 0 37.082 21.193 12.565 21.192.565 42.961l-122.938 222.72q-9.984 16.586-25.62 26.548-15.636 9.961-33.746 9.961H324l-55.231 102.077q-2.692 4.616 0 10.001 2.693 5.385 8.462 5.385H743.23v45.383H283.924q-37.769 0-54.538-26.077-16.77-26.076.307-57.615l64.385-117.23-151.231-319.308H67.924v-45.383h104.307l37.385 79.384Zm134.615 278h285.692-285.692Z"
          />
        </svg>
        {cartAdd ? 'remove' : 'add'}
      </button>
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
        <div className="price font-semibold text-center text-lg">$ {props.price}</div>
        <div className="buttons flex justify-center items-center">
          <button className={buttonStyles} onClick={() => setDetails((prev) => !prev)}>
            {details ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
      {details && <div className="description">{props.description}</div>}
    </div>
  );
};

export default ProductItem;
