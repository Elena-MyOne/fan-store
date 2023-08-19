import React from 'react';
import style from './StarsRating.module.scss';

interface StarsRatingProps {
  rate: number;
}

const StarsRating: React.FC<StarsRatingProps> = (props) => {
  const itemStyles = 'item text-gray-300 cursor-pointer text-lg duration-300';
  return (
    <>
      <div
        className={`${style.rating} inline-flex flex-row-reverse items-center justify-center`}
        data-total-value={Math.floor(props.rate)}
      >
        <div className={`${itemStyles} ${style.item}`} data-item-value={5}>
          ★
        </div>
        <div className={`${itemStyles} ${style.item}`} data-item-value={4}>
          ★
        </div>
        <div className={`${itemStyles} ${style.item}`} data-item-value={3}>
          ★
        </div>
        <div className={`${itemStyles} ${style.item}`} data-item-value={2}>
          ★
        </div>
        <div className={`${itemStyles} ${style.item}`} data-item-value={1}>
          ★
        </div>
      </div>
    </>
  );
};

export default StarsRating;
