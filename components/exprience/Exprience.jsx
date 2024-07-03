"use client";

import Image from "next/image";
import React from "react";
import image from "../../images/customar2.png";
import image1 from "../../images/2.jpg";
const Exprience = () => {
  return (
    <div className="w-full h-full mt-24">
      <div className="flex items-center justify-between gap-12 lg:flex-row flex-col">
        <div className="lg:flex-[1] w-full">
          <div className="relative image-fluid">
            <Image
              src={image}
              alt="image"
              width={40}
              height={40}
              className="w-[300px] h-[300px] absolute right-0 z-[0] -top-8 rounded-md lg:block hidden"
            />
            <Image
              src={image1}
              alt="image"
              width={400}
              height={400}
              className="lg:w-[600px] w-full h-[400px] relative rounded-md"
            />
            <div className="service-experience lg:block hidden">
              <h1 className="title-p rounded-md text-center">
                10 Yıllık Hizmet Tecrübesi
              </h1>
            </div>
          </div>
        </div>
        <div className="lg:flex-[1] w-full">
          <div className="flex flex-col gap-8 items-start lg:text-start text-center">
            <h1 className="text-[14px] lg:text-start text-center w-full leading-[21px] font-bold not-italic text-[#dca73a]">
              Otelimiz Hakkında
            </h1>
            <p className="text-[28px]  leading-[34px] w-full font-bold not-italic text-[#112e41]">
              Müşteriyi hikayenizin kahramanı yapın
            </p>
            <p className="text-[20px] leading-[28px] font-medium not-italic text-[#112e41]">
              Otelimiz, konfor ve lüksü bir araya getiren benzersiz bir tatil
              deneyimi sunmaktadır. Doğal güzelliklerin ortasında yer alan
              otelimiz, misafirlerine huzur dolu bir konaklama sunmayı
              amaçlamaktadır.
            </p>
            <p className="text-[15px] leading-[34px] font-medium not-italic text-[#112e41]">
              Modern tasarımı, geniş odaları ve sunduğu çeşitli hizmetlerle
              otelimiz, tüm misafirlerimizin ihtiyaçlarına hitap etmektedir.
              Konuklarımız, gurme restoranlarımızda lezzetli yemeklerin tadını
              çıkarabilir. İş ya da tatil amaçlı seyahat eden misafirlerimiz
              için mükemmel bir konaklama deneyimi sunuyoruz.
            </p>
            <button className="btn btn-warning lg:block flex items-center justify-center w-full lg:w-auto">
              Daha Fazla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exprience;
