import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import logo from "../../../public/newsnew-removebg-preview.png";
import { SlBadge } from "react-icons/sl";
import Context from "../../Hook/useContext";
import useAdmin from "../../Hook/useAdmin";
import Weather from "../Weather/Weather";
import { FaUser } from "react-icons/fa";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  const [isAdmin] = useAdmin();
  // console.log(isAdmin);

  const { user, logOut } = Context();
  // console.log(user);

  const list = [
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to={"/"}
    >
      <span className=" uppercase text-white text-center">HOME</span>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/world"
    >
      <a className="uppercase text-white text-center font">World</a>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/business"
    >
      <a className="uppercase text-white text-center">Business</a>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/science"
    >
      <a className="uppercase text-white text-center">Science</a>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/national"
    >
      <a className="uppercase text-white text-center">National</a>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/sport"
    >
      <a className="uppercase text-white text-center">Sport</a>
    </NavLink>,

    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/picture"
    >
      <a className="uppercase text-white text-center">Photo</a>
    </NavLink>,

    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/jobs"
    >
      <span className="uppercase text-white text-center">Jobs</span>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/entertainment"
    >
      <a className="uppercase text-white text-center">Entertainment</a>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="donation"
    >
      <span className="uppercase text-white text-center">Donation</span>
    </NavLink>,
    <NavLink
      className={({ isPending, isActive }) =>
        isPending
          ? "pending"
          : isPending
          ? "pending"
          : isActive
          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
          : "btn btn-ghost btn-sm"
      }
      to="/Contact-US"
    >
      <span className="font-bold uppercase text-white"> Contact Us</span>
    </NavLink>,
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString();
  const formattedDate = currentDateTime.toLocaleDateString();

  return (
    <div>
      <div className="font-sans bg-gray-300  -mt-4 z-50 max-w-screen-xl mx-auto">
        <header className="bg-indigo-950 text-white p-6 text-center flex justify-between px-2 px lg:px-5vw">
          <img
            className="rounded-lg   h-20 md:h-[100px] w-24 lg:w-[150px]  md:flex lg:flex"
            src={logo}
            alt=""
          />
          <div className="flex flex-col  text-start lg:ml-40  justify-center   ">
            <h1 className=" ml-3 lg:ml-5 font-semibold lg:font-extrabold text-2xl lg:text-4xl">
              The Morning Post
            </h1>
            <div>
              <p className="lg:pl-52">We are for the people</p>
            </div>
          </div>
          <div className=" hidden  w-fit lg:flex rounded-md navbar-end">
            <p className="">
              <Weather />
            </p>
          </div>
          <div className="navbar-end items-center justify-center flex  w-fit md:-ml-10 lg:-ml-20">
            {user?.email ? (
              <div className="dropdown dropdown-end dropdown-hover text-black ">
                <label
                  tabIndex={0}
                  className="btn  online btn-ghost btn-circle avatar"
                >
                  <div className="w-full border  rounded-full">
                    <img className=" h-5/6" src={user.photoURL || undefined} />
                    <SlBadge />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm border-2 dropdown-content  mt-3 z-[1] p-2 shadow bg-blue-100 rounded-box w-52"
                >
                  <li className=" py-2 ">
                    <NavLink
                      to={
                        isAdmin?.isAdmin
                          ? "daseboard/adminhome"
                          : "daseboard/userhome"
                      }
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "pending "
                          : isActive
                          ? "btn bg-sky-400 btn-sm text-blue-900 font-bold"
                          : "btn btn-ghost btn-sm"
                      }
                    >
                      <span className="text-indigo-800 uppercase text-xl font-bold">
                        {" "}
                        PROFILE
                      </span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      className={({ isPending, isActive }) =>
                        isPending
                          ? "pending "
                          : isPending
                          ? "pending "
                          : isActive
                          ? "btn btn-outline  "
                          : "btn btn-ghost "
                      }
                      onClick={logOut}
                      to={""}
                    >
                      <span className="text-indigo-800 uppercase text-xl font-bold">
                        Logout
                      </span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            ) : (
              <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending "
                    : isPending
                    ? "pending "
                    : isActive
                    ? "btn"
                    : "btn btn-ghost "
                }
                title="Login"
              >
                <div className="text-2xl">
                  <FaUser />
                </div>
              </NavLink>
            )}
          </div>
        </header>

        <nav className="bg-indigo-900 overflow-hidden grid grid-cols-4 md:grid-cols-5 lg:flex lg:pl-14 py-4 space-x-2 items-center justify-center">
          {list}
        </nav>
        <div className="flex pl-5vw pr-5vw">
          <div className=" pl-5 text-black font-bold uppercase  bg-yellow-500 rounded-r-md">
            Breaking News
          </div>
          <Marquee className="bg-white text-black">
            Obaidul Quader is returning home in the evening, which is in the
            100-day action plan of the Ministry of Environment of Arakan Army,
            which demands the occupation of the important port city of Myanmar.
          </Marquee>
          <div className="pl-5 text-black font-bold uppercase bg-yellow-500 rounded-l-md">
   {formattedTime}  {formattedDate}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;