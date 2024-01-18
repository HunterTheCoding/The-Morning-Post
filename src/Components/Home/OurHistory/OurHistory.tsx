import { Link } from "react-router-dom";
import p1 from "../../../assets/history/img1.jpg"
import p2 from "../../../assets/history/img2.jpg"
import p3 from "../../../assets/history/img3.jpg"
import { FaRegClock } from "react-icons/fa";

import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import Rating from "react-rating";


const OurHistory = () => {
    return (
        <div className="mt-10 lg:flex ">
            <div className="lg:w-2/3 w-full">
                <div className="flex justify-between w-[300px] lg:w-full">
                    <h1 className="text-xl lg:text-2xl font-bold p-1">OUR HISTORY</h1>
                    <button className=" text-base lg:text-xl border px-2 lg:px-5 rounded-lg bg-slate-300">View All</button>
                </div>
                <hr className="w-[300px] lg:w-full bg-green-500 mb-3 " />
                <div className="md:flex justify-between w-full  lg:w-full  ">
                    <div className=" w-full lg:w-[50%] ">
                        <Link to="#">
                            <div className=" w-[300px] lg:w-[400px]  bg-base-100 shadow-xl">
                                <figure ><img className="lg:h-[280px] h-[175px] w-[300px] lg:w-full" src={p1} alt="pic" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-xl w-[90%] lg:text-xl font-medium ">Suspendisse posuere mi lacus, leo gravida eu.</h2>
                                    <div className="card-actions text-gray-400">
                                        <div className="badge px-1 font-medium ">Jone deo</div>
                                        <div className="flex font-medium ">
                                            <FaRegClock className="text-base" />
                                            <p className=" -mt-1 ml-2 text-base  ">March ,01.2024</p>
                                        </div>
                                    </div>
                                    <p className="text-base font-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porttitor leo vel nulla posuere accumsan. Suspendisse sed tortor eget justo aliquam euismod. Morbi ut mas...</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="w-full lg:w-[50%]">

                        <Link to="#">
                            <div className="flex border-b-2 py-2 mb-1 p-2  w-[300px] lg:w-full">
                                <img className=" w-[60px] h-[50px] lg:w-[100px] :lgh-[70px] mr-4 " src={p2} alt="" />

                                <div className="mb-1">
                                    <h1 className="text-base w-full lg:w-full font-normal lg:text-lg lg:font-medium ">Suspendisse posuere mi lacus, leo gravida eu.</h1>
                                    <div className="flex mt-2 text-[12px] lg:text-base text-gray-400">
                                        <FaRegClock className="mr-2" />
                                        <p className="-mt-1 ">March 17.2014</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                        <Link to="#">
                            <div className="flex border-b-2 py-2 mb-1 p-2  w-[300px] lg:w-full">
                                <img className=" w-[60px] h-[50px] lg:w-[100px] :lgh-[70px] mr-4 " src={p2} alt="" />

                                <div className="mb-1">
                                    <h1 className="text-base w-full lg:w-full font-normal lg:text-lg lg:font-medium ">Suspendisse posuere mi lacus, leo gravida eu.</h1>
                                    <div className="flex mt-2 text-[12px] lg:text-base text-gray-400">
                                        <FaRegClock className="mr-2" />
                                        <p className="-mt-1 ">March 17.2014</p>
                                    </div>
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-[300px] md:w-[400px] ml-3 mt-5 lg:mt-0 lg:w-1/3 p-2">
                <div className="w-[300px] lg:w-full">
                    <h1 className=" text-lg font-bold lg:text-xl ">POPULAR POSTS</h1>
                    <hr className="w-full" />
                </div>
                <div className=" ">
                    <div className="hero h-[250px] w-[300px] lg:w-full  relative  bg-black  mt-5 " style={{ backgroundImage: `url(${p3})` }}>
                        <div className="absolute bottom-8 px-2">
                            <p className="text-2xl font-semibold text-white">The future of News Blogger Themes. Custom Post Carousel.</p>
                            <Rating
                                className="text-blue-400 mr-4 text-xl"
                                placeholderRating={4.5}
                                emptySymbol={<IoIosStarOutline />}
                                placeholderSymbol={<IoIosStar />}
                                fullSymbol={<IoIosStarHalf />}
                            />
                        </div>
                    </div>
                    <div className="w-full ">
                        <Link to="#">
                            <div className="flex border-b-2 py-2 mb-1 p-2  w-[300px] lg:w-full">
                                <img className=" w-[60px] h-[50px] lg:w-[100px] :lgh-[70px] mr-4 " src={p2} alt="" />

                                <div className="mb-1">
                                    <h1 className="text-base w-full lg:w-full font-normal lg:text-lg lg:font-medium ">Suspendisse posuere mi lacus, leo gravida eu.</h1>
                                    <Rating
                                        className="text-blue-400 mr-4 text-xl"
                                        placeholderRating={3.5}
                                        emptySymbol={<IoIosStarOutline />}
                                        placeholderSymbol={<IoIosStar />}
                                        fullSymbol={<IoIosStarHalf />}
                                    />
                                </div>

                            </div>
                        </Link>
                        <Link to="#">
                            <div className="flex border-b-2 py-2 mb-1 p-2  w-[300px] lg:w-full">
                                <img className=" w-[60px] h-[50px] lg:w-[100px] :lgh-[70px] mr-4 " src={p2} alt="" />

                                <div className="mb-1">
                                    <h1 className="text-base w-full lg:w-full font-normal lg:text-lg lg:font-medium ">Suspendisse posuere mi lacus, leo gravida eu.</h1>
                                    <Rating
                                        className="text-blue-400 mr-4 text-xl"
                                        placeholderRating={3.5}
                                        emptySymbol={<IoIosStarOutline />}
                                        placeholderSymbol={<IoIosStar />}
                                        fullSymbol={<IoIosStarHalf />}
                                    />
                                </div>

                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurHistory;