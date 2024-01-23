
import Marquee from "react-fast-marquee";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../../public/news.png"

const Navbar = () => {
    const list = [
        <Link to="/"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="/">Home</a></Link>,
        <Link to="/world"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">World</a></Link>,
        <Link to="/busineess"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Business</a></Link>,
        <Link to="/science"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Science</a></Link>,
        <Link to="/national"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">National</a></Link>,
        <Link to="/sport"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Sport</a></Link>,
        <Link to="/entertainment"><a className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">entertainment</a></Link>,
        <Link to='Contact-US' className="block float-left text-white text-center border-0 md:border-r-2 lg:border-r-2  border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" >Contact Us</Link>,
    ];
    return (

        <div>
            <div className="font-sans bg-gray-300 m-0 p-0">
                <header className="bg-gray-800 text-white p-6 text-center flex justify-between px-2px lg:px-5vw">
                    <div className="flex flex-col text-start">
                        <div>
                            <p>We are for the people</p>
                        </div>
                        <h1 className=" ml-3 lg:ml-5 font-semibold lg:font-extrabold text-2xl lg:text-4xl">The Morning Post</h1>
                    </div>
                    <img className="rounded-lg" src={logo} alt="" />
                </header>

                <nav className="bg-gray-700 overflow-hidden pl-20 px-5vw hidden md:flex">
                    {list}
                </nav>
                <div className="navbar bg-gray-700 md:hidden lg:hidden">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <IoMdMenu className=" h-10 w-10" />
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {list}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-black flex pl-5vw pr-5vw">
                    <div className=" pl-5 bg-yellow-500">Breaking News:</div>
                    <Marquee className="bg-white text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus nec turpis consequat
                        posuere.
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default Navbar;