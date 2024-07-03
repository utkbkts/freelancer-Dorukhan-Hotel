"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { DataImage } from "@/utils/dataimage";
import Image from "next/image";
const Hero = () => {
  return (
    <div>
      {" "}
      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {DataImage.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <Image
                width={400}
                height={400}
                src={item.img}
                alt={item.title}
                className="w-full h-[600px]"
              />
              <div className="absolute z-10 text-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <h5 className="title lg:flex hidden">{item.title}</h5>
                <p className="title-desc">{item.description}</p>
              </div>
              <div className="bg-hero"></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default Hero;
