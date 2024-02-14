import { FaBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useReactToPrint } from "react-to-print";
import useAdmin from "../../../Hook/useNews";
import { useRef } from 'react';

const World = () => {
    const componentRef = useRef(null);
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const { newsData: InternationalData } =
        useAdmin("International");
    //   const {_id, section, headline, source, date, summary, details, image} =InternationalData;

    return (
        <div className="md:px-6">
            <div className="flex justify-between bg-gray-200 p-4">
                <h2 className="text-3xl font-bold ">World News</h2>
                <Link to="/">
                    <button className="bg-red-500 text-white font-bold p-2 rounded-md">Back to Home</button>
                    <button onClick={handlePrint} className="bg-gray-300 text-white font-bold p-2 rounded-md">Print</button>
                </Link>
            </div>

            <div ref={componentRef} className="grid md:grid-cols-6 grid-cols-1 gap-4 mt-4">
                <div className="col-span-4">
                    {
                        InternationalData.slice(0, 1).map((news) => <div key={news._id} className="text-center mb-4 bg-base-200 relative">
                            <img src={news.image} className="w-full md:h-[400px]" alt="" />
                            <Link to={`/newsdetails/${news._id}`}>
                                <h2 className="font-medium text-2xl p-2">{news.headline}  </h2>
                            </Link>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        )
                    }
                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                        {
                            InternationalData.slice(1, 5).map((news) => <div key={news._id} className="flex">
                                <div className="w-1/2 md:h-[100px] bg-gray-200 relative">
                                    <Link to={`/newsdetails/${news._id}`}>
                                        <h2 className="font-bold text-sm  lg:text-base p-2">{news.headline} </h2>
                                    </Link>
                                    <div className="absolute bottom-2 right-2">
                                        <button className="text-xs"><FaBookmark></FaBookmark></button>
                                    </div>
                                </div>
                                <img src={news.image} className="w-1/2 h-[100px]" alt="" />
                            </div>)
                        }
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-4">
                        {
                            InternationalData.slice(2, 6).map((news) => <div key={news._id} className="md:h-[204px] bg-gray-200 relative">
                                <img src={news.image} className="w-full" alt="" />
                                <Link to={`/newsdetails/${news._id}`}>
                                <h2 className="font-bold text-sm  lg:text-base p-2">{news.headline.slice(0, 30)} </h2>
                                </Link>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="ml-10 md:ml-0 bg-gray-200 p-4">
                        <h2 className="text-3xl font-bold ">Latest News</h2>
                        {
                            InternationalData.slice(0, 4).map((news) =>
                                <div key={news._id} className="flex pl-10 md:pl-0 mt-4">
                                    <img src={news.image} className="w-1/3 h-[100px]" alt="" />
                                    <div className="w-2/3 h-[100px] bg-gray-200 relative">
                                        <Link to={`/newsdetails/${news._id}`}>
                                            <h2 className="font-bold text-sm  lg:text-base p-2">{news.headline} </h2>
                                        </Link>
                                        <div className="absolute bottom-2 right-2">
                                            <button className="text-xs"><FaBookmark></FaBookmark></button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="ml-10 md:ml-0 lg:mt-5 md:mt-[50px] bg-gray-200 p-4">
                        <h2 className="text-3xl font-bold ">Most Read</h2>
                        {
                            InternationalData.slice(0, 4).map((news) =>
                                <div key={news._id} className="flex pl-10 md:pl-0 mt-4">
                                    <img src={news.image} className="w-1/3 h-[100px]" alt="" />
                                    <div className="w-2/3 h-[100px] bg-gray-200 relative">
                                        <Link to={`/newsdetails/${news._id}`}>
                                            <h2 className="font-bold text-sm  lg:text-base p-2">{news.headline} </h2>
                                        </Link>
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
        </div>
    );
};

export default World;