import React from 'react';

const ItemCard = ({ item, onAdd }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-bold">{item.name
