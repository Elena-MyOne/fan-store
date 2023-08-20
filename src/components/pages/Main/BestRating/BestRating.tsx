import React from 'react';
import SeeAll from '../SeeAll/SeeAll';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../../redux/slices/ProductsSlice';
import { SORT, STATUS } from '../../../../models/enums';
import Skeleton from 'react-loading-skeleton';
import { ProductsData } from '../../../../models/interface';
import ProductCard from '../../../ProductCard/ProductCard';

const BestRating: React.FC = () => {
  const { bestRatingProducts, status } = useSelector(selectProducts);
  const productsToShow = 4;
  const rate = bestRatingProducts.slice(0, productsToShow);

  const products = rate.map((product: ProductsData) => {
    return <ProductCard key={product.id} {...product} />;
  });

  const Skeletons = [
    [...new Array(productsToShow)].map((item, index) => <Skeleton height={300} key={index} />),
  ];

  return (
    <section className="md:py-20 py-10 container m-auto">
      <div className="top flex gap-6 items-center justify-between md:mb-6 mb-2">
        <h2 className="title font-semibold text-xl">Best Rating</h2>
        <SeeAll all={SORT.RATE} />
      </div>
      {status === STATUS.LOADING ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between gap-6">
          {Skeletons}
        </div>
      ) : (
        <div className="body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center items-center justify-between gap-6">
          {products}
        </div>
      )}
    </section>
  );
};

export default BestRating;
