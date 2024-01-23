import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';
import sidebanner2 from '../../../assets/sidebanner2.jpg';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import moment from "moment"
import { TfiWrite } from "react-icons/tfi";
import { TiStopwatch } from "react-icons/ti";

interface NewsItem {
    id: number;
    headline: string;
    writer: string;
    image: string;
    date: string;
}

const Entertainment = () => {

    const [featureData, setFeatureData] = useState<NewsItem[]>([]);

    useEffect(() => {
        fetch("/featureData.json")
            .then(res => res.json())
            .then(data => setFeatureData(data))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-4">
                    <div className="grid grid-cols-9">
                        <div className="col-span-9 md:col-span-6 lg:col-span-6 p-4">
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={30}
                                loop={true}
                                autoplay={true}
                                navigation={true}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <img src={slider1} className='w-full lg:h-[550px] md:h-[500px] h-[300px]' alt="" />
                                    <h2 className='card-title mt-2 pl-2'>
                                        Temparature is going down. People are suffering much. The lowest temparature is recorded at Dinajpur.
                                    </h2>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider2} className='w-full lg:h-[550px] md:h-[500px] h-[300px]' alt="" />
                                    <h2 className='card-title mt-2 pl-2'>
                                        Bangladesh army is being developed day by day - says Global Fire Power Ranking.
                                    </h2>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src={slider3} className='w-full lg:h-[550px] md:h-[500px] h-[300px]' alt="" />
                                    <h2 className='card-title mt-2 pl-2'>
                                        Bangladesh economy is falling down slowly - says Bangladesh Bank.
                                    </h2>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <div className="hidden md:col-span-3 lg:col-span-3 p-4">
                            <div className="card card-compact bg-base-100 shadow-xl">
                                <figure><img src={sidebanner2} className='w-full md:h-[150px] lg:h-[200px]' alt="news" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Bangladesh and USA will work together - says Peter Haas.
                                    </h2>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="">
                            <Swiper
                                spaceBetween={15}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                navigation={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper"
                                breakpoints={{
                                    640: {
                                        slidesPerView: "auto",
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 15,
                                    },
                                    1024: {
                                        slidesPerView: 3,
                                        spaceBetween: 15,
                                    },
                                }}
                            >
                                <div className="container mx-auto p-2">
                                    <div className="flex items-stretch -mx-4">
                                        {
                                            featureData.map((news: NewsItem) => (
                                                <SwiperSlide key={news.id}>
                                                    <div className="flex-1 bg-white shadow dark:bg-gray-800 dark:border-gray-700">
                                                        <div className="block overflow-hidden border-2 h-full rounded-md">
                                                            <a href="#">
                                                                <div>
                                                                    <img className="rounded-t-lg h-60 w-full object-cover" src={news.image} alt="" />
                                                                </div>
                                                            </a>
                                                            <div className="p-2">
                                                                <h2 className="mt-2 mb-2 font-bold text-2xl text-gray-900  font-Heading dark:text-white">
                                                                    {news.headline}
                                                                </h2>
                                                                <div className="mb-4 flex flex-wrap text-gray-700 dark:text-gray-400">
                                                                    {news.headline}
                                                                </div>
                                                                {/* <p className="text-md text-justify">Some Description</p> */}
                                                            </div>
                                                            <div className=" px-4 flex flex-wrap gap-2 items-center">
                                                                <p className="flex items-center text-sm"><TfiWrite className="mr-1" />{news.writer}</p>
                                                                <p className="flex items-center text-sm"><TiStopwatch className="mr-1" />
                                                                    {moment().format('LL')}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))
                                        }
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
                {/* sidebar */}
                <div className="col-span-2 bg-gray-300 mt-4 rounded-md">
                    Sidebar
                </div>
            </div>


        </div>
    );
};

export default Entertainment;