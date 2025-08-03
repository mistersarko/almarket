import React from 'react';

const ProductCard = ({ product, onClick }) => {
  return (
    <div
      onClick={() => onClick(product)}
      className="cursor-pointer border rounded-2xl p-4 shadow-md hover:shadow-lg transition duration-200"
    >
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-1">{product.description}</p>
      <p className="text-sm text-gray-800 font-bold">{product.price} TMT</p>
    </div>
  );
};

export default ProductCard;
