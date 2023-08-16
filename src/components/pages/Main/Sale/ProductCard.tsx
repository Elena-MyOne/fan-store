import React from 'react';
import { ProductsData } from '../../../../models/interface';

const ProductCard: React.FC<ProductsData> = (props: ProductsData) => {
  const [addWishlist, setAddWishlist] = React.useReducer((prev) => !prev, false);

  return (
    <div
      className="product hover:shadow-lg duration-300 border py-4 border-gray-300 px-4 rounded-lg flex flex-col gap-2 items-center"
      key={props.id}
    >
      <div className="top flex justify-between items-center gap-4 w-full">
        <div className={addWishlist ? 'buttons text-orange-400' : 'buttons text-gray-600'}>
          <div
            className="wishlist cursor-pointer hover:text-orange-500 duration-300"
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
          </div>
        </div>
        <div className="sale text-lg text-orange-400">-{props.sale}%</div>
      </div>

      <div className="image h-[230px] m-auto">
        <img className="h-full" src={props.image} alt={props.category} />
      </div>
      <div className="content">
        <div className="title text-lg mb-3">{props.name}</div>
        <div className="price font-semibold">${props.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
