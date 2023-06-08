import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../../assets/google.png'
import './Login.css'
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import loadingGif from '../../assets/loading_indicator.gif'
import { useState } from 'react';

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { loading, signIn, signInWithGoogle } = useAuth()

    const from = location.state?.from?.pathname || '/';

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    if (loading) {
        return <div className="min-h-screen flex justify-center items-center">
            <img src={loadingGif} alt="loading" className="w-60" />
        </div>
    }

    const validateEmail = (value) => {
        if (value && !value.includes('.com')) {
            return 'Email must include .com';
        }
        return true;
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log('errorrrr', error.message);
            })
    }


    const onSubmit = data => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login successful',
                    showClass: {
                        popup: 'animate_animated animate_fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate_animated animate_fadeOutUp'
                    }
                })
                reset();
                navigate(from, { replace: true });
            })
    }



    return (
        <div className='mainBg'>
            <div className=" bgBanner min-h-screen p-5 md:p-5 flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-md mb-20">
                    <div>
                        <h2 className='text-white text-6xl font-bold text-center my-10 '>Sign In To Summer Camp!</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-2xl bg-[#5436ec3a] hover:bg-[#5436EC] duration-300 py-5 px-3 md:p-10">
                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                {...register('email', { required: 'Email is required.', validate: validateEmail })}
                                placeholder="email"
                                className="w-full px-5 py-3"
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">Password</span>
                            </label>
                            <div className='relative'>
                                <input type={showPassword ? 'text' : 'password'} name='password' {...register('password', { maxLength: 16, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])/, required: true })} placeholder="password" className="w-full px-5 py-3" />
                                {showPassword ? (
                                    <FaEyeSlash
                                        className="absolute top-4 right-2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                ) : (
                                    <FaEye
                                        className="absolute top-4 right-2 cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    />
                                )}
                            </div>
                            {errors.password?.type === 'required' && <p className='text-red-500'>Password is required.</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters.</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-red-500'>Password  max length 16 characters.</p>}
                            {errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have one Uppercase one lower case, one number characters and on spacial characters.</p>}

                            <label className="label">
                                <a href="#" className="text-white text-xl font-bold">Forgot password?</a>
                            </label>
                        </div>
                        <div className=" loginHover mt-6">
                            <input type='submit' className="btn font-bold hover:bg-[#3870E8] hover:text-white border-none bg-[#C0E246]  text-2xl mr-5 px-7 py-1" value='Login' />
                        </div>
                    </form>
                    <p className='text-center text-xl mt-5'><small className='text-white'>New Here? </small><Link to="/signup" className='text-warning link'>Sign up</Link></p>
                    <p className='text-center text-xl mt-2 font-bold text-white'>Or</p>
                    <div onClick={handleGoogleSignIn} className=' cursor-pointer mt-5 shadow-xl hover:bg-[#ff5a0080] duration-200 py-5 flex justify-center items-center  bg-[#204FB6] googleStyle'>
                        <span className='text-white text-2xl font-bold mr-2'>Continue With</span>
                        <img src={google} alt="GOOGLE" className='w-10 mr-1' />
                        <span className='text-white text-2xl font-bold'>oogle</span>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Login;
