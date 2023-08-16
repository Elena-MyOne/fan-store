import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../../redux/slices/ProductsSlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { STATUS } from '../../../../models/enums';

const Sale: React.FC = () => {
  const { saleProducts, status } = useSelector(selectProducts);
  const sale = saleProducts.slice(0, 4);

  return (
    <section className="md:py-20 py-10 container m-auto">
      <div className="top flex gap-6 items-center justify-between md:mb-6 mb-2">
        <h2 className="title font-semibold text-xl">Sale</h2>
        <p className="hover:text-orange-400 duration-300 text-lg cursor-pointer flex gap-2 items-center">
          <span>See all</span>
          <svg className="w-[25px] h-[25px]" viewBox="0 -960 960 960">
            <path
              className="fill-current"
              d="m553.846-255.463-32.615-31.614 171.847-171.847H180.001v-45.383h513.077L520.616-676.769l32.614-31.615 226.769 226.769-226.153 226.152Z"
            />
          </svg>
        </p>
      </div>
      {status === STATUS.LOADING ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
          <Skeleton height={300} />
        </div>
      ) : (
        <div className="body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center items-center justify-between gap-6">
          {sale.map((product) => (
            <div
              className="product hover:shadow-lg duration-300 border pt-10 pb-4 border-gray-300 px-4 rounded-lg flex flex-col gap-2 items-center relative"
              key={product.id}
            >
              <div className="image h-[230px] m-auto">
                <img className="h-full" src={product.image} alt={product.category} />
              </div>
              <div className="content">
                <div className="sale absolute top-2 right-2 text-lg font-semibold text-orange-400">
                  -{product.sale}%
                </div>
                <div className="title text-lg mb-3">{product.name}</div>
                <div className="price font-semibold">${product.price.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Sale;
