import { Link, Outlet } from "react-router-dom";
import {
  FaAd,
  FaDollarSign,
  FaHome,
  FaList,
  FaRegMinusSquare,
} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import useAdmin from "../../Hook/useAdmin";

const Daseboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="flex">
      <div className=" min-h-[800px] bg-gray-500 w-2/12">
        {isAdmin ?.isAdmin? (
          <>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/adminhome">
                  <FaHome></FaHome>Profile
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/news">
                  <FaAd></FaAd>Add News
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/addnews">
                  <FaList></FaList>All News
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/jobs">
                  <FaList></FaList>All Jobs
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/addjobs">
                  <FaAd></FaAd> Add Jobs
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/live">
                  <FaAd></FaAd>Live Section
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/userdonation">
                  <FaAd></FaAd>Donation
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold  text-lg">
                <Link to="/daseboard/userhome">
                  {" "}
                  <FaHome></FaHome> Profile
                </Link>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/bookmarks">
                  {" "}
                  <FaBookBookmark></FaBookBookmark> BookMarks
                </Link>
              </li>
            </ul>
            <ul className="menu">
              <li className=" border bg-gray-300 rounded-md font-bold text-lg">
                <Link to="/daseboard/alldonation">
                  <FaDollarSign></FaDollarSign> Donation
                </Link>
              </li>
            </ul>
          </>
        )}
        <div className="divider divider-horizontal border-b-2 py-1 w-[90%] mx-auto"></div>
        <ul className="menu p-2">
          <li className=" border bg-gray-300 rounded-md font-bold text-lg">
            <Link to="/">
              <FaHome></FaHome>Home
            </Link>
          </li>
        </ul>
        <ul className="menu p-2">
          <button>
            <li className=" border bg-gray-300 rounded-md font-bold text-lg">
              <Link to="/">
                <FaRegMinusSquare></FaRegMinusSquare>Logout
              </Link>
            </li>
          </button>
        </ul>
      </div>
      <div className="flex-1 w-10/12">
        <Outlet></Outlet>
      </div>
    </div>
  );
};
export default Daseboard;
