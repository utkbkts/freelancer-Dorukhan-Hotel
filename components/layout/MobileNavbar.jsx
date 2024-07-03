"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = ({ active, handleHamburgerClick }) => {
  const path = usePathname();

  return (
    <ul
      className={`absolute bg-white p-2 z-[50] top-12 right-0 h-screen  gap-4 items-center lg:hidden flex flex-col transition-all duration-300 ${
        active ? "w-[200px]" : "right-[-100%]"
      }`}
    >
      <div className="flex items-center justify-center gap-[2rem] mt-[5rem] flex-col">
        <Link onClick={handleHamburgerClick} href="/">
          <li
            className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
              path === "/" ? "!text-warning" : ""
            }`}
          >
            Ana Sayfa
          </li>
        </Link>
        <Link onClick={handleHamburgerClick} href="/hakkimizda">
          <li
            className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
              path === "/hakkimizda" ? "!text-warning" : ""
            }`}
          >
            Hakkımızda
          </li>
        </Link>
        <Link onClick={handleHamburgerClick} href="/evler">
          <li
            className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
              path === "/evler" ? "!text-warning" : ""
            }`}
          >
            Evler
          </li>
        </Link>
        <Link onClick={handleHamburgerClick} href="/ev-detaylari">
          <li
            className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
              path === "/ev-detaylari" ? "!text-warning" : ""
            }`}
          >
            Ev Detayları
          </li>
        </Link>
        <Link onClick={handleHamburgerClick} href="/iletisim">
          <li
            className={`title-navbar hover:text-warning transition-all duration-300 cursor-pointer ${
              path === "/iletisim" ? "!text-warning" : ""
            }`}
          >
            İletişim
          </li>
        </Link>
      </div>
    </ul>
  );
};

export default MobileNavbar;
