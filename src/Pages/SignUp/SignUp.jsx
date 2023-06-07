import { Link } from "react-router-dom";


const SignUp = () => {
    return (
        <div>
            <div className='mainBg'>
                <div className=" bgBanner min-h-screen p-5 md:p-5 flex justify-center items-center">
                    <div className="card flex-shrink-0 w-full max-w-md">
                        <div>
                            <h2 className='text-white text-6xl font-bold text-center my-10 '>Register for Summer Camp!</h2>
                        </div>
                        <form  className="shadow-xl bg-[#5436ec3a] py-5 px-3 md:p-10">
                            <div className="">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="w-full px-5 py-3 " />
                            </div>
                            <div className="">
                                <label className="label">
                                    <span className="text-white text-xl font-bold">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="w-full px-5 py-3" />
                                <label className="label">
                                    <a href="#" className="text-white text-xl font-bold">Forgot password?</a>
                                </label>
                            </div>
                            <div className=" loginHover mt-6">
                                <input type='submit' className="btn font-bold hover:bg-[#3870E8] hover:text-white border-none bg-white text-[#204FB6] text-2xl mr-5 px-7 py-1" value='Login' />
                            </div>
                        </form>
                        <p className='text-center text-xl mt-5'><small className='text-white'>New Here? </small><Link to="/signup" className='text-warning link'>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;