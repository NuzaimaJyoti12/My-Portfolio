import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Vision = () => {
  return (
<section>
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 pt-[120px] pb-[108px] gap-10">

      {/* left side */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-[40px] leading-[48px] md:text-[64px] md:leading-[72px] font-bold font-syne w-full md:w-[526px] pb-6">
          My vision is to create happy my clients
        </h2>
        <p className="text-[#08080899] text-[16px] leading-7 md:text-[18px] font-sans w-full md:w-[526px] pb-[43px]">
          That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them want more.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center md:items-start">
          <div className=" text-center sm:text-left">
            <span className="text-[30px] md:text-[32px] font-bold font-syne">08</span>
            <p className="text-[20px] md:text-[18px] text-[#08080899] font-sans">
              Award winner
            </p>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-[30px] md:text-[32px] font-bold font-syne">1.2K</span>
            <p className="text-[20px] md:text-[18px] text-[#08080899] font-sans">
              Worldwide client
            </p>
          </div>
          <div className="text-center sm:text-left">
            <span className="text-[30px] md:text-[32px] font-bold font-syne">3.5K</span>
            <p className="text-[20px] md:text-[18px] text-[#08080899] font-sans">
              Job done successfully
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <div className="pb-12 pt-10">
          <span className="text-black-800 text-[35px] xl:text-[80px] font-bold font-syne leading-[40px] relative before:rounded-full before:bg-[#FFB646] before:block before:absolute before:top-[50%] before:left-[-8px] before:-z-[1] before:w-[75px] md:before:w-[95px] lg:before:w-[100px] xl:before:w-[110px] before:h-[75px] md:before:h-[95px] lg:before:h-[100px] xl:before:h-[110px] before:translate-y-[-50%] z-2">
            12+
          </span>
          <span className="mt-6 md:mt-10 text-[30px] md:text-[35px] lg:text-5xl font-syne font-bold text-[#fffff0ee] drop-shadow-[0_1px_0_rgba(80,95,150,9)] flex flex-col">
            Years of <span>experience</span>
          </span>
        </div>
        <div className="flex flex-col bg-[#080808] rounded-2xl px-4 md:px-6 py-6 w-full md:w-[636px] h-auto md:h-[122px]">
          <p className="text-[#FF9330] font-sans text-[16px] md:text-[18px] leading-7 pb-[8px]">
            SAY HELLO!
          </p>
          <div className="flex sm:flex-row sm:justify-between sm:items-center gap-4">
            <p className="font-syne font-bold text-[24px] md:text-[32px] text-white">
              hello@nuzaima.com
            </p>
            <MdArrowOutward className="w-10 h-10 md:w-12 md:h-12 text-[#FFB646]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Vision