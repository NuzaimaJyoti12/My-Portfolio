import Image from 'next/image'
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import project1 from '@/app/project/image/project1.png'
import project2 from '@/app/project/image/project2.png'
import project3 from '@/app/project/image/project3.png'
import project4 from '@/app/project/image/project4.png'
import project5 from '@/app/project/image/project5.png'
import project7 from '@/app/project/image/project7.png'

const RecentWork = () => {
  return (
    <section className='pt-20 pb-[120px]'>
        <div className="container">
            <div>
            <div className="text-center pb-12">
            <p className="text-[#FF9330] font-bold text-[20px] font-syne">
              Portfolio
            </p>
            <h2 className="text-[64px] font-bold font-syne relative after:absolute after:bg-[#FFB646] after:size-[64px] after:rounded-full after:top-[12px] after:right-[507px] z-[4] after:z-[-4]">My recent work</h2>
          </div>
          <div className=''>
            <div className='flex items-center gap-6 pb-7'>
                <div className='relative'>
                <Image src={project1} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Dashboard design</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div>
                <div className='relative'>
                <Image src={project2} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 gap-50'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Dashboard design</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div>
            </div>
            <div className='flex items-center gap-6 pb-7'>
            <div className='relative'>
                <Image src={project3} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 gap-3'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Dashboard</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div><div className='relative'>
                <Image src={project4} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 gap-3'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Dashboard</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div><div className='relative'>
                <Image src={project5} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 gap-30'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Apps</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div>
            </div>
            <div className='flex items-center gap-6 pb-7'>
            <div className='relative'>
                <Image src={project7} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 gap-30'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Dashboard</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div><div className='relative'>
                <Image src={project2} alt='projectImg'/>
                <div className='text-white hover:text-[#FF9330] flex items-center justify-between p-6 absolute bottom-6 gap-54'>
                    <p className='text-[32px]  font-syne font-bold'>Oxilex Dashboard design</p>
                    <MdArrowOutward className='w-10 h-10'/>
                </div>
                </div>
            </div>
          </div>
            </div>
        </div>
    </section>
  )
}

export default RecentWork