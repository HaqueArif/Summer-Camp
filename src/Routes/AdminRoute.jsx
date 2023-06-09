import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import loadingGif from '../assets/loading_indicator.gif'


const AdminRoute = ({ children }) => {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <div className="min-h-screen flex justify-center items-center">
            <img src={loadingGif} alt="loading" className="w-60" />
        </div>
    }


    if (user && isAdmin) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace />
};

export default AdminRoute;