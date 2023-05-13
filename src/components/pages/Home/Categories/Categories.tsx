import React, { useState } from 'react';
import { ProductsData } from '../../../../models/interface';

interface ProductsDataProps {
  products: ProductsData[];
}

const Categories = (props: ProductsDataProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const styleCategoryItem =
    'px-5 py-2 bg-gray-200 hover:bg-gray-200 duration-300 rounded-3xl cursor-pointer';
  const styleCategoryItemActive =
    'px-5 py-2 text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl cursor-pointer';

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

  return (
    <div className="categories">
      <ul className="category flex justify-between items-center gap-6">{categories}</ul>
    </div>
  );
};

export default Categories;
