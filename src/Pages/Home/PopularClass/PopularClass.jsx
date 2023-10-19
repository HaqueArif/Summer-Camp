import { useEffect, useState } from "react";


const PopularClass = () => {

    const [classes, setClasses] = useState([]);
    // console.log(classes);
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => {
                setClasses(data)
            })
    }, [])

    const topClasses = classes.flatMap(instructor => instructor.classes)
        .sort((a, b) => b.students - a.students)
        .slice(0, 6);


    return (
        <div className="mt-40 px-2 xl:px-40 lg:px-10">
            <div className="text-center">
                <h3 className="text-3xl font-bold text-[#262261] ">Summer Camp Classes</h3>
                <h1 className="text-5xl md:text-7xl font-bold text-[#262261] ">Our Popular Classes</h1>
                <p className="text-[#262261] mt-3">Join our summer camp and discover our popular classes that are loved by kids of all ages. Our expert instructors offer a wide range of exciting activities to keep your child engaged and entertained. From basketball and soccer camps to swimming lessons and golf training, we have something for everyone. Enhance your skills, make new friends, and have a blast in our interactive and fun-filled classes. Don't miss out on this incredible opportunity to learn from the best. Enroll in our popular classes today!</p>
            </div>
            <div className="pt-5">

                <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-y-5 md:gap-y-10 gap-x-5">
                    {topClasses.map(classItem => (
                        <img
                            key={classItem.class_id}
                            src={classItem.image}
                            alt={classItem.name}
                            className="h-full hover-effect border-4 shadow-lg rounded-t-3xl rounded-r-3xl"
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PopularClass;