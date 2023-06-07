
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FaUserCircle } from 'react-icons/fa';
import './NavBar.css'


const NavBar = () => {

    const { user, logOut } = useAuth()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Instructors</Link></li>
        <li><Link to="/order/salad">Classes</Link></li>
        <li><Link to="/private">Dashboard</Link></li>
    </>


    return (
        <div>
            <div className="navbar bg-[#5436EC] py-5 shadow-2xl xl:px-40 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost uppercase text-3xl">SummerScape</a>
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
                        </div>) : (<div className="hidden md:inline-block">
                            <Link to="/login" className="login font-extrabold  bg-[#C0E246] text-2xl mr-5 px-7 py-1">Login</Link>
                            <Link className="register font-extrabold  bg-[#C0E246] text-2xl mr-3 px-7 py-1">Register</Link>

                        </div>)}
                </div>
            </div>
        </div>
    );
};

export default NavBar;