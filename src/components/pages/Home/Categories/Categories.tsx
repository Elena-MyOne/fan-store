import React from 'react';
import CategoriesSkeleton from './CategoriesSkeleton';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter, setActiveCategory } from '../../../../redux/slices/FilterSlice';
import { STATUS } from '../../../../models/enums';
import { selectProducts } from '../../../../redux/slices/ProductsSlice';

const Categories: React.FC = () => {
  const { activeCategory, allProducts } = useSelector(selectFilter);
  const { status } = useSelector(selectProducts);
  const dispatch = useDispatch();

  const styleCategoryItem =
    'xl:px-5 px-4 xl:py-2 py-1 bg-gray-200 hover:bg-gray-200 duration-300 rounded-3xl cursor-pointer';
  const styleCategoryItemActive =
    'xl:px-5 px-4 xl:py-2 py-1 text-white bg-gray-800 hover:bg-gray-900 duration-300 rounded-3xl cursor-pointer';

  const allCategories = React.useMemo(() => {
    return allProducts.map((product) => product.category.toLowerCase());
  }, [allProducts]);

  const categories = React.useMemo(() => {
    if (allProducts.length === 0) {
      return;
    }
    return ['all', ...new Set(allCategories)].map((category, index) => (
      <li
        className={category === activeCategory ? styleCategoryItemActive : styleCategoryItem}
        key={index}
        onClick={() => dispatch(setActiveCategory(category))}
      >
        {category}
      </li>
    ));
  }, [allProducts.length, activeCategory, allCategories, dispatch]);

  const categoriesSkeleton = [...new Array(7)].map((item, i) => <CategoriesSkeleton key={i} />);

  return (
    <div className="categories">
      <ul className="category flex xl:justify-between items-center xl:gap-6 gap-4 flex-wrap">
        {status === STATUS.LOADING ? categoriesSkeleton : categories}
      </ul>
    </div>
  );
};

export default Categories;
