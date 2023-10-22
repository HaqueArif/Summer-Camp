import React, { useEffect, useState } from 'react';

const useAllInstructors = () => {
    const [instructors, setInstructors] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    

    useEffect(() => {
        fetch("http://localhost:5000/instructors")
            .then((res) => res.json())
            .then((data) => {
                const filteredClasses = data.filter(
                    (c) => !c.status || c.status === "approved"
                );
                setInstructors(filteredClasses);
                setIsLoading(false); 
            });
    }, []);

    return { instructors, isLoading };
};

export default useAllInstructors;