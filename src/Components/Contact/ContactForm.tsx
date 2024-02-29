import { BsTelephonePlus } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiFacebook, CiInstagram, CiTwitter } from "react-icons/ci";
const ContactFrom = () => {
  return (
    <div className="pb-20">
      <h1 className="text-2xl font-bold grid justify-center items-center mb-7">
        {" "}
        Contact Us{" "}
      </h1>
      <div className=" md:flex gap-10">
        <div>
          <h1 className="text-2xl font-bold text-center ">HOW TO FIND US</h1>
          <p>
            Our goal is to provide the best customer service and to answer all
            of your questions in a timely manner.
          </p>
          <div className="grid  grid-cols-2 justify-around ml-20 gap-5 my-10">
            <p className="  flex items-center text-center gap-3">
              <BsTelephonePlus className="text-blue-600 text-3xl"></BsTelephonePlus>
              (555) 555-0312
            </p>
            <p className="  flex items-center text-center gap-3">
              <CiFacebook className="text-blue-600 text-3xl"></CiFacebook>
              Music Festible
            </p>
            <p className="  flex items-center text-center gap-3">
              <CiInstagram className="text-blue-600 text-3xl"></CiInstagram>
              MusicFestible77
            </p>
            <p className="  flex items-center text-center gap-3">
              <CiTwitter className="text-blue-600 text-3xl"></CiTwitter>
              Music Festible
            </p>
            <p className="  flex items-center text-center gap-3">
              <CgMail className="text-blue-600 text-3xl"></CgMail>
              musicfestible@gmail.com
            </p>
            <p className="  flex items-center text-center gap-3">
              <g className="text-blue-600 text-3xl"></g>
              (555) 555-0312
            </p>
          </div>
        </div>

        <div className=" md:w-1/2 p-4 bg-slate-200 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-6" action="#">
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">
              Send Us a Message
            </h5>

            <div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required
              />
            </div>

            <div>
              <input
                type="text"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Subject"
              />
            </div>
            <div>
              <input
                type="text"
                name=""
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white pb-20"
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="w-fit text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 "
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFrom;
