import Marquee from "react-fast-marquee";

const Navbar = () => {
    return (
        <div className="font-sans bg-gray-300 m-0 p-0">
            <header className="bg-gray-800 text-white p-6 text-center flex justify-between px-5vw">
                <div className="flex flex-col text-start">
                    <div>
                        <p>We are for the people</p>
                    </div>
                    <h1 className=" ml-3 lg:ml-5 font-semibold lg:font-extrabold text-2xl lg:text-4xl">The Morning Post</h1>
                </div>
                <img src="https://via.placeholder.com/100" alt="logo" />
            </header>

            <nav className="bg-gray-700 overflow-hidden pl-20 px-5vw">
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Home</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">World</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Politics</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Business</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Sports</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Entertainment</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Technology</a>
                <a className="block float-left text-white text-center border-r-2 border-gray-300 no-underline relative py-3 px-4 hover:bg-gray-300 hover:text-gray-700" href="#">Opinion</a>
            </nav>
            {/* test */}
            <div className="text-black flex pl-5vw pr-5vw">
                Breaking News:
                <Marquee className="bg-white text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lectus nec turpis consequat
                    posuere.
                </Marquee>
            </div>
        </div>
    );
};

export default Navbar;