"use client";
import React from "react";
import heroImage from "@/app/assets/JoImg.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";


const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".left", {
      x: -50,
      duration: 1,
      autoAlpha: 0,
    })
      .from(".hello", { x: -140, duration: 0.5, autoAlpha: 0 })
      .from(".heading", { x: -90, duration: 0.5, autoAlpha: 0 })
      .from(".para", { x: -100, duration: 0.5, autoAlpha: 0 })
      .from(".btn", { x: -110, duration: 0.5, autoAlpha: 0 })
      .from(".icon", { x: -120, duration: 0.5, autoAlpha: 0 });

    gsap.from(".right", {
      x: 50,
      duration: 1,
      autoAlpha: 0.5,
    });
  });
  return (
    <section>
      <div className="bg-[#FFE9D9] pb-[80px] md:pb-[100px] lg:pb-[126px]">
        <div className="relative right">
          <Image
            className="absolute top-0 right-0 w-[200px] md:w-[300px] lg:w-auto hidden md:block"
            src={heroImage}
            alt="hero"
          />
        </div>
        <div className="container px-4 md:px-6 left">
          <div className="pt-[80px] md:pt-[100px] lg:pt-[140px]">
            <p className="flex items-center gap-3 md:gap-5 text-[20px] hello md:text-[28px] lg:text-[32px] font-bold">
              <hr className="w-[40px] md:w-[50px] lg:w-[65px] " />
              Hello, I’m✌
            </p>
            <h1 className="text-[48px] md:text-[80px] lg:text-[140px] font-bold leading-tight pb-3 font-syne w-full max-w-[463px] heading">
              <span className="relative after:absolute after:size-[60px] md:after:size-[90px] lg:after:size-[120px] after:rounded-full after:bg-[#FFB646] after:top-[4px] md:after:top-[8px] lg:after:top-[10px] after:left-[-10px] z-[1] after:z-[-3]">
                Nuzaima
              </span>{" "}
              Rahman
            </h1>
            <p className="text-base md:text-lg font-syne font-bold pb-3 text-[#080808CC] para">
              Product Designer | Based in Germany
            </p>
            <div className="flex gap-3 pt-6 btn">
              <Link href={"/contact"}>
              <button className="py-4 px-2 sm:py-5 md:px-8 flex gap-2 items-center font-bold rounded-[10px] border border-black bg-black cursor-pointer text-white hover:text-black transition-all duration-200 hover:bg-transparent">
                Let’s Talk{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              </Link>
              <Link href={"/project"}>
              <button className="py-4 px-2 sm:py-5 md:px-8 flex gap-2 items-center font-bold rounded-[10px] border border-black hover:bg-black cursor-pointer hover:text-white transition-all duration-200">
                My Work{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center pt-[60px] md:pt-[100px] lg:pt-[120px] gap-4 sm:gap-6 icon">
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
