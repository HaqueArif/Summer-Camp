
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaBookOpen, FaCheckCircle, FaCheckSquare, FaHistory, FaHome, FaMoneyCheck, FaUser, FaUserCheck, FaUserGraduate } from "react-icons/fa";


const Dashboard = () => {

    const { user } = useAuth()

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content px-20 pt-20">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li><Link to="/dashboard" className="text-xl text-white bg-slate-500"><FaHome />User Home</Link></li>
                        <li><NavLink to="/dashboard/selectedClasses" activeClassName="active"><FaCheckSquare />My Selected Classes</NavLink></li>
                        <li><NavLink to="/dashboard/enrolledClasses" activeClassName="active"><FaCheckCircle />My Enrolled Classes</NavLink></li>
                        <li><NavLink to="/dashboard/paymentHistory" activeClassName="active"><FaMoneyCheck />Payment History</NavLink></li>
                        

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