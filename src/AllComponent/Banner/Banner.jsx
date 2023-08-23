

import React, { useRef, useState } from 'react';
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"
import img3 from "../../assets/3.png"
import img4 from "../../assets/5.png"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination ,Autoplay} from 'swiper/modules';
import CategoryTitle from '../ReusableComponenet/CategoryTitle';
const Banner = () => {
    return (
        <>
       <div className='grid mx-40 grid-cols-2'>
        <div data-aos="zoom-out"  data-aos-duration="1500" className='w-[560px] shadow-xl bg-[rgb(230,230,230)] overflow-hidden relative h-[630px]   '>
        <div className='absolute top-10 left-5 z-10'>
<CategoryTitle  title={'Watches'} subtitle={"SHOP NOW"}/>
</div>
<img className='w-[560] absolute top-10 left-10  z-0 h-[630px] duration-500 hover:scale-110   object-cover' src={img1} alt="" />



        </div>
        <div className='grid gap-10'>
            <div  data-aos="zoom-in"    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='bg-[rgb(230,230,230)] shadow-xl relative overflow-hidden w-[650px] h-[300px]'>
            <div className='absolute top-10 left-5 z-10'>
<CategoryTitle  title={'Lamp'} subtitle={"SHOP NOW"}/>
</div>
            <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Pagination,Autoplay]}
        className="mySwiper absolute  -right-52"
      >
        <SwiperSlide><img className='w-[350px]   duration-500 hover:scale-110  h-[300px] object-cover' src={img4} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[350px]   duration-500 hover:scale-110  h-[300px] object-cover' src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-[350px]   duration-500 hover:scale-110  h-[300px] object-cover' src={img1} alt="" /></SwiperSlide>
 
      </Swiper>

            </div>
            <div className='flex gap-10'>
                <div data-aos="zoom-out"    data-aos-offset="200"   data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='w-[240px] overflow-hidden relative border-2  shadow-xl  h-[300px]'>
                <div className='absolute scale-75 top-0 left-0 z-10'>
<CategoryTitle  title={'Bag'} subtitle={"SHOP NOW"}/>
</div>
                <img className='w-[240px] hover:scale-110 duration-500 h-[300px] object-cover' src={img2}  alt="" />

                </div>
                <div data-aos="zoom-in"    data-aos-offset="200"   data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out" className='w-[380px] shadow-xl  overflow-hidden relative  h-[300px]'>
                <img className='w-[380px] h-[300px] object-cover hover:scale-110 duration-500' src={img3}  alt="" />
                <div className='absolute  top-0 right-5 z-10'>
<CategoryTitle  title={'Cap'} subtitle={"SHOP NOW"}/>
</div>

                </div>

            </div>
        </div>

       </div>
            
        </>
    );
};

export default Banner;