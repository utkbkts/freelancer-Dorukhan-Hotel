"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const path = usePathname();
  const [active, setActive] = useState(false);

  const handleHamburgerClick = () => {
    setActive(!active);
  };

  return (
    <div className="border-b relative">
      <header className="container mx-auto ">
        <nav className="flex items-center justify-between py-5  p-2">
          <div>
            <Link href={"/"}>
              {" "}
              <h1 className="title-header lg:text-[26px] !text-[16px]">
                Dorukhan Kümbet Evleri
              </h1>
            </Link>
          </div>
          <ul className=" gap-4 items-center lg:flex hidden">
            <Link href="/">
              <li
                className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
                  path === "/" ? "!text-warning" : ""
                }`}
              >
                Ana Sayfa
              </li>
            </Link>
            <Link href="/hakkimizda">
              <li
                className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
                  path === "/hakkimizda" ? "!text-warning" : ""
                }`}
              >
                Hakkımızda
              </li>
            </Link>
            <Link href="/evler">
              <li
                className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
                  path === "/evler" ? "!text-warning" : ""
                }`}
              >
                Evler
              </li>
            </Link>
            <Link href="/ev-detaylari">
              <li
                className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
                  path === "/ev-detaylari" ? "!text-warning" : ""
                }`}
              >
                Ev Detayları
              </li>
            </Link>
            <Link href="/iletisim">
              <li
                className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
                  path === "/iletisim" ? "!text-warning" : ""
                }`}
              >
                İletişim
              </li>
            </Link>
          </ul>
          <div
            onClick={handleHamburgerClick}
            className={`hamburger lg:hidden block ${active ? "active" : ""}`}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <MobileNavbar
            active={active}
            handleHamburgerClick={handleHamburgerClick}
          />
        </nav>
      </header>
    </div>
  );
};

export default Header;
