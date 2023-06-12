import useMyClasses from "../../../../hooks/useMyClasses";

const MyClasses = () => {
    const [myClasses, refetch] = useMyClasses();

    const handleUpdate = (classId) => {
        console.log(`Update class with ID: ${classId}`);
    };

    

    return (
        <div>
            {myClasses.map((instructor, index) => (
                <div key={index}>
                    <h3>{instructor.instructor_name}</h3>
                    <p>{instructor.instructor_email}</p>
                    {instructor.classes.map((course, i) => (
                        <div key={i}>
                            <h4>{course.name}</h4>
                            <p>Price: {course.price}</p>
                            <p>Seats: {course.seats}</p>
                            <p>Students: {course.students}</p>
                            <p>Status: {course.status}</p>
                            <img src={course.image} alt={course.name} />
                            <p>Feedback: {course.feedback}</p>
                            <button onClick={() => handleUpdate(course.class_id)}>
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default MyClasses;
