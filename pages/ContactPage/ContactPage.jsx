"use client";

import React from "react";
import { IoHomeOutline } from "react-icons/io5";
import { BsTelephoneForward } from "react-icons/bs";
import { IoMailUnreadOutline } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div className="container mx-auto mt-24">
      <div>
        <h1 className="text-[27px] leading-[32px] font-bold text-black mb-12">
          İletişime Geçin
        </h1>
        <div className="flex items-start gap-12 md:flex-row flex-col">
          <form className="form-control-wrapper md:flex-[2] w-full flex flex-col gap-4">
            <div className="flex items-center flex-col gap-4">
              <textarea
                name="message"
                placeholder="mesaj"
                id=""
                required
              ></textarea>
              <input type="text" name="subject" placeholder="konu" />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                name="name"
                placeholder="ad ve soyad"
                required
              />
              <input type="email" name="email" placeholder="email" required />
            </div>
            <div>
              <button className="boxed-btn" type="submit">
                Gönder
              </button>
            </div>
          </form>
          <div className="md:flex-1 w-full flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <IoHomeOutline size={35} />
              <div>
                <h1>Kümbet/Dereli/Giresun</h1>
                <span>28950 </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephoneForward size={35} />
              <div>
                <h1>0 (454) 386 60 37</h1>
                <span>Pazartesi - Cuma 9:00 - 18:00 </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <IoMailUnreadOutline size={35} />
              <div>
                <h1>utkbktss5@gmail.com</h1>
                <span>İstediğiniz zaman bize sorunuzu gönderin! </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
