import React from "react";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";


const PricingPack = () => {
  return (
    <section className="pb-[120px]">
      <div className="container">
        <div>
          {/* upper layer */}
          <div className=" md:flex flex-col ml-2 md:ml-0 md:justify-between relative">
            <div className="font-syne font-bold">
              <p className="text-[20px] text-[#FF9330] sm:items-center">
                Pricing
              </p>
              <h2 className="text-[40px] md:text-[64px] md:w-[527px] w-[350px] leading-8 md:leading-[72px] relative after:absolute after:rounded-full after:bg-[#FFB646] md:after:size-[62px] after:size-[42px] z-[2] after:z-[-2] md:after:top-[84px] after:top-[30px] md:after:left-[330px] after:left-[200px] my-8  ">
                Stay chill and pick your plan
              </h2>
            </div>
            <Link href={"/contact"}>
            <div className=" flex items-center justify-between text-[10px] md:text-[15px] font-sans w-[250px] h-[20px] md:w-[296px] md:h-[56px] py-5 px-8 bg-black text-white hover:bg-white border-[1px] border-black hover:text-black rounded-[8px] transition duration-700 absolute md:bottom-12  md:right-0 cursor-pointer">
              <button>Contact for Custom Project</button>
              <span>
                <MdArrowOutward className="md:w-6 md:h-6 w-3 h-3"/>
              </span>
            </div>
            </Link>
          </div>
          {/* lower layer */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="p-8 bg-[#0808080A] hover:bg-white hover:shadow-2xl rounded shadow-2xs">
              <div className="flex items-center justify-between pb-12">
                <p className="text-[#08080899] text-[18px] font-sans">Basic</p>
                <span className="text-[#FF9330] text-[20px] font-bold">
                  $48/h
                </span>
              </div>
              <div>
                <div>
                  <p className="font-bold text-[32px] font-sans">20 hrs</p>
                  <p className="text-[#08080899] text-[18px] font-sans">
                    10 hours per week
                  </p>
                </div>
                <span className="flex justify-between items-center text-[#08080899] text-[32px]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <div className="p-8 bg-[#0808080A] hover:bg-white hover:shadow-2xl rounded shadow-2xs">
              <div className="flex items-center justify-between pb-12">
                <p className="text-[#08080899] text-[18px] font-sans">
                  Premium
                </p>
                <span className="text-[#FF9330] text-[20px] font-bold">
                  $60/h
                </span>
              </div>
              <div>
                <div>
                  <p className="font-bold text-[32px] font-sans">30 hrs</p>
                  <p className="text-[#08080899] text-[18px] font-sans">
                    15 hours per week
                  </p>
                </div>
                <span className="flex justify-between text-[#08080899] text-[32px]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
            <div className="p-8 bg-[#0808080A] hover:bg-white hover:shadow-2xl rounded shadow-2xs">
              <div className="flex items-center justify-between pb-12">
                <p className="text-[#08080899] text-[18px] font-sans">
                  Platinum
                </p>
                <span className="text-[#FF9330] text-[20px] font-bold">
                  $80/h
                </span>
              </div>
              <div>
                <div>
                  <p className="font-bold text-[32px] font-sans">40 hrs</p>
                  <p className="text-[#08080899] text-[18px] font-sans">
                    20 hours per week
                  </p>
                </div>
                <span className="flex justify-between text-[#08080899] text-[32px]">
                  <MdArrowOutward />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPack;
