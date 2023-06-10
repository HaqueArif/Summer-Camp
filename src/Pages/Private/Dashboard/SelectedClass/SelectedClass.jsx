import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import { Link } from "react-router-dom";


const SelectedClass = () => {

    const { user, loading } = useAuth()

    const [classes, refetch] = useSelectedClass()
    
    
    // if (!classes) {
    //     refetch();
    // }
    console.log(classes);
    const total = classes.reduce((sum, Class) => Class.Class.price + sum, 0)
    console.log(total);
    
    const handleDelete = (Class) => {
        // console.log(Class);

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/classes/${Class._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your food has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
    

    return (
        <div>
            <div className="flex justify-between mb-8">
                <p> <span className="text-3xl font-bold"> Total Selected class:</span>
                    <span className="text-3xl font-bold text-orange-700"> {classes.length}</span>
                </p>
                <div className="flex items-center gap-3">
                    <p className="text-3xl font-bold">Total: <span className="text-3xl font-bold text-orange-700">${total}</span></p>
                    <Link to='/dashboard/payment' className="btn text-xl shadow-md font-bold hover:bg-[#C0E246] text-white bg-orange-700">Pay</Link>
                </div>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class Photo</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((Class, index) =>
                                <tr key={index}

                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-20">
                                                    <img src={Class.Class.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {Class.Class.name}
                                    </td>
                                    <td>${Class.Class.price}</td>
                                    <th>
                                        <button onClick={() => handleDelete(Class)} className="btn btn-square bg-red-500"><FaTrash /></button>
                                    </th>
                                </tr>

                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectedClass;