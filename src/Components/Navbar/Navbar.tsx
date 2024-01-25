import Marquee from "react-fast-marquee";
// import { IoMdMenu } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/news.png";
import { SlBadge } from "react-icons/sl";
import Context from "../../Hook/useContext";

const Navbar = () => {
    const { user, logOut } = Context()
    const list = [
        <Link to="/">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="/"
            >
                Home
            </a>
        </Link>,
        <Link to="/world">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                World
            </a>
        </Link>,
        <Link to="/business">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                Business
            </a>
        </Link>,
        <Link to="/science">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                Science
            </a>
        </Link>,
        <Link to="/national">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                National
            </a>
        </Link>,
        <Link to="/sport">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                Sport
            </a>
        </Link>,

        <Link to="/picture">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                Photo
            </a>
        </Link>,

        <Link
            to="/jobs"
            className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
        >
            Jobs
        </Link>,
        <Link to="/entertainment">
            <a
                className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2 hover:bg-gray-300 hover:text-gray-700"
                href="#"
            >
                Entertainment
            </a>
        </Link>,
        <Link
            to="donation"
            className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
        >
            Donation
        </Link>,
        <Link
            to="/Contact-US"
            className="block text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-2  hover:bg-gray-300 hover:text-gray-700"
        >
            Contact Us
        </Link>
    ];
    
    return (
        <div>
            <div className="font-sans bg-gray-300 m-0 p-0">
                <header className="bg-gray-800 text-white p-6 text-center flex justify-between px-2 px lg:px-5vw">
                    <div className="flex flex-col text-start">
                        <div>
                            <p>We are for the people</p>
                        </div>
                        <h1 className=" ml-3 lg:ml-5 font-semibold lg:font-extrabold text-2xl lg:text-4xl">
                            The Morning Post
                        </h1>
                    </div>
                    <div className="navbar-end ml-10 ">
                        {user?.email ? (
                            <div className="dropdown dropdown-end dropdown-hover text-black ">
                                <label
                                    tabIndex={0}
                                    className="btn  online btn-ghost btn-circle avatar"
                                >
                                    <div className="w-full border rounded-full">
                                        <img className="h-5/6" src={user.photoURL ?? undefined} alt="User Profile" />

                                        <SlBadge />
                                    </div>
                                </label>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                                >


                                    <li>
                                        <NavLink
                                            onClick={logOut}
                                            className={({ isPending, isActive }) =>
                                                isPending
                                                    ? "pending "
                                                    : isPending
                                                        ? "pending "
                                                        : isActive
                                                            ? "btn btn-outline  "
                                                            : "btn btn-ghost "
                                            }
                                            to={""}
                                        >
                                            LOGOUT
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
                                                ? "btn btn-warning "
                                                : "btn btn-ghost "
                                }
                            >
                                Login
                            </NavLink>
                        )}
                    </div>
                    <img className="rounded-lg" src={logo} alt="" />


                </header>

                <nav className="bg-gray-700 overflow-hidden grid grid-cols-4 md:grid-cols-5 lg:flex lg:pl-14">
                    {list}
                </nav>
                {/* <div className="navbar bg-gray-700 md:hidden lg:hidden">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <IoMdMenu className=" h-10 w-10" />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <nav className="bg-gray-700 overflow-hidden hidden md:grid md:grid-cols-5 lg:flex">
                                    {list}
                                </nav>
                            </ul>
                        </div>
                    </div>
                </div> */}
                <div className="text-black flex pl-5vw pr-5vw">
                    <div className=" pl-5 bg-yellow-500">Breaking News:</div>
                    <Marquee className="bg-white text-black">
                        Obaidul Quader is returning home in the evening, which is in the 100-day action plan of the Ministry of Environment of Arakan Army, which demands the occupation of the important port city of Myanmar.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Navbar;