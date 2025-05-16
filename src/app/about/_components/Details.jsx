"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";
import details from "@/app/about/image/details.png";
import Image from "next/image";

const Details = () => {
  return (
    <section>
      <div className="container py-[100px]">
        <div>
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center px-4">
            <p className="text-[20px] font-syne text-[#FF9330]">Resume</p>
            <h3 className="text-[32px] sm:text-[48px] md:text-[64px] leading-[40px] sm:leading-[56px] md:leading-[72px] font-syne font-bold relative after:absolute after:rounded-full after:bg-[#FFB646] after:top-[1px] after:left-1 z-[1] after:z-[-3] after:size-[64px]">
              All over my details find here...
            </h3>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10 px-4">
            {["About me", "Experience", "Education", "Skills", "Awards"].map((item, idx) => (
              <button
                key={idx}
                className="flex items-center gap-2 py-4 px-6 rounded-2xl text-[15px] font-bold leading-[15px] bg-white hover:bg-black hover:text-white duration-75"
              >
                {item} <MdArrowOutward />
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-[56px] px-4">
            {/* Left Image */}
            <div>
              <Image src={details} alt="Details Image" />
            </div>

            {/* Right Info */}
            <div>
              <h3 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold font-syne">
                Product Designer
              </h3>
              <p className="text-[16px] sm:text-[18px] text-[#08080899] font-sans leading-7 pb-5">
                Nuzaima Rahman, <span className="text-black">Product Designer</span>, based in
                Bangladesh. That is where I come in. A lover of words, a wrangler of copy. Here
                to create copy that not only reflects who you are and what you stand for,
              </p>
              <p className="text-[16px] sm:text-[18px] text-[#08080899] font-sans leading-7">
                but words that truly land with those that read them, calling your audience in
                and making them want more.
              </p>

              {/* Info List */}
              <div className="pt-[56px]">
                <ul className="gap-3 flex flex-col">
                  {[
                    ["Name", "Nuzaima Rahman"],
                    ["Nationality", "Bangladesh"],
                    ["Phone", "01631915686"],
                    ["Email", "nuzaimarahmanjyoti@gmail.com"],
                    ["Experience", "1+ year"],
                    ["Freelance", "Available"],
                    ["Skype", "nuz.halk23"],
                    ["Languages", "Bangla, English"],
                  ].map(([label, value], index) => (
                    <li
                      key={index}
                      className="text-[16px] sm:text-[18px] text-[#080808CC] font-sans gap-4 sm:gap-10 items-start sm:items-center flex flex-col sm:flex-row"
                    >
                      <span className="w-[110px]">{label}</span>
                      <span className="text-[20px] sm:text-[24px] font-bold text-black font-syne">
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

