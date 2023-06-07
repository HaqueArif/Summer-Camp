import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import './instructors.css'


const Instructors = () => {

    const [instructors, setInstructors] = useState([]);
    console.log(instructors)
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setInstructors(data)
            })
    }, [])
    return (
        <div className="banner">
            <div className="px-2 xl:px-40 lg:px-10 grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-5 py-20 instractBanner">
                {
                    instructors.map((instructor, index) =>
                        <InstructorCard
                            key={index}
                            instructor={instructor}
                        ></InstructorCard>
                    )
                }
            </div>
        </div>
    );
};

export default Instructors;