import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routeData } from "../constatnts/RoutesArray";
const router = createBrowserRouter(routeData);
const Router = () => {
  return <RouterProvider router={router} />;
};
export default Router;
