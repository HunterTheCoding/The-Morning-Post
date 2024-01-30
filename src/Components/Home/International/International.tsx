import { Link } from "react-router-dom";

import { FaBookmark } from "react-icons/fa";
import useAdmin from "../../../Hook/useNews";

const International = () => {
    const { newsData: InternationalData, isLoading: InternationalDataLoading } =
    useAdmin("International");
//   const {_id, section, headline, source, date, summary, details, image,title,writer }=InternationalData;
 console.log(InternationalData,InternationalDataLoading);
 
    return (
        <div className="md:px-6 lg:px-0 my-5">
            <div className="flex justify-between bg-gray-200 p-4">
                <h2 className="text-3xl font-bold ">International News</h2>
                <Link to='/world'>
                    <button className="bg-red-500 text-white font-bold p-2 rounded-md">See More</button>
                </Link>
            </div>

            <div className="grid md:grid-cols-6 grid-cols-1 gap-4">
                <div className="col-span-4">
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
                        <div className="col-span-3 my-3 flex">
                            {
                                InternationalData.slice(0, 1).map((news)=><>
                                <div className="w-1/3 md:h-[200px] bg-gray-200 relative">
                                <h2 className="font-bold lg:text-2xl md:text-xl text-lg  p-2">{news.headline}
                                </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>

                            </div>
                            <img src={news.image} className="w-2/3 h-[200px]" alt="" />
                                </>)
                            }
                        </div>
                        {
                            InternationalData.slice(1,2).map((news)=><div key={news._id}>
                            <div className="md:h-[200px] w-full ml-4 md:ml-0 my-3 relative bg-gray-200">
                            <img src={news.image} className="w-full" alt="image" />
                            <h2 className="font-bold p-2">{news.headline}
                            </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                            </div>)
                        }

                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        {
                            InternationalData.slice(2,6).map((news)=>
                            <div key={news._id} className="md:h-[204px] md:my-3 bg-gray-200 relative">
                            <img src={news.image} className="w-full" alt="" />
                            <h2 className="font-bold text-sm p-2">{news.headline} </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                            )
                        }
                        
                    </div>
                </div>
                <div className="col-span-2">
                    {
                        InternationalData.slice(0,4).map((news)=>
                        <div key={news._id} className="flex pl-10 md:pl-0 mt-4">
                        <img src={news.image} className="w-1/3 h-[100px]" alt="" />
                        <div className="w-2/3 h-[100px] bg-gray-200 relative">
                            <h2 className="font-bold p-2">{news.headline} </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                        )
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default International;