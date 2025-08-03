import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-100 p-4">
      <h2 className="text-lg font-bold mb-4">Admin Menýu</h2>
      <ul className="space-y-2">
        <li><Link to="/admin/dashboard" className="hover:underline">Baş sahypa</Link></li>
        <li><Link to="/admin/orders" className="hover:underline">Sargytlar</Link></li>
        <li><Link to="/admin/products" className="hover:underline">Önümler</Link></li>
        <li><Link to="/admin/users" className="hover:underline">Ulanyjylar</Link></li>
        <li><Link to="/admin/chat" className="hover:underline">Söhbet</Link></li>
        <li><Link to="/admin/settings" className="hover:underline">Sazlamalar</Link></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;
