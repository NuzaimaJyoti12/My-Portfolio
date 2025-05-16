import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import ExperienceImg from "@/app/assets/12years.png";
import Link from "next/link";


const Experience = () => {
  return (
    <section className="pb-[60px] md:pb-[80px] lg:pb-[100px]">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] md:gap-[80px] lg:gap-[134px]">
          {/* left side */}
          <div className="relative text-center md:text-left">
            <div>
              <Image
                src={ExperienceImg}
                alt="image"
                className="w-full h-auto"
              />
            </div>

            <span className="absolute right-1 md:right-9 -bottom-5 md:bottom-10 flex flex-col font-syne items-end md:items-start">
              {/* Number (12+) */}
              <span
                className="relative z-[2] ml-[-6px] sm:ml-[-8px] md:ml-[-10px] text-black-800
      text-[20px] sm:text-[28px] md:text-[30px] lg:text-[50px] xl:text-[70px]
      font-bold font-Syne leading-[28px] sm:leading-[34px] md:leading-[36px]
      before:absolute before:top-1/2 before:left-[-4px] sm:before:left-[-6px] md:before:left-[-6px]
      before:-z-[1] before:block before:rounded-full before:bg-[#FFB646]
      before:translate-y-[-50%]
      before:w-[50px] sm:before:w-[65px] md:before:w-[75px] lg:before:w-[85px] xl:before:w-[95px]
      before:h-[50px] sm:before:h-[65px] md:before:h-[75px] lg:before:h-[85px] xl:before:h-[95px]"
              >
                12+
              </span>

              {/* Text */}
              <span
                className="mt-4 sm:mt-6 md:mt-10
      text-[14px] sm:text-[18px] md:text-[28px] lg:text-[35px] xl:text-5xl
      font-syne font-bold text-white
      drop-shadow-[0_1px_0_rgba(75,85,99,1)] flex flex-col"
              >
                Years of <span>experience</span>
              </span>
            </span>
          </div>

          {/* right side */}
          <div>
            <p className="text-[18px] sm:text-[20px] font-bold text-[#FF9330] font-syne pb-2.5 ml-1">
              Hello I’m
            </p>
            <h2 className="text-[36px] md:text-[56px] font-bold font-syne pb-3 leading-[1.2] relative z-[1]">
              <span className="whitespace-nowrap relative inline-block z-[1] after:content-[''] after:absolute after:top-1/2 after:left-0 after:translate-y-[-50%] after:-z-[1] after:bg-[#FFB646] after:rounded-full after:w-[40px] sm:after:w-[50px] md:after:w-[58px] lg:after:w-[62px] after:h-[40px] sm:after:h-[50px] md:after:h-[58px] lg:after:h-[62px]">
                Nuzaima Rahman,
              </span>{" "}
               Product Designer
            </h2>
            <p className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-bold font-syne pb-4">
              Based in German
            </p>
            <p className="text-[16px] sm:text-[17px] md:text-[18px] font-sans text-[#08080899] pb-6 leading-6 sm:leading-7 max-w-full md:w-[500px]">
              That is where I come in. A lover of words, a wrangler of copy.
              Here to create copy that not only reflects who you are and what
              you stand for, but words that truly land with those that read
              them, calling your audience in and making them .
            </p>

            <div className="flex flex-wrap gap-6 md:gap-10">
              <div className="pb-4 md:pb-8">
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold font-syne">
                  08
                </span>
                <p className="text-[16px] md:text-[18px] text-[#08080899] font-sans">
                  Award winner
                </p>
              </div>
              <div>
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold font-syne flex items-center">
                  1.2K
                </span>
                <p className="text-[16px] md:text-[18px] text-[#08080899] font-sans">
                  Worldwide client
                </p>
              </div>
              <div>
                <span className="text-[24px] sm:text-[28px] md:text-[32px] font-bold font-syne">
                  3.5K
                </span>
                <p className="text-[16px] md:text-[18px] text-[#08080899] font-sans">
                  Job done successfully
                </p>
              </div>
            </div>

            <Link href="/contact">
            <div className="flex justify-between items-center py-4 md:py-5 px-6 md:px-8 rounded-[8px] text-[14px] md:text-[15px] font-bold bg-black text-white transition duration-700 hover:text-black hover:bg-transparent cursor-pointer border-[1px] gap-2 w-full max-w-[253px] mt-6">
              <button>Download My Resume</button>
              <span>
                <MdArrowOutward />
              </span>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
