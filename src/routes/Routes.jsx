import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import AllProducts from "../pages/AllProducts";

const router = createBrowserRouter([
    {
        path: "/",
        element:<Main/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/products',
                element:<AllProducts/>
            }
        ]
    },
]);

export default router;