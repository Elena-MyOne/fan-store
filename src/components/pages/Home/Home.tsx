import React from 'react';
import Categories from './Categories/Categories';
import Products from './Products/Products';
import Sort from './Sort/Sort';
import { URL } from '../../../models/enums';
// import { ProductsData } from '../../../models/interface';

// interface DataProps {
//   products: ProductsData[];
// }

const Home = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    fetch(URL.PRODUCTS)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="home container px-2 m-auto">
      <div className="top flex justify-between items-center gap-4 py-8">
        <Categories products={products} />
        <Sort products={products} />
      </div>
      <div className="products">
        <h2 className="title font-semibold text-xl">All products</h2>
        <Products products={products} />
      </div>
    </div>
  );
};

export default Home;
