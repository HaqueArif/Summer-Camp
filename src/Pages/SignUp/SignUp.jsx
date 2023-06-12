import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";


const SignUp = () => {

    const navigate = useNavigate()

    const { createUser, updateUserProfile, logOut } = useAuth();

   

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

                        const saveUser = { name: data.name, email: data.email }
                        fetch('https://summer-camp-school-server-steel.vercel.app/users', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                        .then(res => res.json())
                        .then(data => {
                            if (data.insertedId) {
                                reset()
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Sign up successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                logOut();
                                navigate('/login')
                            }
                        })
                        
                        
                    })
                    .catch(error => console.log(error))
            })
        console.log(data);
    }

    return (
        <div className='mainBg'>
            <div className=" bgBanner min-h-screen p-5 md:p-5 flex justify-center items-center">
                <div className="card flex-shrink-0 w-full max-w-2xl mb-20">
                    <div className="md:w-2xl mx-auto">
                        <h2 className='text-white text-6xl font-bold text-center my-10 '>Register For Summer Camp!</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="formLogin w-full shadow-xl bg-[#5436ec3a] py-5 px-3 md:px-20 md:py-10 hover:bg-[#5436EC] duration-300">
                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Name</span>
                                </label>
                                {errors.name && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.name.message}</p>}
                                <input type="text" {...register('name', { required: 'Name is required.' })} placeholder="name" className="w-full px-5 py-3" />
                            </div>

                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Email</span>
                                </label>
                                {errors.email && <p className="text-white ps-5 bg-[#ff5a0080]">{errors.email.message}</p>}
                                <input type="email" name="email" placeholder="email" className="w-full px-5 py-3"
                                    {...register('email', { required: 'Email is required.', validate: validateEmail })}
                                />
                            </div>
                        </div>

                        <div className="md:flex gap-3">
                            <div className="w-full">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Password</span>
                                </label>
                                {errors.password?.type === 'required' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password is required.</p>}
                                {errors.password?.type === 'minLength' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password must be 6 characters.</p>}
                                {errors.password?.type === 'maxLength' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password  max length 16 characters.</p>}
                                {errors.password?.type === 'pattern' && <p className='text-white ps-5 bg-[#ff5a0080]'>Password must have one Uppercase one lower case, one number characters and on spacial characters.</p>}

                                <input type="password" name='password' {...register('password', { maxLength: 16, minLength: 6, pattern: /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*])/, required: true })} placeholder="password" className="w-full px-5 py-3" />
                            </div>

                            <div className="w-full">
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
                            <input type='submit' className="btn font-bold hover:bg-[#3870E8] hover:text-white border-none bg-[#D9EB22] text-[#204FB6] text-2xl mr-5 px-7 py-1" value='Register' />
                        </div>
                    </form>
                    <p className='text-center text-xl mt-5'><small className='text-white'>Already Have An Account? </small><Link to="/login" className='text-warning link'>Sign in</Link></p>
                    <p className='text-center text-xl mt-2 font-bold text-white'>Or</p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;