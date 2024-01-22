import { Link } from "react-router-dom";
import p1 from "../../../assets/National/natioal4.jpg"
import { FaArrowCircleRight } from "react-icons/fa";
const NavNational = () => {
    return (
        <div className="mt-10 lg:flex">
            <div className="w-full md:w-full lg:w-2/3">
                <Link to="#">
                    <div className="  p-5" >
                        <div className="w-ful object-contain rounded-md h-[300px] md:h-[450px] opacity-85 relative" style={{ backgroundImage: `url(${p1})` }}>
                            <h1 className="text-black absolute bottom-1 md:bottom-2 font-semibold p-5 text-base md:text-2xl ">কক্সবাজারের চকরিয়ায় ২০ হাজার পিস ইয়াবাসহ তসলিমা বেগম (৩৫) নামে এক নারী মাদক ব্যবসায়ীকে গ্রেফতার</h1>
                        </div>
                        <h4 className="mt-3 font-normal md:font-medium text-[14px] md:text-base">কক্সবাজারের চকরিয়ায় ২০ হাজার পিস ইয়াবাসহ তসলিমা বেগম (৩৫) নামে এক নারী মাদক ব্যবসায়ীকে গ্রেফতার করেছে পুলিশ। রবিবার রাত ১০টার দিকে নিজ বাড়ি থেকে পাচারের উদ্দেশ্যে রাখা ২০ হাজার পিস ইয়াবাসহ তাকে গ্রেফতার করা হয়।  তসলিমা কাকারা ইউনিয়নের ৩ নম্বর ওয়ার্ড উত্তর লোটনী গ্রামের মো. জাহেদ হোসেনের স্ত্রী। থানা পুলিশ জানায়, গোপন সংবাদের ভিত্তিতে এসআই জামাল উদ্দিন চৌধুরীর নেতৃত্বে...</h4>
                    </div>
                </Link>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <Link to="#" >
                        <div className="flex h-[165px] md:h-[190px] w-[100%] bg-gray-200 rounded-md ">
                            <h1 className="w-[40%] text-lg md:text-xl font-semibold py-1 px-2 md:py-2 md:px-5"> রবিবার রাত ১০টার দিকে নিজ বাড়ি  </h1>
                            <img className="w-[60%]" src={p1} alt="" />
                        </div>
                    </Link>
                    <div className="flex h-[165px] md:h-[190px] w-[100%] bg-gray-200 rounded-md ">
                        <h1 className="w-[40%] text-lg md:text-xl font-semibold py-1 px-2 md:py-2 md:px-5"> রবিবার রাত ১০টার দিকে নিজ বাড়ি  </h1>
                        <img className="w-[60%]" src={p1} alt="" />
                        L</div>

                    L</div>
            </div>
            <div className="w-full lg:w-1/3 mt-5 p-5">
                <div className="  rounded-md flex justify-between border bg-gray-200" >
                    <h1 className="text-2xl px-2 text-red-400 mt-1 font-bold ">Resent news</h1>
                    <button className="bg-red-500 px-4 py-3 rounded-r-md "><FaArrowCircleRight className="text-2xl text-white" /></button>
                </div>
                <div className="mt-4">
                    <Link to="#">
                        <div className="flex h-[150px] lg:h-[85px] w-[100%] bg-gray-200 rounded-md mb-4 ">
                            <img className=" w-[230px] lg:w-[120px] h-[150px] lg:h-[85px]" src={p1} alt="" />
                            <p className=" text-lg lg:text-base font-medium py-2 px-2"> রবিবার রাত ১০টার দিকে নিজ বাড়ি  </p>
                        </div>
                    </Link>
                    <div className="flex h-[150px] lg:h-[85px] w-[100%] bg-gray-200 rounded-md mb-4 ">
                        <img className=" w-[230px] lg:w-[120px] h-[150px] lg:h-[85px]" src={p1} alt="" />
                        <p className=" text-lg lg:text-base font-medium py-2 px-2"> রবিবার রাত ১০টার দিকে নিজ বাড়ি  </p>
                        IL</div>


                </div>
            </div>
        </div>
    );
};

export default NavNational;