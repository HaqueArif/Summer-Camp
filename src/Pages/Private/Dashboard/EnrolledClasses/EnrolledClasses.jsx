
import useEnrolledClass from "../../../../hooks/useEnrolledClass";
import { FaCheckCircle } from "react-icons/fa";



const EnrolledClasses = () => {

    const [payments] = useEnrolledClass();






    return (
        <div className="overflow-x-auto w-full mb-40">
            <table className="table w-full">

                <tbody>

                    {
                        payments.map((Classes, i) => <tr key={i}>
                            <td>
                                <div>
                                    <div className="card card-side ps-3 bg-base-100 shadow">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-20">
                                                <img src={Classes.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <div className="flex items-center justify-between">
                                                <h2 className="card-title">{Classes.className} </h2>
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
    );
};

export default EnrolledClasses;