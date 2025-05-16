"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import mobileIcon from "@/app/assets/mobile-icon.png";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";
import Aos from "aos";

const ServiceCard = ({ items }) => {
  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-back",
    })
  },[])
  return (
    <Link href={"/project"} data-aos="fade-up" data-aos-delay="300">
    <div className="py-7 px-6 bg-[#0808080A] rounded-[10px] hover:shadow-2xl hover:bg-white group cursor-pointer">
      <div className="h-[48px] w-[48px] bg-white mb-8 rounded-full flex items-center justify-center group-hover:bg-gray-100">
        <Image src={items.img} alt="image" />
      </div>
      <div className="flex justify-between items-end ">
        <h2 className="font-bold font-syne text-[20px] leading-7 group-hover:text-[#FFB646]">
          {items.title}
        </h2>
        <span>
          <MdArrowOutward className="text-[#08080899] group-hover:text-[#FFB646]" />
        </span>
      </div>
    </div>
    </Link>
  );
};

export default ServiceCard;
