import { FaCheckCircle } from "react-icons/fa";

const ShowEnrolledClasses = ({ classData }) => {
    const { classes } = classData;
    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">

                    <tbody>
                        {
                            classes.map((Class, index) =>
                                <tr key={index}

                                >

                                    <td>
                                        <div key={index}>
                                            <div className="card card-side ps-3 bg-base-100 shadow">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-20">
                                                        <img src={Class.classImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div className="card-body">
                                                    <div className="flex items-center justify-between">
                                                        <h2 className="card-title">{Class.className} </h2>
                                                        <span className="text-blue-700 text-xl"><FaCheckCircle /> </span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                </tr>

                            )
                        }

                    </tbody>
                </table>
               

            </div>
        </div>
    );
};

export default ShowEnrolledClasses;