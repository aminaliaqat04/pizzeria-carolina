"use client";

import BannerBg from "../../public/pizza-img-1.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
import { Autoplay, Navigation } from "swiper";

import 'swiper/css';


const SwiperImgSlider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Navigation]}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper : any) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={BannerBg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={BannerBg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={BannerBg} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={BannerBg} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default SwiperImgSlider
