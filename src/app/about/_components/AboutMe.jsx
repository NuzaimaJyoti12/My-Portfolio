import React from "react";
import aboutImg from "@/app/about/image/jImg.png";
import Image from "next/image";
import signature from "@/app/about/image/signature.png";

const AboutMe = () => {
  return (
    <section className="mt-18 bg-[#FFE9D9] pt-10 md:pt-20 pb-20 md:pb-[120px]">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-end md:gap-32 gap-10">
          <div>
            <Image src={aboutImg} alt="image" className="w-full h-auto" />
          </div>
          <div>
            <h2 className="text-[#FF9330] text-base md:text-[20px] leading-6 md:leading-7 pb-2.5 font-syne font-bold">
              About me
            </h2>
            <h4 className="whitespace-nowrap text-[28px] sm:text-[40px] md:text-[60px] lg:text-[64px] leading-[42px] sm:leading-[56px] md:leading-[72px] font-bold font-syne">
              Nuzaima Rahman
            </h4>

            <h3 className="text-[18px] md:text-2xl font-bold font-syne leading-7 md:leading-8 pt-2 md:pt-[8px] pb-4 md:pb-6">
              Product Designer
            </h3>
            <p className="text-[#080808CC] text-base md:text-[20px] font-syne font-bold leading-6 md:leading-7 pb-6 md:pb-[30px]">
              A Product Designer & Developer and I am in the game for over 7+
              years. I am proud of my works and ready to face the next challenge
            </p>
            <p className="text-[#08080899] text-sm md:text-[18px] leading-6 md:leading-7 font-sans pb-10 md:pb-[48px]">
              That is where I come in. A lover of words, a wrangler of copy.
              Here to create copy that not only reflects who you are and what
              you stand for, but words that truly land with those that read
              them, calling your audience in and making them.
            </p>
            <Image
              src={signature}
              alt="image"
              className="w-[120px] md:w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
