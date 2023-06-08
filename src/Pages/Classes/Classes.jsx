import { useEffect, useState } from "react";
import ClasseCard from "./ClasseCard";


const Classes = () => {
    const [classes, setClasses] = useState([]);
    console.log(classes)
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])
    return (
        <div className="banner">
            <div className="px-2 xl:px-40 lg:px-10 grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-5 py-20 instractBanner">
                {
                    classes.map((c, index) =>
                        <ClasseCard key={index} classData={c}></ClasseCard>
                    )
                }
            </div>
        </div>
    );
};

export default Classes;