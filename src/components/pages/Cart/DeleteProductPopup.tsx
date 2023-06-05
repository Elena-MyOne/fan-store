import React from 'react';

const DeleteProductPopup = () => {
  return (
    <div className="absolute bg-black/[0.3] w-full h-full flex items-center justify-center">
      <div className="bg-white rounded p-2 pt-5">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default DeleteProductPopup;
