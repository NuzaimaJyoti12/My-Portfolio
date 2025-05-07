import React from "react";
import { MdArrowOutward } from "react-icons/md";
import details from '@/app/about/image/details.png'
import Image from "next/image";

const Details = () => {
  return (
    <section>
      <div className="container py-[100px]">
        <div>
          <div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-[20px] font-syne text-[#FF9330] ml-1">
                Resume
              </p>
              <h3 className="text-[64px] leading-[72px] font-syne font-bold relative after:absolute after:rounded-full after:bg-[#FFB646] after:top-[1px] after:left-1 z-[1] after:z-[-3] after:size-[64px] ">
                All over my details find here...
              </h3>
            </div>
            <div className="flex items-center justify-center  gap-4 my-8 lg:mr-55">
              <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[15px] font-bold leading-[15px] gap-2 hover:bg-black hover:text-white duration-75 items-center bg-white">
                About me{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[15px] font-bold leading-[15px] gap-2 hover:bg-black hover:text-white duration-75    items-center bg-white">
                Experience{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[15px] font-bold leading-[15px] gap-2 hover:bg-black hover:text-white duration-75    items-center bg-white">
                Education{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[15px] font-bold leading-[15px] gap-2 hover:bg-black hover:text-white duration-75    items-center bg-white">
                Skills{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
              <button className="flex justify-between mb-2 py-5 px-6 rounded-2xl text-[15px] font-bold leading-[15px] gap-2 hover:bg-black hover:text-white duration-75   items-center bg-white">
                Awards{" "}
                <span>
                  <MdArrowOutward />
                </span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 pt-[56px] ">
            {/* left side */}
            <div>
                <Image src={details}/>
            </div>
            {/* right side */}
            <div>
                        <h3 className="text-[32px] font-bold font-syne">
                          Product Designer
                        </h3>
                        <p className="text-[18px] text-[#08080899] font-sans leading-7 pb-5">
                          Mark Henry, <span className="text-black">Product Designer</span>,
                          based in German. That is where I come in. A lover of words, a
                          wrangler of copy. Here to create copy that not only reflects who
                          you are and what you stand for,
                        </p>
                        <p className="text-[18px] text-[#08080899] font-sans leading-7">
                          but words that truly land with those that read them, calling your
                          audience in and making them want more.
                        </p>
            
                        <div className="pt-[56px]">
                          <ul className="gap-3 inline-flex flex-col">
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Name</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                Nuzaima Rahman
                              </span>
                            </li>
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Nationality</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                Bangladesh
                              </span>
                            </li>
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Phone</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                01631915686
                              </span>
                            </li>
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Email</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                nuzaimarahmanjyoti@gmail.com
                              </span>
                            </li>
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Experience</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                1+ year
                              </span>
                            </li>
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Freelance</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                Available
                              </span>
                            </li>
            
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Skype</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                nuz.halk23
                              </span>
                            </li>
                            <li className="text-[18px] text-[#080808CC] font-sans gap-10 items-center inline-flex">
                              <span className="w-[110px]">Languages</span>
                              <span className="text-[24px] font-bold text-black font-syne">
                                Bangla, English
                              </span>
                            </li>
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
