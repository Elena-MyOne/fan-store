import React from 'react';
import { ProductsData } from '../../../../models/interface';
import CategoriesSkeleton from './CategoriesSkeleton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setActiveCategory } from '../../../../redux/slices/FilterSlice';
interface ProductsDataProps {
  allProducts: ProductsData[];
  loading: boolean;
}

const Categories = ({ loading, allProducts }: ProductsDataProps) => {
  const activeCategory = useSelector((state: RootState) => state.filter.activeCategory);
  const dispatch = useDispatch();

  const styleCategoryItem =
    'xl:px-5 px-4 xl:py-2 py-1 bg-gray-200 hover:bg-gray-200 duration-300 rounded-3xl cursor-pointer';
  const styleCategoryItemActive =
    'xl:px-5 px-4 xl:py-2 py-1 text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl cursor-pointer';

  const allCategories = allProducts.map((product) => product.category.toLowerCase());
  const categories = ['all', ...new Set(allCategories)].map((category, index) => (
    <li
      className={category === activeCategory ? styleCategoryItemActive : styleCategoryItem}
      key={index}
      onClick={() => dispatch(setActiveCategory(category))}
    >
      {category}
    </li>
  ));

  const categoriesSkeleton = [...new Array(7)].map((item, i) => <CategoriesSkeleton key={i} />);

  return (
    <div className="categories">
      <ul className="category flex xl:justify-between items-center xl:gap-6 gap-4 flex-wrap">
        {loading ? categoriesSkeleton : categories}
      </ul>
    </div>
  );
};

export default Categories;
