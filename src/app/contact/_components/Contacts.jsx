import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";


const Contacts = () => {
  return (
    <section className='pt-[120px] pb-[120px]'>
        <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-between'>
                <div>
                    <div>
                    <p className='text-[#FF9330] font-bold font-syne'>Contact</p>
                    <h1 className='text-[64px] font-bold w-[416px] leading-[72px] pb-3 font-syne relative after:absolute after:size-[69px] after:rounded-full after:bg-[#FFB646] after:top-[2px] after:left-[-5px] z-[1] after:z-[-3]'>Let’s connect</h1>
                    </div>
                    <div>
                        <div className='pb-7 '>
                            <div className='flex items-center gap-6'>
                            <MdOutlineMail className='w-8 h-8'/>
                            <p className='text-[#08080899] text-[18px] font-sans'>Email us</p>
                            </div>
                            <p className='text-[20px] font-bold font-syne pl-[55px]'>hello@nuzaima.com</p>
                            <hr className="text-[#0808081A] w-[416px]" />
                        </div>
                        <div className='pb-7 '>
                            <div className='flex items-center gap-6'>
                            <FiPhoneCall className='w-8 h-8'/>
                            <p className='text-[#08080899] text-[18px] font-sans'>Call us</p>
                            </div>
                            <p className='text-[20px] font-bold font-syne pl-[55px]'>+88 01631915686  |  +88 01631915686</p>
                            <hr className="text-[#0808081A] w-[416px]" />
                        </div>
                        <div className='pb-7 '>
                            <div className='flex items-center gap-6'>
                            <IoLocationOutline className='w-8 h-8'/>
                            <p className='text-[#08080899] text-[18px] font-sans'>Office address</p>
                            </div>
                            <p className='text-[20px] font-bold font-syne pl-[55px]'>Dhaka,Bangladesh</p>
                            <hr className="text-[#0808081A] w-[416px]" />
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default Contacts