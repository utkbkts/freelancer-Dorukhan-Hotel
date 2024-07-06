"use client";

import Title from "@/ui/Title";
import { DataImageRoom } from "@/utils/dataimage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";

const Rooms = () => {
  const [noOfElement, setNoOfElement] = useState(3);
  const [showMore, setShowMore] = useState(true);
  const router = useRouter();
  const loadMore = () => {
    if (showMore) {
      setNoOfElement(noOfElement + noOfElement);
    } else {
      setNoOfElement(3);
    }
    setShowMore(!showMore);
  };

  const data = DataImageRoom.slice(0, noOfElement);
  return (
    <div className="mt-44 w-full">
      <Title text={"Odalarımız"} texttwo={"Odalarımız"} />
      <div className="container mx-auto mt-24">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 justify-center items-center place-items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="shadow-lg border h-full rounded-md overflow-hidden"
              onClick={() => router.push(`/detay/${item.id}`)}
            >
              <Image
                src={item.img}
                alt="image"
                width={400}
                height={400}
                className="w-[400px] h-[300px] rounded-md room-img"
              />
              <div className="flex items-center justify-between">
                <h1 className="text-[14px] leading-[21px] not-italic font-medium text-black px-2 py-1 hover:text-warning cursor-pointer bg-[#FBD9CF]">
                  {item.type}
                </h1>
                <p className="text-[20px] leading-[24px] not-italic font-medium text-[#f35525] p-4 ">
                  ₺{item.price}
                  <span className="text-[14px] leading-[21px] text-gray-500">
                    /Günlük
                  </span>
                </p>
              </div>
              <div>
                <span className="property-location p-2">{item.address}</span>
              </div>
              <ul className="grid grid-cols-2">
                <li className="property">
                  Yatak: <span className="property-1">{item.Bedrooms}</span>
                </li>
                <li className="property">
                  Banyo: <span className="property-1">{item.Bathrooms}</span>
                </li>
                <li className="property">
                  Metre Kare: <span className="property-1">{item.Area}</span>
                </li>
                <li className="property">
                  Park Alanı: <span className="property-1">{item.parking}</span>
                </li>
                <li className="property">
                  Oda Sayısı: <span className="property-1">{item.floor}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <button onClick={loadMore} className="btn btn-warning group ">
            {showMore ? "Daha Fazla" : "Daha Az"}
            <FaAngleRight className="icon-hidden" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
