import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination ,Autoplay, Navigation} from 'swiper/modules';
import SectionTitle from '../ReusableComponenet/SectionTitle';
import CartDesign1 from '../ReusableComponenet/CartDesign1';

const Popularproduct = () => {
    return (
        <div>
            <SectionTitle title={"Popular Products"} Subtitle={"Choose the perfect product from our popular collection"}/>


            <div >
            {/* <div className="carousel-container lg:scale-100 scale-50">
  <div className="carousel">
    <div className="item">Item 1</div>
    <div className="item">Item 2</div>
    <div className="item">Item 3</div>
    <div className="item">Item 4</div>
    <div className="item">Item 5</div>
    <div className="item">Item 6</div>
  </div>
  <div className="nav-arrow prev">&lt;</div>
  <div className="nav-arrow next">&gt;</div>
</div> */}
<div className='w-[1300px]'>
    
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        
        autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          navigation={true}
        modules={[Pagination,Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='m-[10px]'><CartDesign1/></SwiperSlide>
        <SwiperSlide className='m-[10px]'><CartDesign1/></SwiperSlide>
        <SwiperSlide className='m-[10px]'><CartDesign1/></SwiperSlide>
        <SwiperSlide className='m-[10px]'><CartDesign1/></SwiperSlide>
        <SwiperSlide className='m-[10px]'><CartDesign1/></SwiperSlide>
      
      </Swiper>
</div>

            </div>

            
        </div>
    );
};

export default Popularproduct;