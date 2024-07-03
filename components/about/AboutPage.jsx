"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { DataImageRoom } from "@/utils/dataimage";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
const AboutPage = () => {
  return (
    <>
      <div className="mt-24 single-dining-area left-img">
        <div className="container">
          <div className="flex flex-wrap justify-end">
            <div className="lg:max-w-[66%] w-full mt-[4rem]">
              <div className="dinnig-caption">
                <span>Otelimiz</span>
                <h1>Yemek & İçecekler</h1>
                <p>
                  Otelimizde sizlere sunduğumuz eşsiz gastronomi deneyimlerine
                  hoş geldiniz. Usta şeflerimiz tarafından özenle hazırlanan
                  menülerimizde, dünyanın dört bir yanından gelen lezzetleri
                  bulabilirsiniz. Misafirlerimize her öğünde taze, yerel ve
                  kaliteli malzemelerle hazırlanan yemekler sunuyoruz. Geniş
                  içecek yelpazemizle, yemeklerinize eşlik edecek mükemmel bir
                  içecek bulacağınızdan emin olabilirsiniz. Otelimizin
                  restoranı, konforlu ve şık ortamıyla, sevdiklerinizle keyifli
                  vakit geçirmenizi sağlıyor. Size özel hazırladığımız bu lezzet
                  yolculuğunda yerinizi alın ve unutulmaz anılar biriktirin.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[75px] single-dining-area right-img">
        <div className="container">
          <div className="flex flex-wrap justify-start">
            <div className="lg:max-w-[66%] w-full mt-[4rem]">
              <div className="dinnig-caption">
                <span>Otelimiz</span>
                <h1>Konaklama Seçenekleri</h1>
                <p>
                  Otelimizde konforlu ve modern tasarımıyla dikkat çeken
                  evlerimizde konaklama ayrıcalığını yaşayabilirsiniz. Her
                  detayın özenle düşünüldüğü, rahat ve ferah yaşam alanlarımız,
                  misafirlerimize evlerindeki konforu aratmayacak bir deneyim
                  sunuyor. Şık mobilyalar, tam donanımlı mutfaklar ve geniş
                  oturma alanları ile evlerimizde kendinizi evinizde
                  hissedeceksiniz. Her odada bulunan yüksek hızlı internet
                  bağlantısı ve akıllı TV'ler ile hem iş hem de eğlenceyi bir
                  arada bulabileceksiniz. Balkon veya teras seçenekleri ile de
                  muhteşem manzaranın tadını çıkarabilirsiniz. Otelimizin
                  huzurlu ve güvenli ortamında, sevdiklerinizle birlikte
                  unutulmaz anılar biriktirmenizi dileriz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[30rem]">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={3}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          {DataImageRoom.map((item) => (
            <SwiperSlide>
              <Image
                src={item.img}
                alt="image"
                width={400}
                height={400}
                className="w-[400px] h-[300px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default AboutPage;
