"use client";

import React, { useState } from "react";
import img from "../../images/ev-detaylari.jpg";
import info from "../../images/info-icon-01.png";
import info1 from "../../images/info-icon-02.png";
import info2 from "../../images/info-icon-03.png";
import info3 from "../../images/info-icon-04.png";
import Image from "next/image";
import { HomeDetail } from "@/utils/dataimage";
const HomeDetailsPage = () => {
  const [selected, setSelected] = useState(null);
  const toggle = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };
  return (
    <div className="container mx-auto mt-24">
      <div className="flex lg:flexr-row flex-col items-center gap-6">
        <div className="lg:flex-[2] w-full">
          <div>
            <Image
              src={img}
              alt="image"
              width={400}
              height={400}
              className="w-full h-full rounded-md"
            />
          </div>
        </div>
        <div className="lg:flex-1 w-full h-full">
          <div className="bg-white area h-full flex flex-col gap-4">
            <div className="flex items-center gap-2 border-b p-4">
              <Image
                src={info}
                alt="info"
                width={400}
                height={400}
                className="w-14 h-16"
              />
              <div className="flex flex-col gap-1">
                <h1>50 m2</h1>
                <span>Çift Katlı Dairelerimiz</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b p-4">
              <Image
                src={info1}
                alt="info"
                width={400}
                height={400}
                className="w-14 h-16"
              />
              <div className="flex flex-col gap-1">
                <h1>Sözleşme</h1>
                <span>1 hafta önceden yerinizi ayırtın</span>
              </div>
            </div>
            <div className="flex items-center gap-2 border-b p-4">
              <Image
                src={info2}
                alt="info"
                width={400}
                height={400}
                className="w-14 h-16"
              />
              <div className="flex flex-col gap-1">
                <h1>Ödeme Kolaylığı</h1>
                <span>Kart ve Nakit</span>
              </div>
            </div>{" "}
            <div className="flex items-center gap-2 border-b p-4">
              <Image
                src={info3}
                alt="info"
                width={400}
                height={400}
                className="w-14 h-16"
              />
              <div className="flex flex-col gap-1">
                <h1>Güvenlik</h1>
                <span>7/24 Kontrol Altında</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="border-b">
          <button className="py-1 px-4 bg-[#FBD9CF] text-black text-[14px] font-medium rounded-md">
            Daireler
          </button>
          <h1 className="title-header mt-12 mb-12">
            Merkez, 28950 Kümbet/Dereli/Giresun
          </h1>
        </div>
        <div className="paragraph">
          {HomeDetail.map((item) => (
            <p
              key={item.id}
              className="flex flex-col gap-1 overflow-hidden bg-[#FAFAFA]"
            >
              <span
                onClick={() => toggle(item.id)}
                className="flex items-center justify-between cursor-pointer"
              >
                <strong>{item.title}</strong>
                <span className="text-[20px] ">
                  {selected === item.id ? "-" : "+"}
                </span>
              </span>
              <span className={`content ${selected === item.id ? "show" : ""}`}>
                {item.desc}
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDetailsPage;
