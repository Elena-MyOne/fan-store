import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../../redux/slices/ProductsSlice';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { STATUS } from '../../../../models/enums';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsData } from '../../../../models/interface';

const Sale: React.FC = () => {
  const { saleProducts, status } = useSelector(selectProducts);
  const sale = saleProducts.slice(0, 4);

  const products = sale.map((product: ProductsData) => {
    return <ProductCard key={product.id} {...product} />;
  });

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
          {products}
        </div>
      )}
    </section>
  );
};

export default Sale;
