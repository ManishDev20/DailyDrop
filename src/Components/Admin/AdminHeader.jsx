import React from "react";
import { FaBell } from "react-icons/fa";

const AdminHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        {/* Title */}
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
          Dashboard
        </h2>

        {/* Notification and Admin Info */}
        <div className="flex items-center space-x-4">
          {/* Notification Button */}
          <button className="p-2 text-gray-600 hover:text-primary-600 focus:outline-none focus:ring focus:ring-primary-200 rounded">
            <FaBell className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          {/* Admin Info */}
          <div className="flex items-center space-x-2">
            <img
              src="/images/admin-avatar.jpg"
              alt="Admin"
              className="h-6 w-6 sm:h-8 sm:w-8 rounded-full"
            />
            <span className="text-sm sm:text-base font-medium text-gray-700 truncate max-w-[100px] sm:max-w-none">
              Admin User
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
