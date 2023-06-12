

const InstructorCard = ({ instructor }) => {

    const { instructor_email, instructor_image, instructor_name, classes } = instructor;

    return (
        <div className="card card-compact border border-[#bbee02] rounded-tl-3xl rounded-br-3xl bg-base-100 shadow-xl">
            <figure><img src={instructor_image} alt="Instructor Photo" /></figure>
            <div className="card-body">
                <h2 className="card-title"><span></span>{instructor_name}</h2>
                <p><span className="font-bold">Total Classes:</span> {classes.length}</p>
                <p><span className="font-bold">Classes:</span> {
                classes.map((c, index)=>
                    <span key={index}> {c.name},</span>
                    )
            }</p>
            <p><span className="font-bold">Email: </span>{instructor_email}</p>
                <div className="card-actions justify-end">
                    <button className="btn w-full shadow-xl font-extrabold bg-white hover:text-[#204FB6] hover:bg-[#bbee02] text-[#262261] text-xl">See Classes</button>
                </div>
            </div>
        </div>
    );
};

export default InstructorCard;