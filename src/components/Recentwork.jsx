import React from "react";
import smartphone from "@/app/assets/smartphone.png";
import eventTicket from "@/app/assets/eventTicket.png";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";


const Recentwork = () => {
  return (
    <section className="py-[100px] bg-[#FFE9D9]">
      <div className="container">
        <div>
          <div className="text-center">
            <p className="text-[#FF9330] font-bold text-[16px] sm:text-[18px] md:text-[20px] font-syne">
              Portfolio
            </p>
            <h2
              className="text-[40px] sm:text-[50px] md:text-[64px] font-bold font-syne relative z-[4]
                      after:absolute after:bg-[#FFB646] 
                      after:w-[40px] sm:after:w-[50px] md:after:w-[64px] 
                      after:h-[40px] sm:after:h-[50px] md:after:h-[64px] 
                      after:rounded-full after:top-[12px] 
                      after:right-[120px] sm:after:right-[220px] md:after:right-[475px] 
                      after:transform after:-translate-x-1/2 after:z-[-4]"
            >
              My recent work
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image src={smartphone} alt="image" className="pb-6" />
              <div className="flex gap-2">
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  APP
                </button>
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  DEVELOPMENT
                </button>
              </div>
              <div>
                <a className="flex justify-between mb-12 py-5 rounded-2xl text-[32px] font-bold font-syne leading-[40px] hover:duration-75 hover:text-[#FF9330] duration-75 items-center ">
                  Basinik Finance App{" "}
                  <span>
                    <MdArrowOutward />
                  </span>
                </a>
              </div>
            </div>
            <div>
              <Image src={eventTicket} alt="image" className="pb-6" />
              <div className="flex gap-2">
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  APP
                </button>
                <button className="py-[6px] px-4 border-[1px] border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                  DEVELOPMENT
                </button>
              </div>
              <div>
                <a className="flex justify-between mb-12 py-5 rounded-2xl text-[32px] font-bold font-syne leading-[40px] hover:duration-75 hover:text-[#FF9330] duration-75 items-center ">
                  Oxilex Dashboard design{" "}
                  <span>
                    <MdArrowOutward />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <Link href="/project">
          <div className="text-center flex items-center justify-center transition duration-500">
            <button className="flex items-center justify-center gap-2 w-full py-5 px-6  text-[16px]  font-bold leading-[15px] bg-black  text-white border-[1px] border-black hover:bg-transparent  rounded-[10px] hover:text-black transition duration-700 cursor-pointer ">
              View All Project{" "}
              <span>
                <MdArrowOutward className="w-6 h-6" />
              </span>
            </button>
          </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Recentwork;
