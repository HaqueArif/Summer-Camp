import { useContext } from 'react';

import google from '../../../assets/google.png'
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const { signInWithGoogle } = useContext(AuthContext)
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);


                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                    })
            })
    }

    return (
        <div onClick={handleGoogleSignIn} className=' cursor-pointer w-full md:w-10/12 mx-auto mt-5 shadow-xl hover:bg-[#ff5a0080] duration-200 py-5 flex justify-center items-center  bg-[#204FB6] googleStyle'>
            <span className='text-white md:text-xl font-bold mr-2'>Continue With</span>
            <img src={google} alt="GOOGLE" className='w-6 md:w-10 mr-1' />
            <span className='text-white md:text-xl font-bold'>oogle</span>
        </div>
    );
};

export default SocialLogin;