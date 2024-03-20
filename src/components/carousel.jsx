import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Carousel() {
    const [swiper, setSwiper] = useState(null);

    const handleMouseEnter = () => {
        if (swiper) {
            swiper.autoplay.stop();
        }
    };

    const handleMouseLeave = () => {
        if (swiper) {
            swiper.autoplay.start();
        }
    };


    return (
        <div className='mx-auto w-96 h-200 py-8' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Swiper
                style={{paddingBottom: "2rem"}}
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                onSwiper={setSwiper}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="flex">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1710523260461-c7c7f9ab7226?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-1/2"
                        />
                        <div className="w-1/2 p-4">
                            <h2 className="text-xl font-bold">Title Here</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1710523260461-c7c7f9ab7226?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-1/2"
                        />
                        <div className="w-1/2 p-4">
                            <h2 className="text-xl font-bold">Title Here</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1710523260461-c7c7f9ab7226?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-1/2"
                        />
                        <div className="w-1/2 p-4">
                            <h2 className="text-xl font-bold">Title Here</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1710523260461-c7c7f9ab7226?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                            className="w-1/2"
                        />
                        <div className="w-1/2 p-4">
                            <h2 className="text-xl font-bold">Title Here</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div>
                <Link to="/about"> About </Link>
            </div>
        </div>
    );
}