import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../../../redux/slices/ProductsSlice';
import { RootState } from '../../../../redux/store';

const Pagination = () => {
  const { totalPages } = useSelector((state: RootState) => state.products);
  const dispatch = useDispatch();
  const productsPerPage = 10;

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
        pageRangeDisplayed={productsPerPage}
        pageCount={totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
        className={`flex gap-3 p-1 my-4 items-center justify-center ${styles.root}`}
      />
    </>
  );
};

export default Pagination;
