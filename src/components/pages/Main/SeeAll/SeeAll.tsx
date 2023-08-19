import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, FACULTY, ROUTER_PATH, SORT } from '../../../../models/enums';
import { useDispatch } from 'react-redux';
import {
  setActiveCategory,
  setActiveFaculty,
  setRatingForMainPage,
  setSaleForMainPage,
} from '../../../../redux/slices/FilterSlice';

interface SeeAllProps {
  all?: string;
}

const SeeAll: React.FC<SeeAllProps> = (props) => {
  const dispatch = useDispatch();

  const onClickSeeAll = () => {
    if (props.all === SORT.SALE) {
      dispatch(setSaleForMainPage());
    }
    if (props.all === SORT.RATE) {
      dispatch(setRatingForMainPage());
    }
    dispatch(setActiveFaculty(FACULTY.ALL));
    dispatch(setActiveCategory(CATEGORIES.ALL));
    window.scrollTo(0, 0);
  };

  return (
    <div className="all" onClick={onClickSeeAll}>
      <Link
        to={ROUTER_PATH.HOME}
        className="hover:text-orange-400 duration-300 text-lg cursor-pointer flex gap-2 items-center"
      >
        <span>See all</span>
        <svg className="w-[25px] h-[25px]" viewBox="0 -960 960 960">
          <path
            className="fill-current"
            d="m553.846-255.463-32.615-31.614 171.847-171.847H180.001v-45.383h513.077L520.616-676.769l32.614-31.615 226.769 226.769-226.153 226.152Z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default SeeAll;
