import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import '../styles.css';

// import required modules
import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

const SwiperSlider = () => {
    return (
        <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            pagination={true}
            autoplay={{
                delay: 3000, // 3 seconds
                disableOnInteraction: false,
            }}
            modules={[EffectCube, Pagination, Autoplay]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="card bg-[#f5c3df] text-primary-content w-[400px] md:w-[500px] h-[300px]">
                    <div className="card-body">
                        <h2 className="text-center">MODERN & SIMPLE</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ea nemo error quae eum cupiditate temporibus, veniam cumque perferendis, laudantium esse nostrum nihil voluptatum, architecto soluta. Eos soluta ab ad!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card bg-[#f5c3df] text-primary-content w-[400px] md:w-[500px] h-[300px]">
                    <div className="card-body">
                        <h2 className="text-center">COST EFFECTIVENESS</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ea nemo error quae eum cupiditate temporibus, veniam cumque perferendis, laudantium esse nostrum nihil voluptatum, architecto soluta. Eos soluta ab ad!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card bg-[#f5c3df] text-primary-content w-[400px] md:w-[500px] h-[300px]">
                    <div className="card-body">
                        <h2 className="text-center">TIMELY DELIVERY</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ea nemo error quae eum cupiditate temporibus, veniam cumque perferendis, laudantium esse nostrum nihil voluptatum, architecto soluta. Eos soluta ab ad!</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card bg-[#f5c3df] text-primary-content w-[400px] md:w-[500px] h-[300px]">
                    <div className="card-body">
                        <h2 className="text-center">UNIQUE IDEAS</h2>
                        <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore ea nemo error quae eum cupiditate temporibus, veniam cumque perferendis, laudantium esse nostrum nihil voluptatum, architecto soluta. Eos soluta ab ad!</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default SwiperSlider;
