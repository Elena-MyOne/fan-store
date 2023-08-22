import React from 'react';
import style from './Collections.module.scss';
import { CATEGORIES, FACULTY, ROUTER_PATH } from '../../../../models/enums';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setActiveCategory, setActiveFaculty } from '../../../../redux/slices/FilterSlice';

const Collections: React.FC = () => {
  const dispatch = useDispatch();

  const onClickCollections = (faculty: string): void => {
    dispatch(setActiveFaculty(faculty));
    dispatch(setActiveCategory(CATEGORIES.ALL));
    window.scrollTo(0, 0);
  };
  const linkStyles = `bg-[rgba(0,0,0,0.2)] x-10 pt-28 pb-5 rounded-xl h-full block`;

  return (
    <section className="md:py-20 py-10 container m-auto">
      <h2 className="title font-semibold text-xl md:mb-4 mb-2">Collections</h2>
      <ul className="items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center justify-between text-center">
        <li
          className={`${style.one} h-72 text-white font-fjalla hover:text-orange-400 duration-300 text-xl rounded-xl cursor-pointer`}
          onClick={() => onClickCollections(FACULTY.GRYFFINDOR)}
        >
          <Link to={ROUTER_PATH.HOME} className={linkStyles}>
            Gryffindor
          </Link>
        </li>
        <li
          className={`${style.two} h-72 text-white font-fjalla hover:text-orange-400 duration-300 text-xl rounded-xl cursor-pointer`}
          onClick={() => onClickCollections(FACULTY.HUFFLEPUFF)}
        >
          <Link to={ROUTER_PATH.HOME} className={linkStyles}>
            Hufflepuff
          </Link>
        </li>
        <li
          className={`${style.three} h-72 text-white font-fjalla hover:text-orange-400 duration-300 text-xl rounded-xl cursor-pointer`}
          onClick={() => onClickCollections(FACULTY.RAVENCLAW)}
        >
          <Link to={ROUTER_PATH.HOME} className={linkStyles}>
            Ravenclaw
          </Link>
        </li>
        <li
          className={`${style.four} h-72 text-white font-fjalla hover:text-orange-400 duration-300 text-xl rounded-xl cursor-pointer`}
          onClick={() => onClickCollections(FACULTY.SLYTHERIN)}
        >
          <Link to={ROUTER_PATH.HOME} className={linkStyles}>
            Slytherin
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Collections;
