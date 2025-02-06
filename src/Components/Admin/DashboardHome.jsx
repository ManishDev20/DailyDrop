import React from "react";
import { FaChartBar, FaUser, FaShoppingBag } from "react-icons/fa";
import { BsCurrencyDollar } from "react-icons/bs";

const DashboardHome = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$12,345",
      icon: BsCurrencyDollar,
      change: "+12%",
      changeType: "increase",
    },
    {
      title: "Active Customers",
      value: "1,234",
      icon: FaUser,
      change: "+5%",
      changeType: "increase",
    },
    {
      title: "Pending Orders",
      value: "45",
      icon: FaShoppingBag,
      change: "-2%",
      changeType: "decrease",
    },
    {
      title: "Average Order Value",
      value: "$75",
      icon: FaChartBar,
      change: "+8%",
      changeType: "increase",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-semibold mt-1">{stat.value}</p>
                </div>
                <div
                  className={`p-3 rounded-full ${
                    stat.changeType === "increase"
                      ? "bg-green-100"
                      : "bg-red-100"
                  }`}
                >
                  <Icon
                    className={`h-6 w-6 ${
                      stat.changeType === "increase"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  />
                </div>
              </div>
              <div className="mt-4">
                <span
                  className={`text-sm ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change} from last month
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
          {/* Add recent orders table/list here */}
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
          {/* Add sales chart here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
