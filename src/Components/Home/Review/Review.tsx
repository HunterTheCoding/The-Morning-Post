
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../../Hook/useAxiosPublic';

interface review{
  _id:string,
  text:string,
  name: string,
  roll:string
}

export default function Review() {
  const AxiosPublic = useAxiosPublic();
  
  const { data,isLoading } = useQuery({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await AxiosPublic.get(`/review`);
      return res.data;
    },
  });
  if(isLoading){
    return <h1>Loading ...</h1>
  }
  return (
    <><div>
      <h1 className= ' text-xl md:text-2xl font-bold px-5'>Our Happy customer</h1>
    </div>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
      {
        data?.map((item:review)=><SwiperSlide key={item?._id} className='bg-blue-100 border rounded-md'>
        <div className='p-5 '>
          <p className='text-base'>{item?.text}</p>
          <div className="flex px-2 mt-5">
            <div className="w-14 mask mask-squircle">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
            <div className="mt-2 ml-3 text-gray-500">
              <p className="text-black font-blod">{item?.name}</p>
              <p>{item?.roll}</p>
            </div>
          </div>
        </div>
      </SwiperSlide>)
      }
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
