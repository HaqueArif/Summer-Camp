import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useSelectedClass = () => {

    const {user, loading} = useAuth()
    const token = localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: classes = []} = useQuery({

        queryKey: ['classes', user?.email],
        enabled: !loading,
        queryFn: async () =>{
            const response = await axiosSecure(`/classes?email=${user.email}`)
            return response.data;
        },
    })

    return[classes, refetch]
    
    
};

export default useSelectedClass;