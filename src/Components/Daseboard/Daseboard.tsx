import {  NavLink, Outlet } from "react-router-dom";
import {
  FaAd,
  FaDollarSign,
  FaHome,
  FaList,
 
} from "react-icons/fa";
import { FaBookBookmark } from "react-icons/fa6";
import useAdmin from "../../Hook/useAdmin";

const Daseboard = () => {
  const [isAdmin] = useAdmin();
  console.log(isAdmin);

  return (
    <div className="flex">
      <div className=" min-h-[800px] w-2/12  bg-indigo-400 ">
        {isAdmin ?.isAdmin? (
          <>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
              <NavLink
    className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  }
  to="/daseboard/adminhome"
    >
       <FaHome></FaHome> <span className=" uppercase  text-center">Profile</span>
    </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/news">
                  <FaAd></FaAd>Add News
                </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/addnews">
                  <FaList></FaList>All News
                </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/jobs">
                  <FaList></FaList>All Jobs
                </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/addjobs">
                  <FaAd></FaAd> Add Jobs
                </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/live">
                  <FaAd></FaAd>Live Section
                </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/userdonation">
                  <FaAd></FaAd>Donation
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="menu ">
              <li className=" border  rounded-md font-bold  text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/userhome">
                  {" "}
                  <FaHome></FaHome> Profile
                </NavLink>
              </li>
            </ul>
            <ul className="menu ">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/bookmarks">
                  {" "}
                  <FaBookBookmark></FaBookBookmark> BookMarks
                </NavLink>
              </li>
            </ul>
            <ul className="menu">
              <li className=" border uppercase text-white rounded-md font-bold text-lg">
                <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/daseboard/alldonation">
                  <FaDollarSign></FaDollarSign> Donation
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <div className="divider divider-horizontal border-b-2 py-1 w-[90%] mx-auto"></div>
        <ul className="menu p-2">
          <li className=" border uppercase text-white rounded-md font-bold text-lg">
            <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
        </ul>
        <ul className="menu p-2">
          <button>
            <li className=" border uppercase text-white rounded-md font-bold text-lg">
              <NavLink className={({ isPending, isActive }) =>
    isPending
      ? "pending"
      : isPending
      ? "pending"
      :  isActive
      ? "btn bg-white btn-sm  text-black font-bold"
      : "btn btn-ghost btn-sm"
  } to="/">
                    <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          className="w-5 h-5 fill-current dark:text-gray-400"
                        >
                          <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                          <rect width="32" height="64" x="256" y="232"></rect>
                        </svg>Logout
              </NavLink>
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
