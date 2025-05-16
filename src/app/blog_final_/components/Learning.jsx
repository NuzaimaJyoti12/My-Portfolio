import React from "react";
import Image from "next/image";
import Banner from "@/app/blog_final_/images/banner.png";
import device from "@/app/blog_final_/images/smartphone.png";
import laptop from "@/app/blog_final_/images/keyboard.png";
import user from "@/app/blog_final_/images/user_dp.png";
import fb from "@/app/blog_final_/images/FB.png";
import twitter from "@/app/blog_final_/images/TW.png";
import whatsapp from "@/app/blog_final_/images/WA.png";
import linkedIn from "@/app/blog_final_/images/LI.png";
import copy from "@/app/blog_final_/images/CopyLink.png";
import react from "@/app/blog_final_/images/Like.png";
const Learning = () => {
  return (
    <>
      <section className="bg-[#FFE9D9] pt-[80px] sm:pt-[160px]">
        <div className="container">
          <div className="max-w-[1075px] mx-auto pb-[160px] sm:pb-[354px] relative">
            <h2 className="text-[32px] sm:text-[44px] leading-[40px] sm:leading-[54px] font-syne font-bold w-full max-w-[1000px] text-center sm:text-left mx-auto sm:mx-0">
              Designing the perfect feature comparison table
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-[50%] w-[90%] md:left-0 md:translate-x-0 md:w-auto">
              <Image className="rounded-2xl w-full" src={Banner} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffff] pt-[100px] sm:pt-[322px]">
        <div className="container">
          <div className="max-w-[1075px] mx-auto">
            <div className="flex  sm:flex-row pb-8 md:items-center items-start text-center sm:text-left">
              <div className="w-12 h-12">
                <Image src={user} alt="user" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center gap-y-4 pl-0 sm:pl-3 mt-4 sm:mt-0">
                <div className="w-[148px] mx-auto sm:mx-0">
                  <p className="pb-2 text-[14px] text-[#080808CC]">
                    Written by
                  </p>
                  <p className="text-[15px] font-bold font-sans">
                    Nuzaima Rahman
                  </p>
                </div>
                <div className="w-[148px] mx-auto sm:mx-0">
                  <p className="pb-2 text-[14px] text-[#080808CC]">Category</p>
                  <p className="text-[15px] font-bold font-sans">
                    User Experience
                  </p>
                </div>
                <div className="w-[148px] mx-auto sm:mx-0">
                  <p className="pb-2 text-[14px] text-[#080808CC]">Date</p>
                  <p className="text-[15px] font-bold font-sans">01/05/2025</p>
                </div>
              </div>
            </div>

            <hr className="text-[#0808081A] pb-12" />

            <div>
              <h2 className="text-[28px] sm:text-[32px] pb-4 font-bold font-syne text-center sm:text-left">
                About the position
              </h2>

              <p className="text-[#08080899] text-[16px] sm:text-[18px] leading-7 pb-6 sm:pb-[40px] font-sans">
                Everyone in my team works towards the same goal. This enabled
                our teams to ship new ideas and feel more capable. Podcasting
                operational — change management inside of workflows. Completely
                synergize.
              </p>
              <p className="text-[#08080899] text-[16px] sm:text-[18px] leading-7 pb-6 sm:pb-[40px] font-sans">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself
              </p>
              <p className="text-[#08080899] text-[16px] sm:text-[18px] leading-7 pb-6 sm:pb-[40px] font-sans">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 pb-6 ">
                <Image src={device} alt="image" className="w-full mx-auto" />
                <Image src={laptop} alt="image" className="w-full mx-auto" />
              </div>
            </div>

            <div className="pt-12">
              <h2 className="text-[28px] sm:text-[32px] font-bold font-syne text-center sm:text-left">
                1. Learning the basics
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#08080899] leading-7 pb-6 sm:pb-12 font-sans">
                Everyone in my team works towards the samegoal. This enabled our
                teams to ship new ideas and feel more capable. Podcasting
                operational — change management inside of workflows. Completely
                synergize.
              </p>
              <p className="text-[16px] sm:text-[18px] text-[#08080899] leading-7 pb-6 sm:pb-12 font-sans">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself
              </p>
            </div>

            <div>
              <h2 className="text-[28px] sm:text-[32px] font-bold font-syne text-center sm:text-left">
                2. Learning the basics
              </h2>

              <p className="text-[16px] sm:text-[18px] text-[#08080899] leading-7 pb-6 sm:pb-12">
                Everyone in my team works towards the same goal. This enabled
                our teams to ship new ideas and feel more capable. Podcasting
                operational — change management inside of workflows. Completely
                synergize.
              </p>
              <p className="text-[16px] sm:text-[18px] text-[#08080899] leading-7 pb-6 sm:pb-12">
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself
              </p>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
                <div className="flex items-center">
                  <p className="pl-6">Share:</p>
                  <div className="gap-4 flex pl-4">
                    <Image src={fb} alt="Image" />
                    <Image src={twitter} alt="Image" />
                    <Image src={whatsapp} alt="Image" />
                    <Image src={linkedIn} alt="Image" />
                    <Image src={copy} alt="Image" />
                    <Image src={react} alt="Image" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="py-[6px] px-4 border-[1px] hover:border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                    APP
                  </button>
                  <button className="py-[6px] px-4 border-[1px] hover:border-[#08080866] rounded-[40px] text-[#080808CC] text-inter hover:bg-black hover:text-white hover:font-bold hover:border-none">
                    DEVELOPMENT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Learning;