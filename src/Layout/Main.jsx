import { Outlet } from "react-router-dom";
import '../index.css'
import NavBar from "../NavBar/NavBar";
import Footer from "../Pages/Home/Footer/Footer";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;