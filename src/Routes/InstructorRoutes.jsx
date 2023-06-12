import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loadingGif from '../assets/loading_indicator.gif'
import useInstructor from "../hooks/useInstructor";

const InstructorRoutes = ({children}) => {
    
    const { user, loading } = useAuth()
    const [isInstructor, isInstructorLoading] = useInstructor()
    const location = useLocation();

    if (loading || isInstructorLoading) {
        return <div className="min-h-screen flex justify-center items-center">
            <img src={loadingGif} alt="loading" className="w-60" />
        </div>
    }


    if (user && isInstructor) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace />
};

export default InstructorRoutes;