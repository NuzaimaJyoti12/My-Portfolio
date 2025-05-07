import React from 'react'
import heroImage from '@/app/assets/hero.png'
import Image from 'next/image'
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Hero = () => {
  return (
    <section>
      <div className="bg-[#FFE9D9] pb-[80px] md:pb-[100px] lg:pb-[126px]">
        <div className="relative">
          <Image
            className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-auto"
            src={heroImage}
            alt="hero"
          />
        </div>
        <div className="container px-4 md:px-6">
          <div className="pt-[80px] md:pt-[100px] lg:pt-[140px]">
            <p className="flex items-center gap-3 md:gap-5 text-[20px] md:text-[28px] lg:text-[32px] font-bold">
              <hr className="w-[40px] md:w-[50px] lg:w-[65px]" />
              Hello, I’m✌
            </p>
            <h1 className="text-[48px] md:text-[80px] lg:text-[140px] font-bold leading-tight pb-3 font-syne w-full max-w-[463px]">
              <span className="relative after:absolute after:size-[60px] md:after:size-[90px] lg:after:size-[120px] after:rounded-full after:bg-[#FFB646] after:top-[4px] md:after:top-[8px] lg:after:top-[10px] after:left-[-10px] z-[1] after:z-[-3]">
                Nuzaima
              </span>{" "}
              Rahman
            </h1>
            <p className="text-base md:text-lg font-syne font-bold pb-3 text-[#080808CC]">
              Product Designer | Based in Germany
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-6 md:pt-[30px]">
              <button className="py-4 px-6 sm:py-5 sm:px-8 bg-black text-white font-bold flex gap-2 items-center rounded-[10px] border border-black cursor-pointer hover:bg-transparent hover:text-black transition-all duration-200">
                Let’s Talk <span><MdArrowOutward /></span>
              </button>
              <button className="py-4 px-6 sm:py-5 sm:px-8 flex gap-2 items-center font-bold rounded-[10px] border border-black hover:bg-black cursor-pointer hover:text-white transition-all duration-200">
                My Work <span><MdArrowOutward /></span>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center pt-[60px] md:pt-[100px] lg:pt-[120px] gap-4 sm:gap-6">
              <div className="flex items-center">
                <h2 className="text-[32px] md:text-[36px] lg:text-[44px] font-bold pr-3">
                  1.2K+
                </h2>
                <p className="text-[#080808CC]">Worldwide client</p>
              </div>
              <span className="hidden sm:inline">|</span>
              <div className="flex gap-4">
                <FaBehance />
                <FaLinkedinIn />
                <FaDribbble />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
