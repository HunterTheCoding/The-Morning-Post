import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700">
                Stay with us!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                Find us on any of these platforms
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex gap-5">
                <button >
                  <FaFacebook className=" w-10 h-10 text-black hover:text-blue-800 rounded-2xl" />
                </button>
                <button>
                  <FaTwitter className=" w-10 h-10 text-black hover:text-blue-800 rounded-2xl" />
                </button>
                <button>
                  <FaInstagram className=" w-10 h-10 text-black hover:text-blue-800 rounded-2xl" />
                </button>
                <button>
                  <FaYoutube className=" w-10 h-10 text-black hover:text-blue-800 rounded-2xl" />
                </button>
              </div>
            </div>

            <div className="w-full lg:w-6/12 px-4">
              <div className="flex items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto border-l-2">
                  <ul className="list-unstyled">
                    <Link to="/">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Home
                        </a>
                      </li>
                    </Link>
                    <Link to="/soprt">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Sports
                        </a>
                      </li>
                    </Link>
                    <Link to="/jobs">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          Jobs
                        </a>
                      </li>
                    </Link>
                    <Link to="/national">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          National
                        </a>
                      </li>
                    </Link>
                    <Link to="/world">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                          href="#"
                        >
                          International
                        </a>
                      </li>
                    </Link>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/donation"
                      >
                        Donation
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="science"
                      >
                        Science
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/business"
                      >
                        Busness
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/survay"
                      >
                        Survay
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/picture"
                      >
                        Photo
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/Contact-US"
                      >
                        Contact
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About
                      </a>
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
                Copyright © <span id="get-current-year">2024</span>
                <a
                  href="#"
                  className="text-blueGray-500 hover:text-gray-800"
                  target="_blank"
                />{" "}
                The Morning Post by
                <a
                  href="#"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  {" "}
                  Hunter The Coding
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
