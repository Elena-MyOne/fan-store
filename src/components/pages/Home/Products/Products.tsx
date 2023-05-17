import React from 'react';
import { ProductsData } from '../../../../models/interface';
import ProductItem from './ProductItem/ProductItem';
import ProductItemSkeleton from './ProductItem/ProductItemSkeleton';

interface ProductProps {
  products: ProductsData[];
  loading: boolean;
}

const Products = ({ products, loading }: ProductProps) => {
  const productItems = products.map((product: ProductsData) => {
    return <ProductItem key={product.id} {...product} />;
  });

  const ProductSkeletons = [...new Array(8)].map((item, i) => <ProductItemSkeleton key={i} />);

  return (
    <div className="products grid grid-cols-4 gap-6 my-5">
      {loading ? ProductSkeletons : productItems}
    </div>
  );
};

export default Products;