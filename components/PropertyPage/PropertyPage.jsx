"use client";

import { DataImageRoom } from "@/utils/dataimage";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const PropertyPage = () => {
  const [categoryType, setCategoryType] = useState("Hepsi");
  const [filteredRooms, setFilteredRooms] = useState(DataImageRoom);

  useEffect(() => {
    if (categoryType === "Hepsi") {
      setFilteredRooms(DataImageRoom);
    } else {
      setFilteredRooms(
        DataImageRoom.filter((item) => item.type === categoryType)
      );
    }
  }, [categoryType]);
  return (
    <div className="container mx-auto mt-24">
      <div className="flex items-center gap-6 justify-center">
        <button
          onClick={() => setCategoryType("Hepsi")}
          className={`btn btn-neutral text-white hover:text-warning transition-all duration-100 home ${
            categoryType === "Hepsi" ? "active" : ""
          }`}
        >
          Hepsi
        </button>
        <button
          onClick={() => setCategoryType("Dubleks Daire")}
          className={`btn btn-neutral text-white hover:text-warning transition-all duration-100 home ${
            categoryType === "Dubleks Daire" ? "active" : ""
          }`}
        >
          Dubleks Ev
        </button>
        <button
          onClick={() => setCategoryType("Tek Katlı")}
          className={`btn btn-neutral text-white hover:text-warning transition-all duration-100 home ${
            categoryType === "Tek Katlı" ? "active" : ""
          }`}
        >
          Tek Katlı Ev
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {filteredRooms.map((item, index) => (
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={item.id}
            className="shadow-lg border h-full rounded-md overflow-hidden mt-12"
          >
            <Image
              src={item.img}
              alt="image"
              width={400}
              height={400}
              className="w-full h-[250px] rounded-md room-img"
            />
            <div className="flex items-center justify-between">
              <h1 className="text-[14px] leading-[21px] not-italic font-medium text-black px-2 py-1 hover:text-warning cursor-pointer bg-[#FBD9CF]">
                {item.type}
              </h1>
              <p className="text-[20px] leading-[24px] not-italic font-medium text-[#f35525] p-4 ">
                ₺{item.price}{" "}
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
