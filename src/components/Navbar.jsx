"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/logo.png";
import { MdArrowOutward } from "react-icons/md";
import { TbMenu } from "react-icons/tb";
import SideMenu from "./SideMenu";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => {
    setMenuOpen(!menuOpen);
  };

  const pathname = usePathname();
  const isHome = pathname === "/";

  const talkBtnHoverClass = isHome
    ? "hover:text-white"
    : "hover:text-[#FF9330]";

  return (
    <section className="bg-transparent absolute w-full top-0 left-0 z-10">
      <div>
        <div className="flex justify-between items-center ml-5 border-b-[2px] border-[#08080866]">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="font-Oswald font-bold text-2xl">JYOTI</h1>
          </div>
          <div className="flex gap-2 font-bold">
            <button
              className={`flex items-center gap-3 text-black ${talkBtnHoverClass} transition-colors duration-200`}
            >
              Let’s Talk{" "}
              <span>
                <MdArrowOutward />
              </span>
            </button>
            <button onClick={toggle} className="bg-black py-7 px-8">
              <TbMenu className="text-white" />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && <SideMenu menuToggle={toggle} />}
    </section>
  );
};

export default Navbar;
