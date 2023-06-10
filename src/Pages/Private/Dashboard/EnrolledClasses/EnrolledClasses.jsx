import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useEnrolledClass from "../../../../hooks/useEnrolledClass";
import ShowEnrolledClasses from "./ShowEnrolledClasses";



const EnrolledClasses = () => {

    const {user, loading} = useAuth()
    const [payments] = useEnrolledClass();
    



  

    return (
        <div>
           
            
                {
                 payments.map((C, i) => <ShowEnrolledClasses  key={i} classData={C}/>
                   
                )   
                }
               
           
        </div>
    );
};

export default EnrolledClasses;