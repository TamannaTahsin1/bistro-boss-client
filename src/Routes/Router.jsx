import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Pages/Secret/Secret";
import PrivateROute from "./PrivateROute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Dashboard/Cart/Cart";
import AllUsers from "../Dashboard/Cart/AllUsers/AllUsers";
import AddItem from "../Dashboard/Cart/AddItem/AddItem";
// import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/secret",
        element: <PrivateROute><Secret></Secret></PrivateROute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      // normal user routes
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      // admin routes
      {
        path: "addItems",
        element: <AddItem></AddItem>,
        // element: <AdminRoute><AddItem></AddItem></AdminRoute>,
      },
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
    ]
  },
]);
export default router;
