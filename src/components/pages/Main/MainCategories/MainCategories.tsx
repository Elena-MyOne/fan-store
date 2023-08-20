import React from 'react';
import { CATEGORIES, FACULTY, ROUTER_PATH } from '../../../../models/enums';
import { Link } from 'react-router-dom';
import {
  setActiveCategory,
  setActiveFaculty,
  setSaleDesc,
  setSelectedSidebarItem,
} from '../../../../redux/slices/FilterSlice';
import { useDispatch } from 'react-redux';

const MainCategories: React.FC = () => {
  const dispatch = useDispatch();

  const itemStyle = 'py-1 px-2 hover:text-orange-400 cursor-pointer duration-300';

  const onClickMainCategories = (category: string): void => {
    dispatch(setActiveFaculty(FACULTY.ALL));
    dispatch(setActiveCategory(category));
    dispatch(setSelectedSidebarItem(null));
  };

  return (
    <div className="container m-auto">
      <ul className="categories container m-auto font-semibold text-lg flex items-center justify-between flex-wrap gap-x-8 gap-y-4 px-2 py-6">
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.ALL)}>
          <Link to={ROUTER_PATH.HOME}>All Products</Link>
        </li>
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.WANDS)}>
          <Link to={ROUTER_PATH.HOME}>Wands</Link>
        </li>
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.DECORATIONS)}>
          <Link to={ROUTER_PATH.HOME}>Decorations</Link>
        </li>
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.PILLOWS)}>
          <Link to={ROUTER_PATH.HOME}>Pillows</Link>
        </li>
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.SWEATERS)}>
          <Link to={ROUTER_PATH.HOME}>Sweaters</Link>
        </li>
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.SOUVENIRS)}>
          <Link to={ROUTER_PATH.HOME}>Souvenirs</Link>
        </li>
        <li className={itemStyle} onClick={() => onClickMainCategories(CATEGORIES.ROBES)}>
          <Link to={ROUTER_PATH.HOME}>Robes</Link>
        </li>
        <li
          className="sale py-1 px-4 bg-gray-800 text-white rounded duration-300 cursor-pointer hover:bg-orange-500"
          onClick={() => dispatch(setSaleDesc())}
        >
          <Link to={ROUTER_PATH.HOME}>Sale -30%</Link>
        </li>
      </ul>
    </div>
  );
};

export default MainCategories;
