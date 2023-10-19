import { useEffect, useState } from "react";


const useClasses = () => {

    const [allClasses, setAllClasses] = useState([]);
    console.log(allClasses)
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setAllClasses(data)
            })
    }, [])
    
    return (
        <div>
            
        </div>
    );
};

export default useClasses;