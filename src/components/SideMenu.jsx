"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo.png";
import { MdArrowOutward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaBehance, FaLinkedinIn, FaDribbble, FaGithub } from "react-icons/fa";

const SideMenu = ({ menuToggle }) => {
  return (
    <div className="w-full md:w-[458px] h-screen flex flex-col justify-between bg-black pl-0 md:pl-8 fixed right-0 top-0 overflow-y-auto z-50">
      <div>
        {/* header */}
        <div className="flex justify-between pl-4 md:px-0">
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 relative">
            <Image src={logo} alt="logo" className="w-8 h-8" />
            </div>
            <h2 className="font-Oswald font-bold md:text-2xl text-[15px]">JYOTI</h2>
          </div>
          <button
            onClick={menuToggle}
            className="bg-[#FFB646] w-[80px] h-[60px] md:w-[100px] md:h-[80px] flex items-center justify-center text-white"
          >
            <IoMdClose className="w-6 h-6" />
          </button>
        </div>

        <hr className="text-[#6F786F33] pb-6 w-[327px] ml-8" />

        {/* menu */}
        <div className="mt-[40px] md:mt-[80px] flex flex-col items-center md:items-start px-4 md:px-0">
          <ul className="flex flex-col justify-between w-full">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Project", "/project"],
              ["Project Details", "/project_details"],
              ["Blog", "/blog"],
              ["Blog Details", "/blog_final_"],
              ["Contact", "/contact"],
            ].map(([name, href]) => (
              <React.Fragment key={href}>
                <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
                  <Link
                    href={href}
                    onClick={menuToggle}
                    prefetch={true}
                    className="flex justify-between gap-1 items-center"
                  >
                    {name}
                    <span>
                      <MdArrowOutward />
                    </span>
                  </Link>
                </li>
                <hr className="text-[#6F786F33] md:w-[387px]" />
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* social sites */}
      <div className="flex justify-center md:justify-start gap-4 text-2xl text-white pb-10 px-4 md:px-0">
        <FaBehance />
        <FaLinkedinIn />
        <FaDribbble />
        <FaGithub />
      </div>
    </div>
  );
};

export default SideMenu;


