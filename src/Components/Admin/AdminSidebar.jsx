import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUser, FaShoppingBag, FaRegCreditCard } from "react-icons/fa";
import { FaCubes, FaImage } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";

const menuItems = [
  { path: "/admin", icon: FaHome, label: "Dashboard" },
  { path: "/admin/customer", icon: FaUser, label: "Customers" },
  { path: "/admin/orders", icon: FaShoppingBag, label: "Orders" },
  { path: "/admin/products", icon: FaCubes, label: "Products" },
  { path: "/admin/delivery", icon: TbTruckDelivery, label: "Delivery" },
  { path: "/admin/payments", icon: FaRegCreditCard, label: "Payments" },
  { path: "/admin/banners", icon: FaImage, label: "Banners" },
  { path: "/admin/settings", icon: IoSettings, label: "Settings" },
];

const AdminSidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-white shadow-md min-h-screen w-64 fixed sm:static sm:w-64">
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200">
        <h1 className="text-lg sm:text-xl font-bold text-primary-600">
          Admin Dashboard
        </h1>
      </div>

      {/* Navigation Links */}
      <nav className="mt-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-4 py-3 rounded-md text-sm sm:text-base text-gray-700 hover:bg-primary-50 hover:text-primary-600 ${
                isActive ? "bg-primary-50 text-primary-600 font-medium" : ""
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminSidebar;
