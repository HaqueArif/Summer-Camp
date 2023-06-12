
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from 'react-icons/fa';
import './NavBar.css'
import logo from '../../public/logo.png'


const NavBar = () => {

    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li className="text-xl font-bold"><Link to='/'>Home</Link></li>
        <li className="text-xl font-bold"><Link to='/instructors'>Instructors</Link></li>
        <li className="text-xl font-bold"><Link to="/classes">Classes</Link></li>
        {user && <li className="text-xl"><Link to="/dashboard">Dashboard</Link></li>}
    </>


    return (
        <div className="navbar bg-[#5436EC] py-2 shadow-2xl xl:px-32 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost z-50 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu z-10  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64 h-96">
                        {navOptions}
                        {
                            user ? <Link to="/login" onClick={handleLogOut} className="px-5 py-3 rounded-md text-white font-bold bg-orange-400 border-none ">Logout</Link> :
                                <>
                                    <div className="campHover  my-5"><Link to="/login" className="login shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#C0E246] text-md mr-5 px-5 py-3">Login</Link></div>
                                    <div className="campHover mt-3"><Link to="/signup" className="register font-extrabold text-[#204FB6] hover:bg-[#3870E8] hover:text-white bg-white border  shadow-xl text-md mr-3 px-5 py-3">Register</Link></div>
                                </>
                        }

                    </ul>
                </div>
                <Link><img src={logo} className="w-32" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white font-bold text-lg">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    (<div className='flex items-center'>
                        {user.photoURL ? <img className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' src={user.photoURL} alt={user.displayName} title={user.displayName}
                        /> : <FaUserCircle className='w-8 h-8 lg:w-12 lg:h-12 rounded-full mr-2' title={user.displayName} />}

                        <Link to="/login" onClick={handleLogOut} className="px-5 py-3 rounded-md text-white font-bold bg-orange-400 border-none hidden lg:block ">Logout</Link>
                    </div>) : (<div className="hidden md:flex">
                        <div className="campHover"><Link to="/login" className="login font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#C0E246] text-2xl mr-5 px-6 py-3">Login</Link></div>
                        <div className="campHover"><Link to="/signup" className="register font-extrabold text-[#204FB6] hover:bg-[#3870E8] hover:text-white bg-white text-2xl mr-3 px-6 py-3">Register</Link></div>

                    </div>)}
            </div>
        </div>
    );
};

export default NavBar;