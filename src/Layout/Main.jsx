import { Outlet } from "react-router-dom";
import '../index.css'
import NavBar from "../NavBar/NavBar";


const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;