
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaBars, FaBookOpen, FaChalkboardTeacher, FaCheckCircle, FaCheckSquare, FaHome, FaMoneyCheck, FaUser,  FaUsers } from "react-icons/fa";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";


const Dashboard = () => {

    const { user } = useAuth()
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    return (
        <div className="relative">
            <div className="drawer  lg:drawer-open ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  md:px-20 md:pt-10">

                    {isAdmin ? (
                        <>
                            <p className="text-5xl md:text-7xl font-extrabold text-center text-slate-400">Admin Dashboard</p>
                            <p className="text-xl mt-5 font-extrabold text-center text-slate-700">Manage Your Dashboard</p>
                        </>
                    ) : (
                        <>
                            {isInstructor ? (
                                <>
                                    <p className="text-5xl md:text-7xl font-extrabold text-center text-slate-400">Instructor Dashboard</p>
                                    <p className="text-xl mt-5 font-extrabold text-center text-slate-700">Manage Your Dashboard</p>
                                </>
                            ) : (
                                <>
                                    <p className="text-5xl md:text-7xl font-extrabold text-center text-slate-400">User Dashboard</p>
                                    <p className="text-xl mt-5 font-extrabold text-center text-slate-700">Manage your payments and see other status</p>
                                </>
                            )}
                        </>
                    )}

                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="absolute top-0 left-0 btn drawer-button lg:hidden"><FaBars /></label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4  h-full bg-base-200 text-base-content">


                        {isAdmin ? (
                            <>
                                <li>
                                    <Link to="/dashboard/manageClasses" className="text-xl text-white bg-slate-500">
                                        <FaHome /> Admin Home
                                    </Link>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageClasses" activeClassName="active">
                                        <FaChalkboardTeacher /> Manage Classes
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageUsers" activeClassName="active">
                                        <FaUsers /> Manage Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                {isInstructor ? (
                                    <>
                                        <li>
                                            <Link to="/dashboard/myClasses" className="text-xl text-white bg-slate-500">
                                                <FaHome /> Instructor Home
                                            </Link>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/myClasses" activeClassName="active">
                                                <FaCheckSquare /> My Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/addClasses" activeClassName="active">
                                                <FaCheckCircle /> Add a Class
                                            </NavLink>
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/dashboard/selectedClasses" className="text-xl text-white bg-slate-500">
                                                <FaHome /> User Home
                                            </Link>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/selectedClasses" activeClassName="active">
                                                <FaCheckSquare /> My Selected Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/enrolledClasses" activeClassName="active">
                                                <FaCheckCircle /> My Enrolled Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/dashboard/paymentHistory" activeClassName="active">
                                                <FaMoneyCheck /> Payment History
                                            </NavLink>
                                        </li>
                                    </>
                                )}
                            </>
                        )}



                        <div className="divider"></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/instructors'><FaUser />Instructor</NavLink></li>
                        <li><NavLink to="/classes"><FaBookOpen />Classes</NavLink></li>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;