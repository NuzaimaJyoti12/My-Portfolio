import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FaBehance } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contacts = () => {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-between">
          {/* left side. */}
          <div>
            <div>
              <p className="text-[#FF9330] font-bold font-syne text-[16px] pb-2.5 sm:text-[18px]">
                Contact
              </p>
              <h1 className="text-[32px] sm:text-[48px] md:text-[64px] font-bold w-full sm:w-[416px] leading-[40px] sm:leading-[56px] md:leading-[72px] font-syne relative after:absolute after:size-[40px] sm:after:size-[50px] md:after:size-[69px] after:rounded-full after:bg-[#FFB646] after:top-[2px] after:left-[-5px] z-[1] after:z-[-3] pb-12">
                Let’s connect
              </h1>
            </div>

            <div>
              {/* Email */}
              <div className="pb-7">
                <div className="flex items-center gap-6">
                  <MdOutlineMail className="w-8 h-8" />
                  <p className="text-[#08080899] text-[18px] font-sans">
                    Email us
                  </p>
                </div>
                <p className="text-[20px] font-bold font-syne pl-[55px]">
                  hello@nuzaima.com
                </p>
                <hr className="text-[#0808081A] w-[416px]" />
              </div>

              {/* Phone */}
              <div className="pb-7">
                <div className="flex items-center gap-6">
                  <FiPhoneCall className="w-8 h-8" />
                  <p className="text-[#08080899] text-[18px] font-sans">
                    Call us
                  </p>
                </div>
                <p className="text-[20px] font-bold font-syne pl-[55px]">
                  +88 01631915686 | +88 01631915686
                </p>
                <hr className="text-[#0808081A] w-[416px]" />
              </div>

              {/* Address */}
              <div className="pb-7">
                <div className="flex items-center gap-6">
                  <IoLocationOutline className="w-8 h-8" />
                  <p className="text-[#08080899] text-[18px] font-sans">
                    Office address
                  </p>
                </div>
                <p className="text-[20px] font-bold font-syne pl-[55px]">
                  Dhaka, Bangladesh
                </p>
                <hr className="text-[#0808081A] w-[416px]" />
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="max-w-2xl mx-auto p-6">
            <form className="space-y-4 pb-[74px]">
              <div className="grid md:grid-cols-2 ">
                <div className="md:flex gap-4">
                  <div>
                    <label className="block mb-1">Name</label>
                    <input
                      type="text"
                      placeholder="Your name*"
                      className="border border-[#08080866] p-2 rounded-[8px] w-full md:w-[310px]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Email</label>
                    <input
                      type="email"
                      placeholder="Your email*"
                      className="border border-[#08080866]  p-2 rounded-[8px] w-full md:w-[310px]"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 ">
                <div className="md:flex gap-4">
                  <div>
                    <label className="block mb-1">Phone</label>
                    <input
                      type="text"
                      placeholder="Your number*"
                      className="border border-[#08080866] p-2 rounded-[8px] w-full md:w-[310px]"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1">Subject*</label>
                    <input
                      type="email"
                      placeholder="Your subject*"
                      className="border border-[#08080866]  p-2 rounded-[8px] w-full md:w-[310px]"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block mb-1">Message</label>
                <textarea
                  placeholder="Type your message"
                  className="border p-2 rounded-[8px]  w-full border-[#08080866] md:w-[636px]"
                  rows="4"
                ></textarea>
              </div>

              <div></div>
              <div>
                <button
                  type="submit"
                  className="flex justify-between items-center py-4 md:py-5 px-6 md:px-8 rounded-[8px] text-[14px] md:text-[16px] font-bold bg-black text-white transition duration-700 hover:text-black hover:bg-transparent cursor-pointer border-[1px] gap-2 w-full max-w-[149px] mt-6"
                >
                  Submit
                  <span>
                    <MdArrowOutward />
                  </span>
                </button>
              </div>
            </form>
            <div className="flex gap-8 sm:mt-2 sm:justify-center sm:text-xl md:ml-[32px] text-2xl text-black items-center">
              <p className="text-[20px] font-syne font-bold gap-8">Follow me</p>
              <div className="flex gap-4">
                <FaBehance className="hover:text-[#FFB646] cursor-pointer" />
                <FaLinkedinIn className="hover:text-[#FFB646] cursor-pointer" />
                <FaDribbble className="hover:text-[#FFB646] cursor-pointer" />
                <FaGithub className="hover:text-[#FFB646] cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
