import React, { useState } from "react";

import { FaImage } from "react-icons/fa6";
import { FaPlusCircle, FaPencilAlt, FaTrash } from "react-icons/fa";

const BannerManagement = () => {
  const [banners] = useState([
    {
      id: 1,
      title: "Summer Sale",
      image: "/images/summer-sale-banner.jpg",
      status: "active",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      position: "home_top",
    },
    {
      id: 2,
      title: "Fresh Arrivals",
      image: "/images/fresh-arrivals-banner.jpg",
      status: "scheduled",
      startDate: "2024-02-01",
      endDate: "2024-02-28",
      position: "home_middle",
    },
  ]);

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "scheduled":
        return "bg-blue-100 text-blue-800";
      case "expired":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Banner Management</h2>
        <button className="flex items-center bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
          <FaPlusCircle className="h-5 w-5 mr-2" />
          Add New Banner
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Active Banners</p>
              <p className="text-2xl font-semibold mt-1">4</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <FaImage className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Scheduled</p>
              <p className="text-2xl font-semibold mt-1">2</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <FaImage className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Banners</p>
              <p className="text-2xl font-semibold mt-1">6</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-full">
              <FaImage className="h-6 w-6 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-1 gap-6 p-6">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="flex flex-col md:flex-row gap-6 p-4 border rounded-lg"
            >
              <div className="w-full md:w-64 h-40 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold">{banner.title}</h3>
                    <p className="text-sm text-gray-500">
                      Position: {banner.position}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(
                      banner.status
                    )}`}
                  >
                    {banner.status.charAt(0).toUpperCase() +
                      banner.status.slice(1)}
                  </span>
                </div>
                <div className="flex gap-4 text-sm text-gray-600">
                  <div>
                    <p className="font-medium">Start Date</p>
                    <p>{banner.startDate}</p>
                  </div>
                  <div>
                    <p className="font-medium">End Date</p>
                    <p>{banner.endDate}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center text-primary-600 hover:text-primary-700">
                    <FaPencilAlt className="h-4 w-4 mr-1" />
                    Edit
                  </button>
                  <button className="flex items-center text-red-600 hover:text-red-700">
                    <FaTrash className="h-4 w-4 mr-1" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Showing 1 to 2 of 2 banners</div>
        <div className="flex space-x-2">
          <button
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
            disabled
          >
            Previous
          </button>
          <button
            className="px-4 py-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerManagement;
