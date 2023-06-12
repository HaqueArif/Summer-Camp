import { useEffect, useState } from "react";


const PopularInstructors = () => {

    const [classes, setClasses] = useState([]);
    
    console.log(classes);
    useEffect(() => {
        fetch('https://summer-camp-school-server-steel.vercel.app/instructors')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setClasses(data)
            })
    }, [])
    const topInstructors = classes
    .sort((a, b) => b.students - a.students)
    .slice(0, 6);


    return (
        <div className="pb-20">
            <div className="px-2 xl:px-40 lg:px-10">
                <div className="text-center">
                    <h3 className="text-3xl font-bold text-[#262261] ">Summer Camp Instructor</h3>
                    <h1 className="text-5xl md:text-7xl font-bold text-[#262261] ">Our Popular Instructor</h1>
                    <p className="text-[#262261] mt-3">Our summer camp is proud to feature some of the most talented and popular instructors in the industry. With their expertise and passion, they inspire and guide our campers to reach new heights. Join our summer camp and learn from these renowned instructors who are dedicated to helping you succeed and have an unforgettable experience!</p>
                </div>
                <div className=" ">

                    <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 md:gap-y-10 gap-x-5 pt-5  ">
                        {topInstructors.map(instructor => (
                            <img
                                key={instructor.instructor_name}
                                src={instructor.instructor_image}
                                alt={instructor.instructor_name}
                                className="h-full hover-effect2 border-4 shadow-lg rounded-t-3xl rounded-r-3xl"
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PopularInstructors;