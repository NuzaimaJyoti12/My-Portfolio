import React from "react";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import { MdArrowOutward } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const SideMenu = ({ menuToggle }) => {
  return (
    <div className=" w-[458px] h-screen flex flex-col justify-between bg-black pl-8 fixed right-0 top-0">
      <div>
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-white ">
            <Image src={logo} alt="logo" className="w-8 h-8" />
            <h1 className="font-Oswald font-bold text-2xl">JYOTI</h1>
          </div>
          <button
            onClick={menuToggle}
            className="bg-[#FFB646] w-[100px] h-[80px] flex items-center justify-center text-white"
          >
            <IoMdClose className="w-6 h-6 " />
          </button>
        </div>
        <hr className="text-[black] pb-6 w-[327px] ml-8" />
        {/* ul list */}
        <div className="mt-[80px]">
          <ul className="flex flex-col justify-between">
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/"
                className="flex justify-between gap-1 items-center"
              >
                Home
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/about"
                className="flex justify-between gap-1 items-center"
              >
                About
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/project"
                className="flex justify-between gap-1 items-center"
              >
                Project
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/project_details"
                className="flex justify-between gap-1 items-center"
              >
                Project Details
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/blog"
                className="flex justify-between gap-1 items-center"
              >
                Blog
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/blog_final_"
                className="flex justify-between gap-1 items-center"
              >
                Blog Details
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
            <li className="py-4 pr-6 text-[20px] font-bold font-syne leading-[28px] text-white hover:text-[#FFB646]">
              <Link
                href="/contact"
                className="flex justify-between gap-1 items-center"
              >
                Contact
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* icon part */}
      <div>
        <div className=" flex gap-4 text-2xl text-white pb-10">
          <FaBehance />
          <FaLinkedinIn />
          <FaDribbble />
          <FaGithub />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
