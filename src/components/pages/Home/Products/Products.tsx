import React from 'react';
import { ProductsData } from '../../../../models/interface';
// import ProductItem from './ProductItem/ProductItem';
import Skeleton from 'react-loading-skeleton';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../../models/enums';
import { selectProducts } from '../../../../redux/slices/ProductsSlice';
import ProductCard from '../../../ProductCard/ProductCard';
import { PRODUCTS_PER_PAGE } from '../../../../models/globalVariables';

const Products: React.FC = () => {
  const { products, status } = useSelector(selectProducts);
  const productItems = products.map((product: ProductsData) => {
    return <ProductCard key={product.id} {...product} />;
  });

  const ProductSkeletons = [...new Array(PRODUCTS_PER_PAGE)].map((item, i) => (
    <Skeleton height={360} key={i} />
  ));

  return (
    <div className="products grid lg:grid-cols-3 md:grid-cols-2 md:m-auto text-center gap-6 my-5">
      {status === STATUS.LOADING ? ProductSkeletons : productItems}
    </div>
  );
};

export default Products;
