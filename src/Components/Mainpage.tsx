import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";


const Mainpage = () => {
    return (
        <div>
            <div className="... sticky top-0"><button className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 btn-sm font-medium rounded-lg text-sm px-5 text-center me-2 mb-2">Live</button></div>
            <div>
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Mainpage;