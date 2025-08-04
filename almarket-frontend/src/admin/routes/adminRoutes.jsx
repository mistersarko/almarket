import React from "react";
import AdminSidebar from "./layout/AdminSidebar";
import AdminRoutes from "./routes/adminRoutes";

const AdminApp = () => (
  <div className="flex">
    <AdminSidebar />
    <div className="flex-1 p-4">
      <AdminRoutes />
    </div>
  </div>
);

export default AdminApp;
