import React from 'react';
import { ProductsData } from '../../../../models/interface';

interface ProductsDataProps {
  products: ProductsData[];
}

const Categories = (props: ProductsDataProps) => {
  const styleCategoryItem =
    'px-4 py-1 bg-gray-100 hover:bg-gray-200 duration-300 rounded-3xl cursor-pointer';
  const styleCategoryItemActive =
    'px-4 py-1 text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl cursor-pointer';

  const allCategories = props.products.map((product) => product.category.toLowerCase());
  const categories = [...new Set(allCategories)].map((category, index) => (
    <li className={styleCategoryItem} key={index}>
      {category}
    </li>
  ));

  return (
    <div className="categories">
      <ul className="category flex justify-between items-center gap-6">
        <li className={styleCategoryItemActive}>all</li>
        {categories}
      </ul>
    </div>
  );
};

export default Categories;
