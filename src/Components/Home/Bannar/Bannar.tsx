import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slider1 from '../../../assets/slider1.jpg';
import slider2 from '../../../assets/slider2.jpg';
import slider3 from '../../../assets/slider3.jpg';
import sidebanner1 from '../../../assets/sidebanner1.jpg';
import sidebanner2 from '../../../assets/sidebanner2.jpg'
import { Pagination, Navigation } from 'swiper/modules';


const Bannar = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
            <div className='col-span-2 shadow-lg'>
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
            <div className='flex flex-col gap-4'>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure><img src={sidebanner1} className='w-full md:h-[150px] lg:h-[200px]' alt="news" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                           All primary and secondary schools will be closed for severe temparature fall. 
                        </h2>
                        
                    </div>
                </div>
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
    );
};

export default Bannar;