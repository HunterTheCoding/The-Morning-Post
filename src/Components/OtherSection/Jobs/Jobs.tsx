import { Link } from "react-router-dom";
import p1 from "../../../assets/National/nation1.jpg"
import { FaArrowCircleRight } from "react-icons/fa";
import j1 from "../../../assets/jobs/h1.jpeg"
import j2 from "../../../assets/jobs/h2.jpeg"
import j3 from "../../../assets/jobs/h3.jpeg"
import j4 from "../../../assets/jobs/h4.jpeg"
import j5 from "../../../assets/jobs/h5.jpeg"
const Jobs = () => {
    return (
        <div>
            <div className="px-5" >  <h1 className="text-2xl font-semibold py-5">Jobs</h1>
                <div className="border border-gray-400 mb-5 "></div></div>
            <div className=" lg:flex">
                <div className="lg:w-3/4 w-full">
                    <div className=" md:flex gap-5 p-5">
                        <div className=" md:w-2/3  relative mb-5 md:mb-0 w-full  lg:w-[600px] h-[300px] md:h-[350px] rounded-md border">
                            <img src={j5} className="w-full obj lg:w-[600px] md:w-full rounded-md md:h-[350px] h-[300px]" alt="" />
                            <h4 className="absolute w-full h-14 mt-4  text-white bottom-0 md:bottom-10 lg:bottom-0 font-2xl font-bold px-5">রংপুরে বিক্রি হওয়া নবজাতক উদ্ধার, গ্রেফতার ৩</h4>
                        </div>
                        <div className="w-full b md:w-1/3 rounded-md h-[400px] md:h-[180px] border-l-2">
                            <img className="w-full h-[250px] md:h-[160px] rounded-md" src={j1} alt="" />
                            <div className="mt-2 space-y-2 p-1">
                                <h1 className=" md:text-xl lg:text-lg font-medium">সরকারি কর্মচারী হাসপাতালে চাকরি, পদ ৯৮</h1>
                                <p className=" md:text-[14px] lg:text-[12px] font-normal text-gray-600">সরকারি কর্মচারী হাসপাতালের রাজস্ব খাতভুক্ত একাধিক পদে জনবল নিয়োগে বিজ্ঞপ্তি প্রকাশ হয়েছে। এই প্রতিষ্ঠানে ৬ ক্যাটাগরির পদে ১১ থেকে ১৬তম গ্রেডে ৯৮ জনকে অস্থায়ীভাবে নিয়োগ দেওয়া হবে।</p>
                            </div>
                        </div>
                    </div>
                    <div className="border px-10"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 gap-3">
                        <div className="w-[100%] border h-[400] bg-gray-200  md:h-[400px] lg:h-[400px] rounded-md">
                            <img src={j2} className="h-[185px] w-full rounded-md" alt="" />
                            <div className="mt-3 p-1 lg:space-y-1 space-y-2">
                                <h1 className="text-lg lg:text-base  font-medium">ডিএসসিসি ৯ম গ্রেডে নেবে একাধিক কর্মী, আবেদন করুন দ্রুত</h1>
                                <p className="text-[14px] lg:text-[12px]  font-normal">ঢাকা দক্ষিণ সিটি করপোরেশন (ডিএসসিসি) রাজস্ব খাতভুক্ত একটি পদে জনবল নিয়োগের আবেদন শেষ হচ্ছে আগামীকাল বৃহস্পতিবার। এই প্রতিষ্ঠানে ৯ম গ্রেডের ১টি পদে একাধিক কর্মী নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীদের অনলাইনে আবেদন করতে হবে।</p>
                            </div>
                        </div>
                        <div className="w-[100%] border h-[400] bg-gray-200  md:h-[400px] lg:h-[400px] rounded-md">
                            <img src={j3} className="h-[185px] w-full rounded-md" alt="" />
                            <div className="mt-3 p-1 lg:space-y-1 space-y-2">
                                <h1 className="text-lg lg:text-base  font-medium">ডিএসসিসি ৯ম গ্রেডে নেবে একাধিক কর্মী, আবেদন করুন দ্রুত</h1>
                                <p className="text-[14px] lg:text-[12px]  font-normal">ঢাকা দক্ষিণ সিটি করপোরেশন (ডিএসসিসি) রাজস্ব খাতভুক্ত একটি পদে জনবল নিয়োগের আবেদন শেষ হচ্ছে আগামীকাল বৃহস্পতিবার। এই প্রতিষ্ঠানে ৯ম গ্রেডের ১টি পদে একাধিক কর্মী নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীদের অনলাইনে আবেদন করতে হবে।</p>
                            </div>
                        </div>
                        <div className="w-[100%] border h-[400] bg-gray-200 md:h-[400px] lg:h-[400px] rounded-md">
                            <img src={j4} className="h-[185px] w-full rounded-md" alt="" />
                            <div className="mt-3 p-1 lg:space-y-1 space-y-2">
                                <h1 className="text-lg lg:text-base  font-medium">ডিএসসিসি ৯ম গ্রেডে নেবে একাধিক কর্মী, আবেদন করুন দ্রুত</h1>
                                <p className="text-[14px] lg:text-[12px]  font-normal">ঢাকা দক্ষিণ সিটি করপোরেশন (ডিএসসিসি) রাজস্ব খাতভুক্ত একটি পদে জনবল নিয়োগের আবেদন শেষ হচ্ছে আগামীকাল বৃহস্পতিবার। এই প্রতিষ্ঠানে ৯ম গ্রেডের ১টি পদে একাধিক কর্মী নিয়োগ দেওয়া হবে। আগ্রহী প্রার্থীদের অনলাইনে আবেদন করতে হবে।</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className="w-full lg:w-1/4 border-l-2 p-5">
                    <div className=" rounded-md flex justify-between border bg-gray-200" >
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Jobs;