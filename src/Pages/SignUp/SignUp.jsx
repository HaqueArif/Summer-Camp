import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";


const SignUp = () => {

    const navigate = useNavigate()
    
    const { createUser, updateUserProfile } = useAuth();

    const {
        register,
        handleSubmit,
        getValues,
        reset,
        formState: { errors },
        setError,
    } = useForm();

    const validateEmail = (value) => {
        if (value && !value.includes('.com')) {
            return 'Email must include .com';
        }
        return true;
    };



    const onSubmit = data => {
        const { password, confirmPassword } = data;
        if (password !== confirmPassword) {
            setError('confirmPassword', {
                type: 'manual',
                message: 'Passwords do not match',
            });
            return;
        }
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        
                        Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'Sign up successful',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    reset()
                                    navigate('/')
                        // const saveUser = { name: data.name, email: data.email }
                        // fetch('http://localhost:5000/users', {
                        //     method: "POST",
                        //     headers: {
                        //         'content-type': 'application/json'
                        //     },
                        //     body: JSON.stringify(saveUser)
                        // })
                            // .then(res => res.json())
                            // .then(data => {
                            //     if (data.insertedId) {
                            //         reset()
                            //         Swal.fire({
                            //             position: 'top-end',
                            //             icon: 'success',
                            //             title: 'Sign up successful',
                            //             showConfirmButton: false,
                            //             timer: 1500
                            //         })
                            //         navigate('/')
                            //     }
                            // })

                    })
                    .catch(error => console.log(error))
            })
        console.log(data);
    }

    return (
        <div className='mainBg'>
            <div className=" bgBanner min-h-screen p-5 md:p-5 flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-md">
                    <div>
                        <h2 className='text-white text-6xl font-bold text-center my-10 '>Register For Summer Camp!</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="shadow-xl bg-[#5436ec3a] py-5 px-3 md:p-10">
                        <div>
                            <label className="label">
                                <span className="text-white text-xl font-bold">Name</span>
                            </label>
                            {errors.name && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.name.message}</p>}
                            <input type="text" {...register('name', { required: 'Name is required.' })} placeholder="name" className="w-full px-5 py-3" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">Email</span>
                            </label>
                            {errors.email && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.email.message}</p>}
                            <input type="email" name="email" placeholder="email" className="w-full px-5 py-3"
                                {...register('email', { required: 'Email is required.', validate: validateEmail })}
                            />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">Password</span>
                            </label>
                            {errors.password?.type === 'required' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password is required.</p>}
                            {errors.password?.type === 'minLength' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password must be 6 characters.</p>}
                            {errors.password?.type === 'maxLength' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password  max length 16 characters.</p>}
                            {errors.password?.type === 'pattern' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password must have one Uppercase one lower case, one number characters and on spacial characters.</p>}

                            <input type="password" name='password' {...register('password', { maxLength: 16, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])/, required: true })} placeholder="password" className="w-full px-5 py-3" />
                        </div>

                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">
                                    Confirm Password
                                </span>
                            </label>
                            {errors.confirmPassword && (
                                <p className="text-white ps-5 bg-[#ff5a0080]">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                            <input
                                type="password"
                                name="confirmPassword"
                                {...register('confirmPassword', {
                                    required: 'Confirm Password is required.',
                                    validate: (value) =>
                                        value === getValues('password') ||
                                        'Passwords do not match.',
                                })}
                                placeholder="confirm password"
                                className="w-full px-5 py-3"
                            />

                        </div>
                        <div className="">
                            <label className="label">
                                <span className="text-white text-xl font-bold">
                                    Photo URL
                                </span>
                            </label>
                                {errors.photoUrl && <p className="text-white ps-5 bg-[#ff5a0080]">photo Url is required.</p>}
                            <input type="text" {...register('photoUrl', { required: true })} placeholder="Photo URL" className="w-full px-5 py-3" />
                        </div>




                        <div className=" loginHover mt-6">
                            <input type='submit' className="btn font-bold hover:bg-[#3870E8] hover:text-white border-none bg-white text-[#204FB6] text-2xl mr-5 px-7 py-1" value='Login' />
                        </div>
                    </form>
                    <p className='text-center text-xl mt-5'><small className='text-white'>Already Have An Account? </small><Link to="/signup" className='text-warning link'>Sign in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;