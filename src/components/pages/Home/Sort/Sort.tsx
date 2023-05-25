import React, { useState } from 'react';
import { ProductsData } from '../../../../models/interface';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { setActiveFaculty } from '../../../../redux/slices/FilterSlice';

interface ProductsDataProps {
  allProducts: ProductsData[];
}

const Sort = (props: ProductsDataProps) => {
  const activeFaculty = useSelector((state: RootState) => state.filter.activeFaculty);
  const dispatch = useDispatch();
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const activePopupItemStyles =
    'font-semibold py-2 px-5 text-orange-400 bg-orange-100 cursor-pointer';
  const popupItemStyles = 'py-2 px-5 cursor-pointer hover:text-orange-400 duration-300';

  const allFaculties = props.allProducts.map((product) => product.faculty);
  const faculties = ['All', ...new Set(allFaculties)].map((faculty, index) => (
    <li
      className={faculty === activeFaculty ? activePopupItemStyles : popupItemStyles}
      key={index}
      onClick={() => {
        dispatch(setActiveFaculty(faculty));
        setIsOpenPopup((prev) => !prev);
      }}
    >
      {faculty}
    </li>
  ));

  return (
    <div className="sort relative">
      <div
        className="text flex gap-2 items-center cursor-pointer"
        onClick={() => setIsOpenPopup((prev) => !prev)}
      >
        <span className="font-semibold">Sort by faculty:</span>{' '}
        <div className="flex gap-2 items-center border rounded hover:border-gray-300 duration-300">
          <span
            className={isOpenPopup ? 'icon rotate-180 duration-300' : 'icon rotate-0 duration-300'}
          >
            <svg className="w-[30px] h-[30px]" viewBox="0 96 960 960">
              <path
                className="fill-current"
                d="M480 682.153 303.848 506.616h352.304L480 682.153Z"
              />
            </svg>
          </span>{' '}
          <span className="label w-[100px]">{activeFaculty}</span>
        </div>
      </div>
      {isOpenPopup && (
        <div className="popup absolute top-9 right-0 bg-white border shadow-lg rounded z-10 w-[140px]">
          <ul>{faculties}</ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
