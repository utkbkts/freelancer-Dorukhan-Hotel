"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sendmail", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.success === true) {
      toast.success("Mesajınız başarılı bir şekilde gönderildi.");
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="container mx-auto mt-24">
      <div>
        <div className="flex items-center gap-4 h-full lg:flex-row flex-col">
          <div style={{ width: "100%" }} className="lg:flex-[1] w-full p-4">
            <div>
              <iframe
                width="100%"
                height="500"
                src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Giresun/dereli/k%C3%BCmbet/dorukhan+(Dorukhan%20Otel)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
            <div className="flex items-center gap-4 justify-center mt-6">
              <div className="flex items-center gap-1">
                <BsFillTelephoneFill color="#e59a09" size={40} />
                <div className="flex flex-col items-center">
                  <span className="text-[17px] tex-black font-bold">
                    0 (454) 386 60 37
                  </span>
                  <span className="text-[14px] text-gray-300 font-medium">
                    İletişim Numarası
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <CiMail color="#e59a09" size={50} />
                <div className="flex flex-col items-center">
                  <span className="text-[17px] tex-black font-bold">
                    utkbktss5@gmail.com
                  </span>
                  <span className="text-[14px] text-gray-300 font-medium">
                    İletişim Maili
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:flex-[1] w-full lg:block flex items-center justify-center h-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white form w-[500px] rounded-md h-[580px] p-2"
            >
              <input
                type="text"
                placeholder="Ad Soyad"
                required
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email Adres"
                required
                name="email"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Konu"
                required
                name="subject"
                value={form.subject}
                onChange={handleChange}
              />
              <textarea
                placeholder="Mesaj"
                required
                name="message"
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-neutral">
                Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
