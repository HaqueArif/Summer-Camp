import { Link } from 'react-router-dom';
import slid1 from '../../../assets/slider/ts1.png'
import slid2 from '../../../assets/slider/ts2.png'
import slid4 from '../../../assets/slider/ts4.png'
import './Banner.css'
import './styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper';
import { useRef } from 'react';


const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='relative'>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                
                navigation={true}
                modules={[Autoplay,  Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slid1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slid4} alt="" />
                </SwiperSlide>
                <div className="autoplay-progress z-50"  slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
            
            <div className='absolute top-[93%] w-full bannerBottom uppercase flex flex-wrap justify-center py-2 bg-[#FA2F4A]'>
                <div className="campHover my-3 md:my-5"><Link className="bannerNav shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#fd567d] text-white text-xs md:text-md mr-5 p-1 md:px-8 md:py-3">About camps</Link></div>

                <div className="campHover my-3  md:my-5"><Link className="bannerNav shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#fd567d] text-white text-xs md:text-md mr-5 p-1 md:px-8 md:py-3">Daily Schedule</Link></div>

                <div className="campHover my-3  md:my-5"><Link className="bannerNav shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#fd567d] text-white text-xs md:text-md mr-5 p-1 md:px-8 md:py-3">Our staff</Link></div>

                <div className="campHover my-3 md:my-5"><Link className="bannerNav shadow-xl font-extrabold hover:bg-white hover:text-[#204FB6] bg-[#fd567d] text-white text-xs md:text-md mr-5 p-1 md:px-8 md:py-3">Faqs</Link></div>
            </div>
        </div>
    );
};

export default Banner;