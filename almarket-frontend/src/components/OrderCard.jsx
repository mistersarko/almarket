import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="border p-4 rounded-lg shadow mb-4">
      <p><strong>ID:</strong> {order.id}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Game:</strong> {order.game}</p>
      <p><strong>Amount:</strong> {order.amount}</p>
    </div>
  );
};

export default OrderCard;
