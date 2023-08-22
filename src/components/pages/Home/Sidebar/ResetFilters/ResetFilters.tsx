import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../redux/store';
import {
  setActiveCategory,
  setActiveFaculty,
  setOrder,
  setSale,
  setSelectedSidebarItem,
  setSort,
} from '../../../../../redux/slices/FilterSlice';
import { CATEGORIES, FACULTY, ORDER, SALE, SORT } from '../../../../../models/enums';

const ResetFilters: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleResetFilters = () => {
    dispatch(setSort(SORT.DEFAULT));
    dispatch(setOrder(ORDER.DEFAULT));
    dispatch(setSale(SALE.DEFAULT));
    dispatch(setActiveCategory(CATEGORIES.ALL));
    dispatch(setActiveFaculty(FACULTY.ALL));
    dispatch(setSelectedSidebarItem(null));
  };

  return (
    <>
      <div className="body my-4" onClick={handleResetFilters}>
        <button className="reset w-full py-2 px-5 text-center bg-gray-700 hover:bg-orange-500 cursor-pointer rounded-3xl text-white duration-300">
          Reset filters
        </button>
      </div>
    </>
  );
};

export default ResetFilters;
