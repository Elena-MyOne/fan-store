import React from 'react';
import { data } from '../../../data/data';
import Categories from './Categories/Categories';
// import { ProductsData } from '../../../models/interface';

// interface DataProps {
//   products: ProductsData[];
// }

const Home = () => {
  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8">
        <Categories products={data.products} />
      </div>
    </div>
  );
};

export default Home;
