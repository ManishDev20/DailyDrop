import React from "react";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Home />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};

export default App;
