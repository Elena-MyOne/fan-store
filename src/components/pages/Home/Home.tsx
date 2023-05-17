import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Sort from './Sort/Sort';
import { ProductsData } from '../../../models/interface';

interface DataProps {
  products: ProductsData[];
  loading: boolean;
}

const Home = ({ products, loading }: DataProps) => {
  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8">
        <Categories products={products} loading={loading} />
        <Sort products={products} />
      </div>
      <div className="products">
        <h2 className="title font-semibold text-xl">All products</h2>
        <Products products={products} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
