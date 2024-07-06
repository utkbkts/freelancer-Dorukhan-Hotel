"use client";

import { DataImageRoom } from "@/utils/dataimage";
import Image from "next/image";
import { useEffect, useState } from "react";

const RoomDetail = ({ params }) => {
  const id = params.id;
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.img.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.img.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (id) {
      const numericId = Number(id);
      const res = DataImageRoom.find((x) => x.id === numericId);

      if (res) {
        setData(res);
      } else {
        console.log(`No item found with id: ${id}`);
      }
    }
  }, [id]);

  console.log(data);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-center">
        {data && (
          <div className="w-full">
            <Image
              key={data.img[currentIndex]}
              src={data.img[currentIndex] || data.img}
              alt="image"
              width={800}
              height={500}
              className="w-full h-[500px] object-cover rounded-lg shadow-lg"
            />
            {data.img.length > 0 && (
              <div className="flex justify-between w-full mt-4">
                <button onClick={prevSlide} className="bg-gray-300 p-2 rounded">
                  Geri
                </button>
                <button onClick={nextSlide} className="bg-gray-300 p-2 rounded">
                  İleri
                </button>
              </div>
            )}
          </div>
        )}
        <div className="w-full mt-8 p-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-black">{data?.type}</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <span className="font-semibold">Metre Kare:</span>
              <span className="text-black">{data?.Area} m²</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Park Alanı:</span>
              <span className="text-black">{data?.parking}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Fiyat:</span>
              <span className="text-black">₺{data?.price} / Günlük</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Oda Sayısı:</span>
              <span className="text-black">{data?.floor}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Banyo:</span>
              <span className="text-black">{data?.Bathrooms}</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold">Yatak Sayısı:</span>
              <span className="text-black">{data?.Bedrooms}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
