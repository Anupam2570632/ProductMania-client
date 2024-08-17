import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Spinner } from "@material-tailwind/react";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)

    const location = useLocation()

    if (loading) {
        return <div className='flex items-center justify-center py-10'>
            <Spinner className="h-16 w-16 text-gray-900/50" />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to={'/login'} state={location.pathname}></Navigate>

};

export default PrivateRoute;