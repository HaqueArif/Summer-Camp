import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AllUsers = () => {


    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    
    return (
        <div>
            <h2>{users.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i)=>
                            <tr className="hover" key={i} >
                            <th>{i + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>{user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : 'User'}</td>

                            <td className="flex flex-col gap-2">
                                <button onClick={()=>handleMakeAdmin(user)} disabled={user.role === 'admin'} className="btn btn-sm">Admin</button>
                                <button onClick={()=>handleMakeAdmin(user)} disabled={user.role === 'instructor'} className="btn btn-sm">Instructor</button>
                            
                            </td>
                            
                        </tr>  )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;