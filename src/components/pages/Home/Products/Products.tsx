import React, { useState } from 'react';
import { ProductsData } from '../../../../models/interface';
import ProductItem from './ProductItem/ProductItem';

interface ProductProps {
  products: ProductsData[];
}

const Products = ({ products }: ProductProps) => {
  const productItems = products.map((product: ProductsData) => {
    return (
      <ProductItem
        image={product.image}
        category={product.category}
        faculty={product.faculty}
        name={product.name}
        rate={product.rate}
        price={product.price}
        description={product.description}
        key={product.id}
        id={product.id}
      />
    );
  });

  return <div className="products grid grid-cols-4 gap-5 my-5">{productItems}</div>;
};

export default Products;
