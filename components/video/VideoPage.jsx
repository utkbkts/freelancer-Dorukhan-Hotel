"use client";
import Title from "@/ui/Title";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../images/gallery1.jpg";
import { CiPlay1 } from "react-icons/ci";
import ReactPlayer from "react-player";
const VideoPage = () => {
  const [showModal, setShowModal] = useState(false);
  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };
  return (
    <div className="mt-24">
      <Title text={"Biz Kimiz"} texttwo={"Biz Kimiz"} />
      <div>
        <div className="relative">
          <Image
            src={logo}
            alt="image"
            width={400}
            height={400}
            className="w-full h-[500px] "
          />
          <div className="filter-video"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col gap-2 items-center">
              <span className="leading-[18px] text-[18px] text-[#ee626b] font-bold">
                | Videomuz
              </span>
              <span className="lg:text-[40px] text-[20px] leading-[50px] font-bold text-white text-center">
                Daha Yakından Görünüm ve Farklı Duygular Alın
              </span>
            </div>
            <div className="absolute bottom-[-8rem] left-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
              <div
                className="bg-white rounded-full btn-play relative w-16 h-16 flex items-center justify-center cursor-pointer"
                onClick={handlePlayClick}
              >
                <CiPlay1
                  size={30}
                  className=" text-primary relative z-10 bg-transparent"
                />
              </div>
              {showModal && (
                <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex items-center justify-center z-[999]">
                  <div className="relative">
                    <span
                      className="absolute top-[-25px] right-2 text-black cursor-pointer"
                      onClick={handleCloseClick}
                    >
                      Kapat
                    </span>
                    <ReactPlayer
                      url={"https://www.youtube.com/watch?v=ev9oDyMP9gM&t=34s"}
                      height={"85vh"}
                      width={"70vw"}
                      controls={true}
                      className="overflow-hidden  bg-secondary"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;
