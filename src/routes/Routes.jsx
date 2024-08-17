import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <AllProducts />
            },
            {
                path:'contact',
                element:<ContactUs/>
            }

        ],

    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    }
]);

export default router;