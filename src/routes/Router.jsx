import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "../provider/PrivateRoute";
import UpdateProfile from "../pages/UpdateProfile";
import Plants from "../pages/Plants";
import PlantDetails from "../pages/PlantDetails";
import ErrorPage from "../pages/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
        loader: () => fetch("/plants.json")
      },
      {
        path: "/my-profile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch("/plants.json")
      },
      {
        path: "/update-profile",
        element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      }, 
      {
        path: "/plant-details/:id",
        element: <PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>,
        loader: () => fetch("/plants.json")
      }
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
