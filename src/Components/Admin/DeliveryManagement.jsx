import React, { useState } from "react";
import { FaClock } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { LuMapPin } from "react-icons/lu";

const DeliveryManagement = () => {
  const [deliveries] = useState([
    {
      id: "DEL-2024-001",
      orderId: "#ORD-2024-001",
      customer: "John Doe",
      address: "123 Main St, Fresh City",
      status: "in-transit",
      driver: "Mike Wilson",
      estimatedDelivery: "2024-01-20 14:30",
    },
    {
      id: "DEL-2024-002",
      orderId: "#ORD-2024-002",
      customer: "Jane Smith",
      address: "456 Oak Ave, Fresh City",
      status: "pending",
      driver: "Sarah Johnson",
      estimatedDelivery: "2024-01-20 16:00",
    },
  ]);

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "in-transit":
        return "bg-blue-100 text-blue-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Delivery Management</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search deliveries..."
            className="px-4 py-2 border rounded-lg"
          />
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
            Assign Driver
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Pending Deliveries</p>
              <p className="text-2xl font-semibold mt-1">12</p>
            </div>
            <div className="p-3 bg-yellow-100 rounded-full">
              <FaClock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">In Transit</p>
              <p className="text-2xl font-semibold mt-1">8</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-full">
              <TbTruckDelivery className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Delivered Today</p>
              <p className="text-2xl font-semibold mt-1">15</p>
            </div>
            <div className="p-3 bg-green-100 rounded-full">
              <LuMapPin className="h-6 w-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Delivery ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Driver
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Est. Delivery
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {deliveries.map((delivery) => (
              <tr key={delivery.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {delivery.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {delivery.orderId}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {delivery.customer}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {delivery.address}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{delivery.driver}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(
                      delivery.status
                    )}`}
                  >
                    {delivery.status.charAt(0).toUpperCase() +
                      delivery.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">
                    {delivery.estimatedDelivery}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900 mr-3">
                    Track
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Showing 1 to 2 of 2 deliveries
        </div>
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

export default DeliveryManagement;
