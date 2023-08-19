import React from 'react';

const ResetFilters: React.FC = () => {
  return (
    <>
      <div className="body my-4 ">
        <button className="inline-block reset py-2 px-5 text-center bg-gray-700 hover:bg-orange-500 cursor-pointer rounded-3xl text-white duration-300">
          Reset filters
        </button>
      </div>
    </>
  );
};

export default ResetFilters;
