import React from 'react';
import { CATEGORIES, ROUTER_PATH } from '../../../../models/enums';
import { Link } from 'react-router-dom';
import { setActiveCategory } from '../../../../redux/slices/FilterSlice';
import { useDispatch } from 'react-redux';

const MainCategories: React.FC = () => {
  const dispatch = useDispatch();

  const itemStyle = 'py-1 px-2 hover:text-orange-400 cursor-pointer duration-300';

  return (
    <>
      <ul className="categories container m-auto font-semibold text-lg flex items-center justify-between flex-wrap gap-4 py-4">
        <li className={itemStyle} onClick={() => dispatch(setActiveCategory(CATEGORIES.WANDS))}>
          <Link to={ROUTER_PATH.HOME}>Wands</Link>
        </li>
        <li
          className={itemStyle}
          onClick={() => dispatch(setActiveCategory(CATEGORIES.DECORATIONS))}
        >
          <Link to={ROUTER_PATH.HOME}>Decorations</Link>
        </li>
        <li className={itemStyle} onClick={() => dispatch(setActiveCategory(CATEGORIES.PILLOWS))}>
          <Link to={ROUTER_PATH.HOME}>Pillows</Link>
        </li>
        <li className={itemStyle} onClick={() => dispatch(setActiveCategory(CATEGORIES.SWEATERS))}>
          <Link to={ROUTER_PATH.HOME}>Sweaters</Link>
        </li>
        <li className={itemStyle} onClick={() => dispatch(setActiveCategory(CATEGORIES.SOUVENIRS))}>
          <Link to={ROUTER_PATH.HOME}>Souvenirs</Link>
        </li>
        <li className={itemStyle} onClick={() => dispatch(setActiveCategory(CATEGORIES.ROBES))}>
          <Link to={ROUTER_PATH.HOME}>Robes</Link>
        </li>
        <li className="sale py-1 px-4 bg-gray-800 text-white rounded duration-300 cursor-pointer hover:bg-orange-500">
          Sale -20%
        </li>
      </ul>
    </>
  );
};

export default MainCategories;
