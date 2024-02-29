import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import moment from "moment";
import { TfiWrite } from "react-icons/tfi";
import { TiStopwatch } from "react-icons/ti";
import useAdmin from "../../../Hook/useNews";
import HomePage from "../../Survey/Servey";
import { Link } from "react-router-dom";
const Entertainment = () => {
  const { newsData: Entertainment } = useAdmin("Entertainment");
  const { newsData: EntertainmentCover } = useAdmin("Entertainment-cover");
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 md:col-span-3 lg:col-span-3">
          <div className="grid grid-cols-9">
            <div className="col-span-9 md:col-span-9 lg:col-span-9 p-4">
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={true}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                {EntertainmentCover.map((cover) => (
                  <SwiperSlide key={cover._id}>
                    <Link to={`/newsdetails/${cover?._id}`}>
                      <div className="rounded-md">
                        <img
                          src={cover.image}
                          className="w-full lg:h-[550px] md:h-[500px] h-[300px]"
                          alt=""
                        />
                        <h2 className="card-title mt-4 pl-2">
                          {cover.headline}
                        </h2>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
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
                    {Entertainment.map((news) => (
                      <SwiperSlide key={news._id}>
                        <Link to={`/newsdetails/${news?._id}`}>
                          <div className="flex-1 bg-white shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="block overflow-hidden border-2 h-full rounded-md">
                              <a href="#">
                                <div>
                                  <img
                                    className="rounded-t-lg h-60 w-full object-cover"
                                    src={news.image}
                                    alt=""
                                  />
                                </div>
                              </a>
                              <div className="p-2">
                                <h2 className="mt-2 mb-2 font-bold text-2xl h-44  text-gray-900  font-Heading dark:text-white">
                                  {news.headline}
                                </h2>
                                <div className="mb-4 flex flex-wrap text-gray-700 h-44 dark:text-gray-400">
                                  {news.summary}
                                </div>
                                {/* <p className="text-md text-justify">Some Description</p> */}
                              </div>
                              <div className=" px-4 flex flex-wrap gap-2 items-center">
                                <p className="flex items-center text-sm">
                                  <TfiWrite className="mr-1" />
                                  {news.writer}
                                </p>
                                <p className="flex items-center text-sm">
                                  <TiStopwatch className="mr-1" />
                                  {moment().format("LL")}
                                </p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    ))}
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
        {/* sidebar */}
        <div className="hidden md:flex lg:flex col-span-2 rounded-md">
          <HomePage></HomePage>
        </div>
      </div>
    </div>
  );
};

export default Entertainment;
