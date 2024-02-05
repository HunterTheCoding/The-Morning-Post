import { Link } from "react-router-dom";
import snowImage from '../../../assets/snowfall.jpg'
import israel from '../../../assets/081157_bangladesh_pratidin_US_Israel.jpg';
import iraq from '../../../assets/082432_bangladesh_pratidin_Iraq.jpg'
import gaza from '../../../assets/085941_bangladesh_pratidin_Gaza3.jpg'
import earthquake from '../../../assets/103756_bangladesh_pratidin_earthquake-magnitude-bdp.jpg'
import russia from '../../../assets/160001_bangladesh_pratidin_Russia.jpg'
import satelite from '../../../assets/091413_bangladesh_pratidin_Satellite.jpg'
import jail from '../../../assets/095722_bangladesh_pratidin_Jail.jpg'
import netaniyahu from '../../../assets/102918_bangladesh_pratidin_Netanyahu2.jpg'
import mendela from '../../../assets/131904_bangladesh_pratidin_Mandela.jpg'
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
                            <div className="w-1/3 md:h-[200px] bg-gray-200 relative">
                                <h2 className="font-bold lg:text-2xl md:text-xl text-lg  p-2">Severe snowfall in USA. 80 people are died.
                                </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>

                            </div>
                            <img src={snowImage} className="w-2/3 h-[200px]" alt="" />
                        </div>
                        <div className="md:h-[200px] w-full ml-4 md:ml-0 my-3 relative bg-gray-200">
                            <img src={israel} className="w-full" alt="" />
                            <h2 className="font-bold p-2">Netaniyahu is destroying Palestine.
                            </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>

                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                        <div className="md:h-[204px] md:my-3 bg-gray-200 relative">
                            <img src={iraq} className="w-full" alt="" />
                            <h2 className="font-bold text-sm p-2">Iraq is attacking on ISIS. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] md:my-3 bg-gray-200 relative">
                            <img src={gaza} className="w-full" alt="" />
                            <h2 className="font-bold text-sm p-2">Hammas is fighting against America.</h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] md:my-3 bg-gray-200 relative">
                            <img src={earthquake} className="w-full" alt="" />
                            <h2 className="font-bold text-sm p-2">7.5 magnitude earthquake in Brazil. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] md:my-3 bg-gray-200 relative">
                            <img src={russia} className="w-full" alt="" />
                            <h2 className="font-bold text-sm p-2">Russian plane is crashed. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    <div className="flex pl-10 md:pl-0 mt-4">
                        <img src={satelite} className="w-1/3 h-[100px]" alt="" />
                        <div className="w-2/3 h-[100px] bg-gray-200 relative">
                            <h2 className="font-bold p-2">Iran sent new satelite in space. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex pl-10 md:pl-0 mt-2">
                        <img src={jail} className="w-1/3 h-[100px]" alt="" />
                        <div className="w-2/3 h-[100px] bg-gray-200 relative">
                            <h2 className="font-bold p-2">Putin is sending people to jail. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex pl-10 md:pl-0 mt-2">
                        <img src={netaniyahu} className="w-1/3 h-[100px]" alt="" />
                        <div className="w-2/3 h-[100px] bg-gray-200 relative">
                            <h2 className="font-bold p-2">Israel is returning army from gaza. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                    <div className="flex pl-10 md:pl-0 mt-2">
                        <img src={mendela} className="w-1/3 h-[100px]" alt="" />
                        <div className="w-2/3 h-[100px] bg-gray-200 relative">
                            <h2 className="font-bold p-2">Everybody is remembering Nelson Mendela. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default International;