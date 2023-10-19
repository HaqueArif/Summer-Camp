
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingGif from '../assets/loading_indicator.gif'


const PrivateRoute = ({ children }) => {

    const navigate = useNavigate();
    const { user, loading } = useAuth();
    const location = useLocation();
    
    if (loading) {
        
        return <div className="min-h-screen flex justify-center items-center">
            <img src={loadingGif} alt="loading" className="w-60" />
        </div>
    }


    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{from: location }} replace/>
};

export default PrivateRoute;