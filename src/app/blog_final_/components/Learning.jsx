import React from "react";
import Image from "next/image";
import Banner from "@/app/blog_final_/images/banner.png";
import device from "@/app/blog_final_/images/smartphone.png";
import laptop from "@/app/blog_final_/images/keyboard.png";
import user from "@/app/blog_final_/images/user_dp.png";
import fb from "@/app/blog_final_/images/FB.png"
import twitter from "@/app/blog_final_/images/TW.png"
import whatsapp from "@/app/blog_final_/images/WA.png"
import linkedIn from "@/app/blog_final_/images/LI.png"
import copy from "@/app/blog_final_/images/CopyLink.png"
import react from "@/app/blog_final_/images/Like.png"
const Learning = () => {
  return (
    <>
      <section className="bg-[#FFE9D9] pt-[160px]">
        <div className="container">
          <div className="max-w-[1075px] mx-auto pb-[354px] relative">
            <h2 className="text-[44px] leading-[54px] font-syne font-bold w-[1000px]">
              Designing the perfect feature comparison table
            </h2>
            <div className="absolute bottom-0 left-0 translate-y-[50%]">
              <Image className="rounded-2xl" src={Banner} alt="image" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#ffff] pt-[322px]">
        <div className="container">
          <div className="max-w-[1075px] mx-auto">
            <div className="flex pb-8">
              <div className="w-12 h-12">
                <Image src={user} alt="user" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center pl-3">
                <div className="w-[148px]">
                  <p className="pb-2 text-[14px] text-[#080808CC]">
                    Written by
                  </p>
                  <p className="text-[15px] font-bold font-sans">Mark Henry</p>
                </div>
                <div className="w-[148px]">
                  <p className="pb-2 text-[14px] text-[#080808CC]">Category</p>
                  <p className="text-[15px] font-bold font-sans">
                    User Experience
                  </p>
                </div>
                <div className="w-[148px]">
                  <p className="pb-2 text-[14px] text-[#080808CC]">Date</p>
                  <p className="text-[15px] font-bold font-sans">02/08/2023</p>
                </div>
              </div>
            </div>
            <hr className="text-[#0808081A] pb-12" />
            <div>
              <h2 className="text-[32px] pb-4 font-bold font-syne">
                About the position
              </h2>
              
              <p className="text-[#08080899] text-[18px] leading-7 pb-[40px] font-sans">
              Everyone in my team works towards the samegoal. This enabled our
              teams to ship new ideas and feel more capable. Podcasting
              operational — change management inside of workflows. Completely
              synergize.
              </p>
              <p className="text-[#08080899] text-[18px] leading-7 pb-[40px] font-sans">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself


              </p>
              <p className="text-[#08080899] text-[18px] leading-7 pb-[40px] font-sans">
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
              <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 pb-12">
                <Image src={device} alt="image" className="w-full h-full " />
                <Image src={laptop} alt="image" className="w-full h-full " />
              </div>
            </div>
            <div className="pt-12">
              <h2 className="text-[32px] font-bold font-syne">1. Learning the basics</h2>
              <p className="text-[18px] text-[#08080899] leading-7 pb-12 font-sans">
              Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
              </p>
              <p className="text-[18px] text-[#08080899] leading-7 pb-12 font-sans">
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
              </p>
              
            </div>
            <div>
              <h2 className="text-[32px] font-bold font-syne">2. Learning the basics</h2>
              
                <p className="text-[18px] text-[#08080899] leading-7 pb-12">
                Everyone in my team works towards the samegoal. This enabled our teams to ship new ideas and feel more capable. Podcasting operational — change management inside of workflows. Completely synergize.
                </p>
                <p className="text-[18px] text-[#08080899] leading-7 pb-12">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself
                </p>
                <div className="flex justify-between">
                <div className="flex items-center">
                  <p className="pl-6">Share:</p>
                  <div className="gap-4 flex">
                  <Image src={fb} alt="Image"/>
                  <Image src={twitter} alt="Image"/>
                  <Image src={whatsapp} alt="Image"/>
                  <Image src={linkedIn} alt="Image"/>
                  <Image src={copy} alt="Image"/>
                  <Image src={react} alt="Image"/>
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
