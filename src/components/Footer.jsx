import Image from "next/image";
import React from "react";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-[#080808] ">
      <div className="container pt-[118px] pb-[60px]">
        <div className="flex  gap-6">
          <div className=" ">
            <h2 className="text-[64px] leading-[72px] pb-10 text-white font-bold font-syne w-[416px] pt-[48px] relative after:absolute after:rounded-full after:bg-[#FFB646] after:size-[62px] z-[2] after:z-[-2] after:top-[55px] after:left-[2px]">
              Let’s work together
            </h2>
            <div className="flex items-center ">
              <div className=" ">
                <p className="text-5 leading-7 font-semibold font-syne text-white">
                  Based in Germany |
                </p>
              </div>
              <div className="flex gap-4 ml-[32px] text-2xl text-white">
                <FaBehance className="hover:text-[#FFB646] cursor-pointer" />
                <FaLinkedinIn className="hover:text-[#FFB646] cursor-pointer" />
                <FaDribbble className="hover:text-[#FFB646] cursor-pointer" />
                <FaGithub className="hover:text-[#FFB646] cursor-pointer" />
              </div>
            </div>
          </div>

          <div className="font-syne border-[1px] border-[#FFFFFF33] py-7 px-9 rounded-xl flex flex-col justify-between w-[416px] h-[260px] group hover:cursor-pointer">
            <div className="flex  justify-between">
              <h3 className="text-[20px] text-white  font-bold leading-7  w-[230px]">
                Looking for a hectic designer?
              </h3>
            </div>
            <div className="flex items-end justify-between ">
              <h4 className="text-[#FFB646] text-2xl font-syne leading-8 flex flex-col ">
                hello@henry.com
              </h4>
              <span>
                <MdArrowOutward className="text-white  w-6 h-6 group-hover:text-[#FFB646]" />
              </span>
            </div>
          </div>
          <div className="font-syne border-[1px] border-[#FFFFFF33] py-7 px-9 rounded-xl flex flex-col justify-between w-[416px] h-[260px] group hover:cursor-pointer">
            <div className="flex  justify-between">
              <h3 className="text-[20px] text-white  font-bold leading-7 ">
              Want a more in-depth look at my history?
              </h3>
            </div>
            <div className="flex items-end justify-between ">
              <h4 className="text-[#FFB646] text-2xl font-syne leading-8 flex flex-col ">
              +598 6879 9874
              </h4>
              <span>
                <MdArrowOutward className="text-white  w-6 h-6 group-hover:text-[#FFB646]" />
              </span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-white font-bold text-[130px] font-montserrat py-[72px]">
          <h1 className=" w-full text-[#FFE9D9]">NUZAIMA RAHMAN</h1>
          </div>
        </div>

        <hr className="text-[#FFFFFF33] pb-6" />

        <div className="text-white text-[18px] flex items-center justify-between">
          <p className="flex font-sans">
            <span className=" items-center ">&copy;</span>2023 Nuzaima Rahman,
            All Rights Reserved
          </p>
          <div className="flex items-center cursor-pointer">
            <p className="hover:text-[#FFB646]">Back to Top</p>
            <span className="text-[#FFB646] text-2xl ml-2">
              <FaArrowUp />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
