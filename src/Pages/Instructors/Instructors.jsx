import { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard";
import './instructors.css'


const Instructors = () => {

    const [instructors, setInstructors] = useState([]);
    console.log(instructors)
    useEffect(() => {
        fetch("https://summer-camp-school-server-steel.vercel.app/instructors")
          .then((res) => res.json())
          .then((data) => {
            const filteredClasses = data.filter(
              (c) => !c.status || c.status === "approved"
            );
            setInstructors(filteredClasses);
          });
      }, []);
    return (
        <div className="px-2 xl:px-40 lg:px-10 py-20 homeBanner">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-[#262261] ">Summer Camp Instructor</h3>
                <h1 className="text-5xl md:text-7xl font-bold text-[#262261] ">Our Instructor</h1>
                <p className="text-[#262261] mt-3">Our summer camp is proud to feature some of the most talented and popular instructors in the industry. With their expertise and passion, they inspire and guide our campers to reach new heights. Join our summer camp and learn from these renowned instructors who are dedicated to helping you succeed and have an unforgettable experience!</p>
            </div>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-5 py-5">
                
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