import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
                loader: () => fetch("/plants.json"),
            }
        ]
        
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            
        ]
    }
])


export default router;