import React from 'react';

const statusColors = {
  Garasylyar: 'bg-yellow-200 text-yellow-800',
  Gowşuryldy: 'bg-green-200 text-green-800',
  Ýatyryldy: 'bg-red-200 text-red-800',
};

const OrderStatusBadge = ({ status }) => {
  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${statusColors[status] || 'bg-gray-200 text-gray-800'}`}
    >
      {status}
    </span>
  );
};

export default OrderStatusBadge;
