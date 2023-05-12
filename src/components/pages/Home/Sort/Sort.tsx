import React, { useState } from 'react';
import { ProductsData } from '../../../../models/interface';

interface ProductsDataProps {
  products: ProductsData[];
}

const Sort = (props: ProductsDataProps) => {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [activeFaculty, setActiveFaculty] = useState('none');

  const activePopupItemStyles =
    'font-semibold py-2 px-5 text-orange-400 bg-orange-100 cursor-pointer';
  const popupItemStyles = 'py-2 px-5 cursor-pointer';

  const allFaculties = props.products.map((product) => product.faculty);
  const faculties = [...new Set(allFaculties)].map((faculty, index) => (
    <li
      className={faculty === activeFaculty ? activePopupItemStyles : popupItemStyles}
      key={index}
      onClick={() => {
        setActiveFaculty(faculty ? faculty : 'none');
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
        <div className="flex gap-2 items-center border rounded">
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
