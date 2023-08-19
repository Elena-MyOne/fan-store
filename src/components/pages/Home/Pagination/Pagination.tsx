import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, setCurrentPage } from '../../../../redux/slices/ProductsSlice';
import { AppDispatch } from '../../../../redux/store';
import { PRODUCTS_PER_PAGE } from '../../../../models/globalVariables';

const Pagination: React.FC = () => {
  const { totalPages } = useSelector(selectProducts);
  const dispatch = useDispatch<AppDispatch>();

  function handlePageClick(selectedItem: { selected: number }) {
    const activePage = selectedItem.selected + 1;
    dispatch(setCurrentPage(activePage));
  }

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={PRODUCTS_PER_PAGE}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className={`flex gap-2 p-1 md:my-8 my-4 items-center justify-center ${styles.root}`}
      />
    </>
  );
};

export default Pagination;
