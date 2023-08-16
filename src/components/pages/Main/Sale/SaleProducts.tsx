import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../../../redux/slices/ProductsSlice';

const SaleProduct: React.FC = () => {
  const { saleProducts } = useSelector(selectProducts);
  const sale = saleProducts.slice(0, 4);

  return (
    <div className="body grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center items-center justify-between gap-6">
      {sale.map((product) => (
        <div
          className="product hover:shadow-lg duration-300 border pt-10 pb-4 border-gray-300 px-4 rounded-lg flex flex-col gap-2 items-center relative"
          key={product.id}
        >
          <div className="image h-[230px] m-auto">
            <img className="h-full" src={product.image} alt={product.category} />
          </div>
          <div className="content">
            <div className="sale absolute top-2 right-2 text-lg font-semibold text-orange-400">
              -{product.sale}%
            </div>
            <div className="title text-lg mb-3">{product.name}</div>
            <div className="price font-semibold">${product.price.toFixed(2)}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaleProduct;
