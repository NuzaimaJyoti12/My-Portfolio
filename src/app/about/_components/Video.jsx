import React from "react";
import Cover from "@/app/about/image/video.png";
import Image from "next/image";
import { CiPlay1 } from "react-icons/ci";

const Video = () => {
  return (
    <section>
      <div className="container">
        <div className="relative">
          <Image
            src={Cover}
            alt="Cover"
            className="w-full h-full object-cover"
          />

          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black-800 text-[35px] xl:text-[80px] font-bold font-Syne leading-[40px] z-10 before:content-[''] before:rounded-full before:bg-[#FFB646] before:block before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[95px] lg:before:h-[100px] xl:before:h-[110px]">
            <CiPlay1 className="text-2xl"/>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Video;
