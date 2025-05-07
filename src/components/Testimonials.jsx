import React from 'react'
import { PiQuotesFill } from "react-icons/pi";

const Testimonials = () => {
  return (
    <section className='py-[120px]'>
        <div className="container">
        <div className='flex justify-between items-center gap-2'>
            <div className='font-syne font-bold w-[416px] pr-6'>
                <p className='text-[#FF9330] text-[20px] pb-2.5'>Testimonial</p>
                <h2 className='text-[64px] leading-[72px] relative after:absolute after:bg-[#FFB646] after:rounded-full after:top-[1px] after:left-[1px] z-[3] after:z-[-3] after:size-[62px]'>Client feedback</h2>
            </div>
            <div className=' gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            <div className='font-syne font-bold'>
                <span  className='pb-10 text-5xl'>
                <PiQuotesFill/>
                </span>
                <p className='text-[20px] pb-6  text-[#080808CC]'>
                “Unleash  energistically build alternative scenarios via cross-unit  build efficient initiatives for distinctive vortals. Synergistically strategize via adaptive”
                </p>
                <h2 className='text-[28px] flex items-center gap-4'><hr className='text-[#08080866] w-12'/>Jhon Smith</h2>
            </div>
            <div className='font-syne font-bold'>
                <span  className='pb-10 text-5xl'>
                <PiQuotesFill/>
                </span>
                <p className='text-[20px] pb-6 text-[#080808CC]'>
                “Aliquam vehicula nunc facilisis tincidunt feugiat. Pellentesque sed viverra nisi. Fusce et laoreet augue. Quisque pretium, ligula lectus semper urna. Aliquam vehicula.”
                </p>
                <h2 className='text-[28px] flex items-center gap-4'><hr className='text-[#08080866] w-12'/>Jhon Smith</h2>
            </div>
            <div className='font-syne font-bold'>
                <span  className='pb-10 text-5xl'>
                <PiQuotesFill/>
                </span>
                <p className='text-[20px] pb-6 text-[#080808CC]'>
                “Energistically build alternative scenarios via cross-unit applications. Credibly exploit one-to-one strategic theme areas and clicks-and-mortar services”
                </p>
                <h2 className='text-[28px] flex items-center gap-4'><hr className='text-[#08080866] w-12'/>Jhon Smith</h2>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimonials