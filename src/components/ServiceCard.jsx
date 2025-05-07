import Image from 'next/image'
import React from 'react'
import mobileIcon from '@/app/assets/mobile-icon.png'
import { MdArrowOutward } from "react-icons/md";

const ServiceCard = ({items}) => {
  return (
    <div className='py-7 px-6 bg-[#0808080A] rounded-[10px] hover:shadow-2xl hover:bg-white group cursor-pointer'>
      <div className='h-[48px] w-[48px] bg-white mb-8 rounded-full flex items-center justify-center group-hover:bg-gray-100'>
        <Image src={items.img} alt='image' />
      </div>
      <div className='flex justify-between items-end '>
        <h2 className='font-bold font-syne text-[20px] leading-7 group-hover:text-[#FFB646]'>{items.title}</h2>
        <span><MdArrowOutward className='text-[#08080899] group-hover:text-[#FFB646]'/></span>
      </div>
    </div>
  )
}

export default ServiceCard