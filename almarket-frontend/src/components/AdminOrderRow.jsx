import React from "react";
import OrderStatusBadge from "./OrderStatusBadge";

const AdminOrderRow = ({ order, onDeliverClick }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-2">{order.id}</td>
      <td className="p-2">{order.username}</td>
      <td className="p-2">{order.game}</td>
      <td className="p-2">{order.ucAmount}</td>
      <td className="p-2">
        <OrderStatusBadge status={order.status} />
      </td>
      <td className="p-2">
        <button
          onClick={() => onDeliverClick(order.id)}
          className="px-2 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
        >
          Gowşuryldy
        </button>
      </td>
    </tr>
  );
};

export default AdminOrderRow;
