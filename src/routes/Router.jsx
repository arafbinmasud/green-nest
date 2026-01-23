import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import HomePage from "../pages/HomePage";
import AuthLayout from "../layouts/AuthLayout";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>
            }
        ]
        
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>
    }
])


export default router;