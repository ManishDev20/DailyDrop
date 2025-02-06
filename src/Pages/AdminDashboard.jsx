import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "../components/Admin/AdminSidebar";
import AdminHeader from "../Components/Admin/AdminHeader";
import DashboardHome from "../components/Admin/DashboardHome";
import CustomerManagement from "../components/Admin/CustomerManagement";
import ProductManagement from "../components/Admin/ProductManagement";
import Settings from "../components/Admin/Settings";
import OrderManagement from "../Components/Admin/OrderManagement";
import DeliveryManagement from "../Components/Admin/DeliveryManagement";
import PaymentManagement from "../Components/Admin/PaymentManagement";
import BannerManagement from "../Components/Admin/BannerManagement";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex overflow-hidden">
      <AdminSidebar />
      <div className="flex-1">
        <AdminHeader />
        <main className="p-6">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="customer" element={<CustomerManagement />} />
            <Route path="orders" element={<OrderManagement />} />
            <Route path="products" element={<ProductManagement />} />
            <Route path="delivery" element={<DeliveryManagement />} />
            <Route path="payments" element={<PaymentManagement />} />
            <Route path="banners" element={<BannerManagement />} />
            <Route path="settings" element={<Settings />} />
            {/* Add redirect if no path matches */}
            <Route path="*" element={<Navigate to="/admin" />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
