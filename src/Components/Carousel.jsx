
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img from '../Assets/offer.bmp'

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
  Pagination
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination]);


export default function App() {
  
  
  
  return (
    <>
    <Swiper slidesPerView={1} spaceBetween={30} pagination={{
  "clickable": false
}} className="mySwiper">
  <SwiperSlide><img src={Img} alt="" /></SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide><SwiperSlide>Slide 4</SwiperSlide><SwiperSlide>Slide 5</SwiperSlide>
  </Swiper>
    </>
  )
}