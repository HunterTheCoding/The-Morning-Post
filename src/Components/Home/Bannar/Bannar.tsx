import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import { Link } from "react-router-dom";
export interface Bannar {
  _id: string;
  title: string;
  summry: string;
  image: string;
}
const Bannar = () => {
  const AxiosPublic = useAxiosPublic();
  const { data: bannar } = useQuery({
    queryKey: ["bannar"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/bannar`);
      return res.data;
    },
  });
  console.log(bannar);
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 my-4 gap-4">
      <div className="col-span-2 shadow-lg">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={true}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {bannar?.slice(0, 3).map((item: Bannar) => (
            <SwiperSlide key={item._id}>
              <div>
                <img
                  src={item?.image}
                  className="w-full lg:h-[550px] md:h-[500px] h-[300px]"
                  alt=""
                />
                <h2 className="card-title mt-2 pl-2">{item.title}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col gap-4">
        {bannar?.slice(3, 5).map((item: Bannar) => (
          <Link to={`/newsdetails/${item?._id}`} key={item._id}>
            <div className="card card-compact bg-base-100 shadow-xl">
              <figure>
                <img
                  src={item?.image}
                  className="w-full md:h-[150px] lg:h-[200px]"
                  alt="news"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item?.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Bannar;
