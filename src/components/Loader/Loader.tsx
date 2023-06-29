import React from 'react';
import style from './Loader.module.scss';

interface LoaderProps {
  text: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center h-full flex-col gap-5 h-80 w-[310px]">
        <div className={style.dots}>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
          <div className={style.dot}></div>
        </div>
        <div className="text">
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
