import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEnrolledClass = () => {

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: payments = [] } = useQuery({
        queryKey: [ user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/enrolled?email=${user.email}`);
            return response.data;
        },
    });

    return [payments, refetch];

    
};

export default useEnrolledClass;