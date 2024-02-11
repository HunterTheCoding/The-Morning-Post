import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";

const Mainpage = () => {
  return (
    <div className="">
      <Navbar></Navbar>
     <div className="pt-[255px]"> <Outlet></Outlet></div>
      <Footer></Footer>
    </div>
  );
};

export default Mainpage;
