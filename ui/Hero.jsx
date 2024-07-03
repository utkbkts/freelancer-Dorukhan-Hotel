"use client";
import Image from "next/image";
import React from "react";
import gallry from "../images/dining-img.png";
const Hero = ({ title }) => {
  return (
    <div className="w-full h-full">
      <div className="relative">
        <Image
          src={gallry}
          alt=""
          width={4000}
          height={4000}
          className="w-full h-[400px]"
        />
        <div className="bg-hero"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="title-desc">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
