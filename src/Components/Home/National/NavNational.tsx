import { Link } from "react-router-dom";
import p1 from "../../../assets/National/natioal4.jpg"
import { FaArrowCircleRight } from "react-icons/fa";
import useAdmin, { News } from "../../../Hook/useNews";
const NavNational = () => {
    const { newsData: National} = useAdmin("National");
    //   const {_id, section, headline, source, date, summary, details, image} =National;

    return (
        <div>
            <div className="-mt-5 lg:flex">
                <div className="w-full md:w-full lg:w-2/3 my-element" id="alls">
                    {
                        National?.slice(0, 1).map((news1: News) => <Link key={news1._id} to={`/newsdetails/${news1?._id}`}>
                            <div className="  p-5 rounded-md"  >
                                <div className="w-ful bg-cover  rounded-md h-[300px] md:h-[450px] opacity-85 relative" style={{ backgroundImage: `url(${news1?.image})` }}>
                                    <h1 className="text-black absolute bottom-1 md:bottom-2 font-semibold p-5 text-base md:text-2xl ">{news1?.headline}</h1>
                                </div>
                                <p className="mt-3 font-normal md:font-medium text-[14px] md:text-base text-black">{news1?.summary}</p>
                            </div>
                        </Link>)
                    }
                    <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                        {
                            National?.slice(1, National.length)?.map((news2) => <Link key={news2?._id} to={`/newsdetails/${news2?._id}`}>
                                <div className="flex h-[165px] md:h-[190px] w-[100%] bg-gray-200 rounded-md ">
                                    <h1 className="w-[40%] text-black text-lg md:text-xl font-semibold py-1 px-2 md:py-2 md:px-5">{news2?.headline}</h1>
                                    <img className="w-[60%] rounded-r-md " src={news2?.image} alt="" />
                                </div>
                            </Link>)
                        }                
                    </div>
                    <div className="flex justify-center px-5">
                        <button className="btn text-xl hover:text-black hover:bg-green-200  font-medium text-black border-none bg-green-300 ">View All</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/3  p-5">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavNational;