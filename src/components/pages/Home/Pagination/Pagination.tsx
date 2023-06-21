import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { selectProducts, setCurrentPage } from '../../../../redux/slices/ProductsSlice';

const Pagination = () => {
  const { totalPages } = useSelector(selectProducts);
  const dispatch = useDispatch();
  const productsPerPage = 8;

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
        className={`flex gap-2 p-1 my-4 items-center justify-center ${styles.root}`}
      />
    </>
  );
};

export default Pagination;
