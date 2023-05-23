import React from 'react';
import styles from './Pagination.module.scss';
import ReactPaginate from 'react-paginate';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

const Pagination = ({ totalPages, setCurrentPage }: PaginationProps) => {
  const productsPerPage = 10;

  function handlePageClick(selectedItem: { selected: number }) {
    const activePage = selectedItem.selected + 1;
    setCurrentPage(activePage);
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
