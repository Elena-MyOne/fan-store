import React from 'react';
import style from './Loader.module.scss';

interface LoaderProps {
  text: string;
}

const Loader = ({ text }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center h-full flex-col gap-5">
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
  );
};

export default Loader;
