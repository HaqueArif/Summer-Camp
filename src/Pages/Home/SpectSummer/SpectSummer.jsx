import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import slide1 from '../../../assets/slider/sl1.jpg'
import slide2 from '../../../assets/slider/sl2.jpg'
import slide3 from '../../../assets/slider/sl3.jpg'
import slide4 from '../../../assets/slider/sl4.jpg'
import slide5 from '../../../assets/slider/sl5.jpg'
import slide6 from '../../../assets/slider/sl6.jpg'

import './style.css'

// import required modules
import { EffectCoverflow, Pagination, Autoplay  } from "swiper";

const SpectSummer = () => {
    return (
        <div className="specbg pt-20">
            <div className='px-5 lg:px-40  md:px-10 mb-20'>
                <div className="text-center mx-auto xl:w-6/12">
                    <h1 className="text-5xl md:text-7xl font-bold text-white ">Spectacular Summer Camp Silliness!</h1>
                </div>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={"auto"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination , Autoplay ]}
                    className="mySwiper"
                    autoplay={{ delay: 3000 }} 
                >
                    <SwiperSlide className="slider-slide">
                        <img src={slide1} />
                    </SwiperSlide>
                    <SwiperSlide className="slider-slide">
                        <img src={slide2} />
                    </SwiperSlide >
                    <SwiperSlide className="slider-slide">
                        <img src={slide3} />
                    </SwiperSlide>
                    <SwiperSlide className="slider-slide">
                        <img src={slide4} />
                    </SwiperSlide>
                    <SwiperSlide className="slider-slide">
                        <img src={slide5} />
                    </SwiperSlide>
                    <SwiperSlide className="slider-slide">
                        <img src={slide6} />
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default SpectSummer;