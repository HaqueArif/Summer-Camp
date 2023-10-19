import { useEffect, useState } from "react";
import ClasseCard from "./ClasseCard";


const Classes = () => {
    

    const [classes, setClasses] = useState([]);

useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((data) => {
        const filteredClasses = data.filter(
          (c) => !c.status || c.status === "approved"
        );
        setClasses(filteredClasses);
      });
  }, []);



    return (
        <div className="homeBanner">
            <div className="">
                <div className="px-2 xl:px-40 lg:px-10 py-20">
                    <div className="text-center">
                        <h3 className="text-3xl font-bold text-[#262261] ">Summer Camp Classes</h3>
                        <h1 className="text-5xl md:text-7xl font-bold text-[#262261] ">Our Classes</h1>
                        <p className="text-[#262261] mt-3">Join our summer camp and discover our popular classes that are loved by kids of all ages. Our expert instructors offer a wide range of exciting activities to keep your child engaged and entertained. From basketball and soccer camps to swimming lessons and golf training, we have something for everyone. Enhance your skills, make new friends, and have a blast in our interactive and fun-filled classes. Don't miss out on this incredible opportunity to learn from the best. Enroll in our popular classes today!</p>
                    </div>
                    <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-y-20 gap-x-5 pt-5 ">
                        {
                            classes.map((c, index) =>
                                <ClasseCard key={index} classData={c}></ClasseCard>
                            )
                        }
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Classes;