import React, { useState } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaClock, FaCheckCircle } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";

const OrderManagement = () => {
  const [orders] = useState([
    {
      id: "#ORD-2024-001",
      customer: "John Doe",
      date: "2024-01-15",
      total: "$45.99",
      status: "pending",
      items: 3,
      payment: "Credit Card",
    },
    {
      id: "#ORD-2024-002",
      customer: "Jane Smith",
      date: "2024-01-14",
      total: "$32.50",
      status: "delivered",
      items: 2,
      payment: "PayPal",
    },
  ]);

  const getStatusIcon = (status) => {
    switch (status) {
      case "pending":
        return <FaClock className="h-5 w-5 text-yellow-500" />;
      case "delivered":
        return <FaCheckCircle className="h-5 w-5 text-green-500" />;
      case "cancelled":
        return <GoXCircleFill className="h-5 w-5 text-red-500" />;
      case "shipping":
        return <TbTruckDelivery className="h-5 w-5 text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "delivered":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "shipping":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Order Management</h2>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search orders..."
            className="px-4 py-2 border rounded-lg"
          />
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700">
            Export Orders
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <select className="px-4 py-2 border rounded-lg">
          <option value="">All Status</option>
          <option value="pending">Pending</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
        <input
          type="date"
          className="px-4 py-2 border rounded-lg"
          placeholder="Start Date"
        />
        <input
          type="date"
          className="px-4 py-2 border rounded-lg"
          placeholder="End Date"
        />
        <button className="px-4 py-2 border rounded-lg hover:bg-gray-50">
          Filter
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Items
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {order.id}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{order.customer}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{order.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{order.items}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {order.total}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{order.payment}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    {getStatusIcon(order.status)}
                    <span
                      className={`ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(
                        order.status
                      )}`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button className="text-primary-600 hover:text-primary-900 mr-3">
                    View
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    Print
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">Showing 1 to 2 of 2 orders</div>
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

export default OrderManagement;
