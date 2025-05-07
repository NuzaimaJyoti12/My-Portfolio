import React from "react";
import { MdArrowOutward } from "react-icons/md";
import vectorImg from "@/app/assets/Vector.png"
import Image from "next/image";
const Resume = () => {
  return (
    <section className="bg-[#0808080A] py-10 px-5">
  <div className="container">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      
      {/* table list */}
      <div>
        <div>
          <p className="text-[20px] font-syne text-[#FF9330] ml-1">Resume</p>
          <h3 className="text-[64px] leading-[72px] font-syne w-full font-bold relative">
            <span className="relative inline-block z-[1]">
              <span className="relative z-[1]">All</span>
              <span className="absolute top-1/2 left-0 -translate-y-1/2 w-[64px] h-[64px] bg-[#FFB646] rounded-full -z-[1]"></span>
            </span>{" "}
            over my details find here...
          </h3>
        </div>

        <div className="flex flex-wrap lg:flex-col gap-2 my-8 lg:mr-55">
          <button className="inline-flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
            About me{" "}
            <span><MdArrowOutward /></span>
          </button>
          <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
            Experience{" "}
            <span><MdArrowOutward /></span>
          </button>
          <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
            Education{" "}
            <span><MdArrowOutward /></span>
          </button>
          <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
            Skills{" "}
            <span><MdArrowOutward /></span>
          </button>
          <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[16px] font-bold leading-[15px] hover:bg-black hover:text-white duration-75 items-center bg-white">
            Awards{" "}
            <span><MdArrowOutward /></span>
          </button>
        </div>
      </div>

      {/* right side */}
      <div className="p-8">
        <h3 className="text-[32px] font-bold font-syne">Product Designer</h3>
        <p className="text-[18px] text-[#08080899] font-sans leading-7 pb-5">
          Mark Henry, <span className="text-black">Product Designer</span>, based in German. That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for,
        </p>
        <p className="text-[18px] text-[#08080899] font-sans leading-7">
          but words that truly land with those that read them, calling your audience in and making them want more.
        </p>

        <div className="pt-[56px]">
          <ul className="gap-3 inline-flex flex-col">
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Name</span>
              <span className="text-[24px] font-bold text-black font-syne">Nuzaima Rahman</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Nationality</span>
              <span className="text-[24px] font-bold text-black font-syne">Bangladesh</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Phone</span>
              <span className="text-[24px] font-bold text-black font-syne">01631915686</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Email</span>
              <span className="text-[24px] font-bold text-black font-syne">nuzaimarahmanjyoti@gmail.com</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Experience</span>
              <span className="text-[24px] font-bold text-black font-syne">1+ year</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Freelance</span>
              <span className="text-[24px] font-bold text-black font-syne">Available</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Skype</span>
              <span className="text-[24px] font-bold text-black font-syne">nuz.halk23</span>
            </li>
            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
              <span className="w-[110px]">Languages</span>
              <span className="text-[24px] font-bold text-black font-syne">Bangla, English</span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <Image src={vectorImg} alt='image' className="absolute bottom-7 right-[-42px]" />
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Resume;
