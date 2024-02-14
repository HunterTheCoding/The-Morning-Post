import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";

const Mainpage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
     <div className=""> <Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default Mainpage;
