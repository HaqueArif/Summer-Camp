import Swal from 'sweetalert2';
import { useState } from 'react'; // Import useState
import bg1 from '../../assets/electives_white-sparkle-bg.png'

import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useSelectedClass from '../../hooks/useSelectedClass';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';



const ShowClass = ({ classData, Class }) => {
    const { user, loading } = useAuth();
    // const [isInstructor] = useInstructor()
    // const [isAdmin] = useAdmin()

    
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [selectedClass, setSelectedClass] = useState(null);
    
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = useSelectedClass();

    const { instructor_image, instructor_name } = classData;
    const { name, price, image, seats } = Class;


    const [isAdmin, isAdminLoading] = user ? useAdmin() : [false, false];
    const [isInstructor, isInstructorLoading] = user ? useInstructor() : [false, false];


    const handleSelect = () => {
        console.log(Class);
        if (user && user.email) {
            if (selectedClass) {
                Swal.fire({
                    title: 'You can only select one class',
                    icon: 'warning',
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                setSelectedClass(Class);
                setButtonDisabled(true);



                fetch('http://localhost:5000/classes', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ Class, email: user.email })
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            refetch();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'This Class has been selected',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                    .catch(error => {
                        console.error(error);
                        setButtonDisabled(false);
                    });
            }
        }
        else {
            Swal.fire({
                title: 'Please Log In First',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Log in'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } });
                }
            });
        }
    }

    const cardClassName = seats === 0 ? 'card bg-red-500 card-compact border-2 rounded-tl-3xl rounded-br-3xl shadow-xl' : 'card bg-base-100 card-compact border border-[#bbee02] rounded-tl-3xl rounded-br-3xl shadow-xl relative';
    return (
        <div className={cardClassName}>
            <figure><img src={image} alt="Class Photo" className="lg:h-60 w-full" /></figure>
            <span className='bg-[#bbee02] w-24 text-center rounded-2xl absolute top-2 left-3'>Price: ${price}</span>
            <div className="card-body ">
                <h2 className="card-title">{name}</h2>
                <p><span className="font-bold">Instructor:</span> {instructor_name}</p>
                { seats < 1 ?
                    <p><span className="font-bold text-xl text-white">All seats has been booked</span> </p>
                    :
                    <p><span className="font-bold">Available Seats:</span> {seats}</p>
                }

                <div className="card-actions mt-2 campHover">
                    <button
                        onClick={ handleSelect}
                        className="btn w-full shadow-xl font-extrabold bg-white hover:text-[#204FB6] hover:bg-[#bbee02] text-[#262261] text-xl"
                        disabled={buttonDisabled || seats < 1 || isInstructor || isAdmin  } 
                    >
                        {selectedClass ? 'Selected' : 'Select'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowClass;