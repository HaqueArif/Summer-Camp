

const InstructorCard = ({ instructor }) => {

    const { instructor_email, instructor_image, instructor_name, classes } = instructor;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
            <figure><img src={instructor_image} alt="Instructor Photo" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor_name}</h2>
                <p className="font-bold">{instructor_email}</p>
                <p className="font-bold">Total Classes: {classes.length}</p>
                <p className="font-bold">Classes: {
                classes.map((c, index)=>
                    <span key={index}> {c.name},</span>
                    )
            }</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;