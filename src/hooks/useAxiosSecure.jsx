import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAuth from "./useAuth";


const axiosSecure = axios.create({
    baseURL: 'https://summer-camp-school-server-steel.vercel.app',
})

const useAxiosSecure = () => {
    const {logOut} = useAuth()
    const navigate = useNavigate()
    
    
    useEffect(()=>{
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('access-token')
            if(token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async(error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403 )){
                    navigate('/login')
                    await logOut();
                   
                }
                return Promise.reject(error)
            }
        )
    },[logOut, navigate, axiosSecure ])
    return [axiosSecure]
};

export default useAxiosSecure;