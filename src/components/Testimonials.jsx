"use client";
import React from "react";
import { PiQuotesFill } from "react-icons/pi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <section className="py-[60px] md:py-[120px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-center gap-10 md:gap-2 text-center md:text-left">
          <div className="font-syne font-bold w-full md:w-[416px] md:pr-6">
            <p className="text-[#FF9330] text-[20px] pb-2.5">Testimonial</p>
            <h2
              className='text-[48px] lg:text-[64px] leading-[56px] lg:leading-[72px] relative 
                        after:content-[""] after:absolute after:bg-[#FFB646] after:rounded-full sm:after:top-[1px] after:top-[6px]sm:after:left-[1px] after:left-[120px] after:-translate-x-1/2 sm:after:translate-x-0after:w-[44px] sm:after:w-[62px] after:h-[44px] sm:after:h-[62px] z-[3] after:z-[-3] text-center sm:text-left'
            >
              Client feedback
            </h2>
          </div>

            <div className="w-[1000px]">
          <Slider {...settings}>
              {/* w-full place-items-center md:place-items-stretch slider-container */}

              <div className="flex gap-10">
                <div className=" font-syne font-bold max-w-md">
              <span className="pb-10 text-5xl block">
                <PiQuotesFill />
              </span>
              <p className="text-[20px] pb-6 text-[#080808CC]">
                “Unleash energistically build alternative scenarios via
                cross-unit build efficient initiatives for distinctive vortals.
                Synergistically strategize via adaptive”
              </p>
              <h2 className="text-[28px] flex items-center justify-center md:justify-start gap-4">
                <hr className="text-[#08080866] w-12" />
                Jhon Smith
              </h2>
            </div>
              </div>

            <div className="flex gap-10">
              <div className="font-syne font-bold max-w-md">
              <span className="pb-10 text-5xl block">
                <PiQuotesFill />
              </span>
              <p className="text-[20px] pb-6 text-[#080808CC]">
                “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque
                sed viverra nisi. Fusce et laoreet augue. Quisque pretium,
                ligula lectus semper urna. Aliquam vehicula.”
              </p>
              <h2 className="text-[28px] flex items-center justify-center md:justify-start gap-4">
                <hr className="text-[#08080866] w-12" />
                Jhon Smith
              </h2>
            </div>
            </div>
            <div className="flex gap-10"> 
            <div className="font-syne font-bold max-w-md">
              <span className="pb-10 text-5xl block">
                <PiQuotesFill />
              </span>
              <p className="text-[20px] pb-6 text-[#080808CC]">
                “Energistically build alternative scenarios via cross-unit
                applications. Credibly exploit one-to-one strategic theme areas
                and clicks-and-mortar services”
              </p>
              <h2 className="text-[28px] flex items-center justify-center md:justify-start gap-4">
                <hr className="text-[#08080866] w-12" />
                Jhon Smith
              </h2>
            </div>
            </div>
          </Slider>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
