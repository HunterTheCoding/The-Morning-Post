import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="relative bg-blueGray-200 pt-8 pb-6">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl fonat-semibold text-blueGray-700">আমাদের সঙ্গে থাকুন!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                                Find us on any of these platforms
                            </h5>
                            <div className="mt-6 lg:mb-0 mb-6 flex gap-5">
                                <button>
                                    <FaFacebook className=" w-10 h-10" />
                                </button>
                                <button>
                                    <FaTwitter className=" w-10 h-10" />
                                </button>
                                <button>
                                    <FaInstagram className=" w-10 h-10" />
                                </button>
                                <button>
                                    <FaYoutube className=" w-10 h-10" />
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto border-l-2">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">জাতীয়</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">পূর্ব-পশ্চিম</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">প্রথম পাতা</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">চায়ের দেশ</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">পেছনের পৃষ্ঠা</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ই-পেপার</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">নগর জীবন</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">দেশগ্রাম</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">নগর জীবন</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">শোবিজ</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">মাঠে ময়দানে</a>
                                        </li>
                                        <li>
                                            <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">ইউএসএ এডিশন</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-blueGray-300" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-blueGray-500 font-semibold py-1">
                                Copyright © <span id="get-current-year">2024</span><a href="#" className="text-blueGray-500 hover:text-gray-800" target="_blank" /> The Morning Post by
                                <a href="#" className="text-blueGray-500 hover:text-blueGray-800"> Hunter The Coding</a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;