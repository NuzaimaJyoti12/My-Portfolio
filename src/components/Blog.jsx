import React from 'react'
import FirstImg from "@/app/assets/blog1.png"
import SecondImg from '@/app/assets/blog2.png'
import ThirdImg from '@/app/assets/blog3.png'
import forthImg from '@/app/assets/blog4.png'
import Image from 'next/image'
import { BsDot } from "react-icons/bs";
import { MdArrowOutward } from "react-icons/md";


const Blog = () => {
  return (
    <section className='pb-[120px]'>
        <div className="container">
            <div>
                <div className='font-syne text-center font-bold pb-12'>
                    <p className='text-[#FF9330] text-[20px]'>Blog</p>
                    <h2 className='text-[64px] relative after:absolute after:rounded-full after:size-[64px] after:top-[12px] after:right-[508px] after:bg-[#FFB646] z-[66] after:z-[-32]'>My blog post</h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div>
                        <span>
                            <Image src={FirstImg} alt='image'/>
                        </span>
                        <div>
                            <div className='flex items-center gap-3 text-[14px] pt-6 pb-3'>
                                <span className='flex items-center text-[#080808CC]'>
                                    <BsDot/>
                                <p>
                                UI Design
                                </p>
                                </span>
                                <span className='flex items-center text-[#FF9330]'>
                                    <BsDot/>
                                <p>
                                03 May 2019
                                </p>
                                </span>
                            </div>
                            <div className='flex justify-between items-end'>
                                <p className='text-2xl font-syne font-bold'>Right-lo-left behind development in mobile web design</p>
                                <span>
                                    <MdArrowOutward className='w-8 h-8'/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <span>
                            <Image src={SecondImg} alt='image'/>
                        </span>
                        <div>
                            <div className='flex items-center gap-3 text-[14px] pt-6 pb-3'>
                                <span className='flex items-center text-[#080808CC]'>
                                    <BsDot/>
                                <p>
                                UI Design
                                </p>
                                </span>
                                <span className='flex items-center text-[#FF9330]'>
                                    <BsDot/>
                                <p>
                                03 May 2019
                                </p>
                                </span>
                            </div>
                            <div className='flex justify-between items-end'>
                                <p className='text-2xl font-syne font-bold'>Connect craft: Reading the smart experiencen</p>
                                <span>
                                    <MdArrowOutward className='w-8 h-8'/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <span>
                            <Image src={ThirdImg} alt='image'/>
                        </span>
                        <div>
                            <div className='flex items-center gap-3 text-[14px] pt-6 pb-3'>
                                <span className='flex items-center text-[#080808CC]'>
                                    <BsDot/>
                                <p>
                                UI Design
                                </p>
                                </span>
                                <span className='flex items-center text-[#FF9330]'>
                                    <BsDot/>
                                <p>
                                03 May 2019
                                </p>
                                </span>
                            </div>
                            <div className='flex justify-between items-end'>
                                <p className='text-2xl font-syne font-bold'>Ecoglow: Sustainable skincare a brighter tomorrow</p>
                                <span>
                                    <MdArrowOutward className='w-8 h-8'/>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <span>
                            <Image src={forthImg} alt='image'/>
                        </span>
                        <div>
                            <div className='flex items-center gap-3 text-[14px] pt-6 pb-3'>
                                <span className='flex items-center text-[#080808CC]'>
                                    <BsDot/>
                                <p>
                                UI Design
                                </p>
                                </span>
                                <span className='flex items-center text-[#FF9330]'>
                                    <BsDot/>
                                <p>
                                03 May 2019
                                </p>
                                </span>
                            </div>
                            <div className='flex justify-between items-end'>
                                <p className='text-2xl font-syne font-bold'>Right-lo-left behind development in mobile web design</p>
                                <span>
                                    <MdArrowOutward className='w-8 h-8'/>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog