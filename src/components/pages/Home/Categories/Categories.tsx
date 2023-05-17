import React, { useState } from 'react';
import { ProductsData } from '../../../../models/interface';
import CategoriesSkeleton from './CategoriesSkeleton';
import { loadavg } from 'os';

interface ProductsDataProps {
  products: ProductsData[];
  loading: boolean;
}

const Categories = (props: ProductsDataProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const styleCategoryItem =
    'xl:px-5 px-4 xl:py-2 py-1 bg-gray-200 hover:bg-gray-200 duration-300 rounded-3xl cursor-pointer';
  const styleCategoryItemActive =
    'xl:px-5 px-4 xl:py-2 py-1 text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl cursor-pointer';

  const allCategories = props.products.map((product) => product.category.toLowerCase());
  const categories = ['all', ...new Set(allCategories)].map((category, index) => (
    <li
      className={category === activeCategory ? styleCategoryItemActive : styleCategoryItem}
      key={index}
      onClick={() => setActiveCategory(category ? category : 'all')}
    >
      {category}
    </li>
  ));

  const categoriesSkeleton = [...new Array(7)].map((item, i) => <CategoriesSkeleton key={i} />);

  return (
    <div className="categories">
      <ul className="category flex xl:justify-between items-center xl:gap-6 gap-4 flex-wrap">
        {props.loading ? categoriesSkeleton : categories}
      </ul>
    </div>
  );
};

export default Categories;
