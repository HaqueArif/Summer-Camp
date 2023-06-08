import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";


const useSelectedClass = () => {

    const {user} = useAuth()
    const {isLoading, refetch, data: classes = []} = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async()=>{
            const response = await fetch(`http://localhost:5000/classes?email=${user.email}`)
            return response.json();
        }
    })

    return[classes, refetch]
    
    
};

export default useSelectedClass;