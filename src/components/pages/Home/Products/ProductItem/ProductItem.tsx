import React, { useState } from 'react';
import { ProductsData } from '../../../../../models/interface';

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

const ProductItem = (props: ProductsData) => {
  const [details, setDetails] = useState(false);

  return (
    <div className="flex flex-col items-center border py-2 px-4 rounded mb-2 hover:border-orange-300 duration-300">
      <div className="image">
        <img className="h-48 p-2" src={props.image} alt={`${props.category} ${props.faculty}`} />
      </div>
      <div className="flex flex-col justify-between w-full h-52 p-2 gap-4">
        <h4 className="title text-center font-semibold">{props.name}</h4>
        <div className="">
          <div className="rate">
            <span className="font-semibold">Rate:</span> {props.rate}
          </div>
          <div className="faculty">
            <span className="font-semibold">Faculty or school:</span> {props.faculty}
          </div>
        </div>
        <div className="price font-semibold text-center">$ {props.price}</div>
        <div className="buttons flex justify-center items-center">
          <button
            className="button px-6 py-1 block text-black hover:text-white bg-gray-200 hover:bg-gray-900 duration-300 rounded-3xl"
            onClick={() => setDetails((prev) => !prev)}
          >
            {details ? 'Hide Details' : 'Show Details'}
          </button>
        </div>
      </div>
      {details && <div className="description">{props.description}</div>}
    </div>
  );
};

export default ProductItem;
