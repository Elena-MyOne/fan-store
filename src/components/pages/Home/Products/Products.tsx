import React from 'react';
import { ProductsData } from '../../../../models/interface';
import ProductItem from './ProductItem/ProductItem';
import ProductItemSkeleton from './ProductItem/ProductItemSkeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

const Products = () => {
  const { products, isLoading } = useSelector((state: RootState) => state.products);
  const productItems = products.map((product: ProductsData) => {
    return <ProductItem key={product.id} {...product} />;
  });

  const ProductSkeletons = [...new Array(8)].map((item, i) => <ProductItemSkeleton key={i} />);

  return (
    <div className="products grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:m-auto gap-6 my-5">
      {isLoading ? ProductSkeletons : productItems}
    </div>
  );
};

export default Products;
