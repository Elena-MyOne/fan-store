import React from 'react';

const ProductsEmpty: React.FC = () => {
  return (
    <div className="font-semibold text-center my-5">
      <p>Ups... 😕</p>
      <p>There are no matching results based on the selected filters</p>
    </div>
  );
};

export default ProductsEmpty;
