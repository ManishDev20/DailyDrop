import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import AdminDashboard from "./Pages/AdminDashboard";

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/admin/*",
      element: <AdminDashboard />,
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
