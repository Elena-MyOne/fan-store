import React, { useState } from 'react';
import { ProductsData } from '../../../../models/interface';
import ProductItem from './ProductItem/ProductItem';

interface ProductProps {
  products: ProductsData[];
}

const Products = ({ products }: ProductProps) => {
  const productItems = products.map((product: ProductsData) => {
    return <ProductItem key={product.id} {...product} />;
  });

  return <div className="products grid grid-cols-4 gap-6 my-5">{productItems}</div>;
};

export default Products;
