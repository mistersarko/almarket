import React from "react";

const UCItem = ({ item, onSelect }) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className="border rounded-lg p-4 hover:shadow cursor-pointer flex flex-col items-center"
    >
      <div className="text-xl font-bold">{item.amount} UC</div>
      <div className="text-sm text-gray-500">{item.points} bal</div>
    </div>
  );
};

export default UCItem;
