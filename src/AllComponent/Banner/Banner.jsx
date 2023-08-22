

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
const Banner = () => {
    return (
        <>
       <div className='grid mx-40 grid-cols-2'>
        <div className='bg-green-800 w-[560px] h-[630px] '>

        </div>
        <div className='grid gap-10'>
            <div className='bg-blue-500 w-[650px] h-[300px]'>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

            </div>
            <div className='flex gap-10'>
                <div className='w-[240px] bg-yellow-200 h-[300px]'>

                </div>
                <div className='w-[380px] bg-slate-200 h-[300px]'>

                </div>

            </div>
        </div>

       </div>
            
        </>
    );
};

export default Banner;