import { useEffect } from "react";


const useClasses = () => {

    const [allClasses, setAllClasses] = useState([]);
    console.log(allClasses)
    useEffect(() => {
        fetch('https://summer-camp-school-server-steel.vercel.app/instructors')
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