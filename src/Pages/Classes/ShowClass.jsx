import Swal from 'sweetalert2';
import { useState } from 'react'; // Import useState
import bg1 from '../../assets/electives_white-sparkle-bg.png'
import useAuth from '../../hooks/useAuth';
import './ShowClass.css'
import { useNavigate } from 'react-router-dom';

const ShowClass = ({ classData, classes }) => {
    const { instructor_image, instructor_name } = classData;
    const { user } = useAuth();
    const navigate = useNavigate();

    const [buttonDisabled, setButtonDisabled] = useState(false); // Add state for button disabled status

    const handleSelect = (classes) => {
        console.log(classes);
        if (user) {
            setButtonDisabled(true); // Disable the button before making the request

            fetch('http://localhost:5000/classes', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify()
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
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
                setButtonDisabled(false); // Re-enable the button if there was an error
            });
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
                    navigate('/login');
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 card-compact shadow-xl">
            <figure><img src={classes.image} alt="Classes Photo" className="lg:h-60 w-full" /></figure>
            <div className="card-body">
                <h2 className="card-title">{classes.name}</h2>
                <p><span className="font-bold">Instructor:</span> {instructor_name}</p>
                <p><span className="font-bold">Available Seats:</span> {classes.seats}</p>
                <p><span className="font-bold">Price: $</span> {classes.price}</p>

                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleSelect(classes)}
                        className="btn btn-primary"
                        disabled={buttonDisabled} // Set the disabled state of the button
                    >
                        {buttonDisabled ? 'Selected' : 'Select'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShowClass;