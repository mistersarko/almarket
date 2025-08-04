import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => (
  <div className="w-64 bg-slate-800 text-white h-screen p-4">
    <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
    <ul className="space-y-2">
      <li><Link to="/admin/dashboard">Dashboard</Link></li>
      <li><Link to="/admin/orders">Orders</Link></li>
      <li><Link to="/admin/products">Products</Link></li>
      <li><Link to="/admin/users">Users</Link></li>
      <li><Link to="/admin/settings">Settings</Link></li>
      <li><Link to="/admin/chat">Chat</Link></li>
    </ul>
  </div>
);

export default AdminSidebar;
