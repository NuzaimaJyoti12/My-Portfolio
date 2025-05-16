import React from "react";
import FirstImg from "@/app/assets/blog1.png";
import SecondImg from "@/app/assets/blog2.png";
import ThirdImg from "@/app/assets/blog3.png";
import forthImg from "@/app/assets/blog4.png";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";

const RelatedPost = () => {
  return (
    <section className="pb-[120px] pt-[120px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="pb-12 w-full">
            <div className="font-syne text-center font-bold pb-12">
              <p className="text-[#FF9330] text-[16px] sm:text-[18px] md:text-[20px]">
                Blog
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-[64px] text-center relative after:absolute after:rounded-full after:size-[32px] sm:after:size-[40px] md:after:size-[64px] md:after:top-[12px] md:after:right-[508px] after:right-32 after:bg-[#FFB646] z-[66] after:z-[-32]">
                My blog post
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="flex flex-col items-center md:items-start">
                <span>
                  <Image src={FirstImg} alt="image" />
                </span>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 text-[14px] pt-6 pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end gap-4 hover:text-[#FF9330] transition duration-700 text-center md:text-left">
                    <p className="text-lg sm:text-xl md:text-2xl font-syne font-bold">
                      Right-lo-left behind development in mobile web design
                    </p>
                    <span>
                      <MdArrowOutward className="w-8 h-8" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center md:items-start mt-7 md:mt-0">
                <span>
                  <Image src={SecondImg} alt="image" />
                </span>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 text-[14px] pt-6 pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end gap-4 hover:text-[#FF9330] transition duration-700 text-center md:text-left">
                    <p className="text-lg sm:text-xl md:text-2xl font-syne font-bold">
                      Connect craft: Reading the smart experiences
                    </p>
                    <span>
                      <MdArrowOutward className="w-8 h-8" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center md:items-start">
                <span>
                  <Image src={ThirdImg} alt="image" />
                </span>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 text-[14px] pt-6 pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end gap-4 hover:text-[#FF9330] transition duration-700 text-center md:text-left">
                    <p className="text-lg sm:text-xl md:text-2xl font-syne font-bold">
                      Ecoglow: Sustainable skincare a brighter tomorrow
                    </p>
                    <span>
                      <MdArrowOutward className="w-8 h-8" />
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex flex-col items-center md:items-start mt-7 md:mt-0">
                <span>
                  <Image src={forthImg} alt="image" />
                </span>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start gap-3 text-[14px] pt-6 pb-3">
                    <span className="flex items-center text-[#080808CC]">
                      <BsDot />
                      <p>UI Design</p>
                    </span>
                    <span className="flex items-center text-[#FF9330]">
                      <BsDot />
                      <p>03 May 2019</p>
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between items-center md:items-end gap-4 hover:text-[#FF9330] transition duration-700 text-center md:text-left">
                    <p className="text-lg sm:text-xl md:text-2xl font-syne font-bold">
                      Right-lo-left behind development in mobile web design
                    </p>
                    <span>
                      <MdArrowOutward className="w-8 h-8" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedPost;