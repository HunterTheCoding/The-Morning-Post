import snowImg from '../../../assets/snowfall.jpg';
import satelite from '../../../assets/091413_bangladesh_pratidin_Satellite.jpg';
import jail from '../../../assets/095722_bangladesh_pratidin_Jail.jpg';
import netaniyahu from '../../../assets/081157_bangladesh_pratidin_US_Israel.jpg'
import israel from '../../../assets/102918_bangladesh_pratidin_Netanyahu2.jpg'
import iraq from '../../../assets/082432_bangladesh_pratidin_Iraq.jpg'
import gaza from '../../../assets/085941_bangladesh_pratidin_Gaza3.jpg'
import earthquake from '../../../assets/103756_bangladesh_pratidin_earthquake-magnitude-bdp.jpg'
import russia from '../../../assets/160001_bangladesh_pratidin_Russia.jpg'
import usa from '../../../assets/130511_bangladesh_pratidin_USA.jpg'
import mexico from '../../../assets/101632_bangladesh_pratidin_poicia.jpg';
import snowStrom from '../../../assets/084958_bangladesh_pratidin_zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzza.jpg'
import saudi from '../../../assets/125314_bangladesh_pratidin_Saudi.jpg'
import mendela from '../../../assets/131904_bangladesh_pratidin_Mandela.jpg'
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

    const { newsData: InternationalData, isLoading: InternationalDataLoading } =
    useAdmin("International");
//   const {_id, section, headline, source, date, summary, details, image} =InternationalData;
 console.log(InternationalData,InternationalDataLoading);
 
  
    return (
        <div className="md:px-6 my-5">
            <div className="flex justify-between bg-gray-200 p-4">
                <h2 className="text-3xl font-bold ">World News</h2>
                <Link to={"/"}>
                    <button className="bg-red-500 text-white font-bold p-2 rounded-md">Back to Home</button>
                    <button onClick={handlePrint} className="bg-gray-300 text-white font-bold p-2 rounded-md">Print</button>
                </Link>
            </div>

            <div ref={componentRef} className="grid md:grid-cols-6 grid-cols-1 gap-4 mt-4">
                <div className="col-span-4">
                    <div className="text-center mb-4 bg-base-200 relative">
                        <img src={snowImg} className="w-full md:h-[400px]" alt="" />
                        <h2 className="font-medium text-2xl p-2">Severe snowfall in USA. 80 people are died. People can not go outside. Traffic are stopped. A lot of people are getting sick and admitted to hospital.  </h2>
                        <div className="absolute bottom-2 right-2">
                            <button className="text-xs"><FaBookmark></FaBookmark></button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
                        <div className="flex">
                            <div className="w-1/2 md:h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Iran sent new satelite in space. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                            <img src={satelite} className="w-1/2 h-[100px]" alt="" />
                        </div>
                        <div className="flex">
                            <div className="w-1/2 md:h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Netaniyahu is destroying Palestine for his power. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                            <img src={israel} className="w-1/2 h-[100px]" alt="" />
                        </div>
                        <div className="flex">
                            <div className="w-1/2 md:h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">America Israel friendship is muchmd: stro w-1/2nger. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                            <img src={netaniyahu} className="w-1/2 h-[100px]" alt="" />
                        </div>
                        <div className="flex">
                            <div className="w-1/2 md:h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Putin is sending people to jail. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                            <img src={jail} className="w-1/2 h-[100px]" alt="" />
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 my-4">
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={iraq} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">Iraq is attacking on ISIS. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={gaza} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">Hammas is fighting against America.</h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={earthquake} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">7.5 magnitude earthquake in Brazil. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={russia} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">Russian plane is crashed. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200
                         relative">
                            <img src={usa} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">2 Nevy person of USA died. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={mexico} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">12 killed in Mexico due to ceoss fire.</h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={snowStrom} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">Snow fall is becoming disaster in USA. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>
                        <div className="md:h-[204px] bg-gray-200 relative">
                            <img src={saudi} className="w-full" alt="" />
                            <h2 className="font-bold text-sm  lg:text-base p-2">Saudi USA relationship is very good. </h2>
                            <div className="absolute bottom-2 right-2">
                                <button className="text-xs"><FaBookmark></FaBookmark></button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-span-2">
                    <div className="ml-10 md:ml-0 bg-gray-200 p-4">
                        <h2 className="text-3xl font-bold ">Latest News</h2>
                        <div className="flex mt-4">
                            <img src={satelite} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Iran sent new satelite in space. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <img src={jail} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Putin is sending people to jail. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <img src={netaniyahu} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Israel is returning army from gaza. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <img src={mendela} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Everybody is remembering Mendela. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-10 md:ml-0 lg:mt-5 md:mt-[50px] bg-gray-200 p-4">
                        <h2 className="text-3xl font-bold ">Most Read</h2>
                        <div className="flex mt-4">
                            <img src={satelite} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Iran sent new satelite in space. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <img src={jail} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Putin is sending people to jail. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <img src={netaniyahu} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Israel is returning army from gaza. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-2">
                            <img src={mendela} className="lg:w-1/3 w-1/2 h-[100px]" alt="" />
                            <div className="lg:w-2/3 w-1/2 h-[100px] bg-gray-200 relative">
                                <h2 className="font-bold text-sm  lg:text-base p-2">Everybody is remembering Mendela. </h2>
                                <div className="absolute bottom-2 right-2">
                                    <button className="text-xs"><FaBookmark></FaBookmark></button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default World;
