// import { useEffect, useState } from "react";
// for real time from moment.js
import moment from "moment"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { TfiWrite } from "react-icons/tfi";
import { TiStopwatch } from "react-icons/ti";
import useAdmin, { News } from "../../../Hook/useNews";
// defining typescript 
// interface NewsItem {
//     id: number;
//     headline: string;
//     writer: string;
//     image: string;
//     date: string;
// }

const FeatureNews = () => {
//     const [featureData, setFeatureData] = useState<NewsItem[]>([]);

//     useEffect(() => {
//         fetch("/featureData.json")
//             .then(res => res.json())
//             .then(data => setFeatureData(data))
//     }, [])
    const { newsData: Feature, isLoading: FeatureLoading } =
    useAdmin("Feature");
//   const {_id, section, headline, source, date, summary, details, image} =Feature;
 
  console.log(Feature,FeatureLoading);
  
  if (FeatureLoading || !Feature) {
    return <div>Loading...</div>;
}
    return (
        <div className="md:px-6">
            <h1 className="text-4xl font-bold py-3">Feature News</h1>
            <div>
                <Swiper
                    // slidesPerView={3}
                    spaceBetween={15}
                    // centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
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
                    <div>
                        {
                            Feature.map((news: News) => (
                                <div className="">
                                    <SwiperSlide key={news._id} className="">
                                        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                            <a href="#">
                                                <div>
                                                    <img className="rounded-t-lg h-60 w-full object-cover" src={news.image} alt="" />
                                                </div>
                                            
                                            </a>
                                            <div className="p-5">
                                                <a href="#">
                                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{news.headline}</h5>
                                                </a>
                                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{news.title}</p>
                                                <div className="flex gap-5">
                                                    <p className="flex items-center text-sm"><TfiWrite className="mr-1" />{news.writer}</p>
                                                    <p className="flex items-center text-sm"><TiStopwatch className="mr-1" />
                                                    {moment().format('LL')}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </div>
                </Swiper>

            </div>
        </div>
    );
};

export default FeatureNews;