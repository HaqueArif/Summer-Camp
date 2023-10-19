import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClasses = () => {
      const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: [ 'myClasses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const response = await axiosSecure.get(`/users/instructor/?email=${user.email}`);
            return response.data;
        },
    });

    return [myClasses, refetch];
};

export default useMyClasses;