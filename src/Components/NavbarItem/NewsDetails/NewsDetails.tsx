import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import snowImg from '../../../assets/snowfall.jpg';
import satelite from '../../../assets/091413_bangladesh_pratidin_Satellite.jpg';
import jail from '../../../assets/095722_bangladesh_pratidin_Jail.jpg';
import netaniyahu from '../../../assets/081157_bangladesh_pratidin_US_Israel.jpg'

import mendela from '../../../assets/131904_bangladesh_pratidin_Mandela.jpg'


const NewsDetails = () => {
    return (
        <div className="md:px-6 my-5">
            <div className="flex justify-between bg-gray-200 p-4">
                <h2 className="text-3xl font-bold ">News Details</h2>
                <Link to='/'>
                    <button className="bg-red-500 text-white font-bold p-2 rounded-md">Back to Home</button>
                </Link>
            </div>

            <div className="grid md:grid-cols-6 grid-cols-1 gap-4 mt-4">
                <div className="col-span-4">
                    <div className="text-center mb-4 bg-base-200 relative">
                        <img src={snowImg} className="w-full md:h-[400px]" alt="" />
                        <h2 className="font-bold text-2xl p-2">Severe snowfall in USA. 80 people are died. People can not go outside. Traffic are stopped. A lot of people are getting sick and admitted to hospital.  </h2>
                        <div className="absolute bottom-2 right-2">
                            <button className="text-xs"><FaBookmark></FaBookmark></button>
                        </div>
                    </div>

                    <div className="p-5">
                        <h2 className="text-2xl font-bold my-4">Stuff Correspondent || New York || USA.</h2>
                        <p>
                            Severe snowfall in the USA can have significant and harmful impacts on the general public's health. The extreme weather conditions associated with heavy snowfall often lead to transportation disruptions, making it challenging for individuals to access essential services such as healthcare facilities and pharmacies.
                        </p>

                        <p>
                            Emergency response times may be delayed, posing a threat to those in need of urgent medical attention. Moreover, prolonged exposure to harsh winter conditions can increase the risk of cold-related illnesses, such as hypothermia and frostbite, particularly among vulnerable populations like the homeless or those with limited resources to cope with extreme weather.
                        </p>

                        <p>
                            In addition to the physical health risks, severe snowfall can also have adverse effects on mental health. The isolation caused by impassable roads and disrupted public services can lead to feelings of loneliness and anxiety, exacerbating existing mental health conditions.
                        </p>

                        <p>
                            Individuals may experience stress due to the uncertainty surrounding their safety and well-being during the prolonged period of snowfall. Moreover, the economic impact of the weather event, including potential job loss and financial strain, can contribute to increased stress levels within the affected communities.
                        </p>

                        <p>
                        Furthermore, the widespread power outages often associated with severe snowfall can jeopardize public health by hindering access to essential utilities. Heating systems may fail, exposing individuals to dangerously low temperatures indoors.
                        </p>

                        <p>
                        This not only increases the risk of cold-related illnesses but also creates challenges in preserving medications and medical supplies that require specific storage conditions. The combination of physical, mental, and economic stressors during severe snowfall underscores the need for robust emergency preparedness and response measures to mitigate the adverse impacts on the general public's health.
                        </p>
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

export default NewsDetails;