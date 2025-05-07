import React from 'react'
import ServiceCard from './ServiceCard'
import MobileIcon from '@/app/assets/mobile-icon.png'
import uiuxicon from '@/app/assets/uiuxicon.png'
import webicon from '@/app/assets/web-icon.png'
import webflow from '@/app/assets/webflow-Icon.png'
import brandicon from '@/app/assets/brand-Icon.png'
import Interactionicon from '@/app/assets/interaction-Icon.png'
import { MdArrowOutward } from "react-icons/md";

const Service = () => {
    const cardItems = [
        {
            id: 1,
            img: MobileIcon,
            title: "Mobile Apps design"
        },
        {
            id: 2,
            img: uiuxicon,
            title: "UI/UX design"
        },
        {
            id: 3,
            img: webicon,
            title: "Website design"
        },
        {
            id: 4,
            img: webflow,
            title: "Webflow development"
        },
        {
            id: 5,
            img: brandicon,
            title: "Brand identity"
        },
        {
            id: 6,
            img: Interactionicon,
            title: "Interaction design"
        }
    ]
    return (
    <section className='mt-[120px] mb-[194px]'>
        <div className="container">
            <div>
                {/* top section */}
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center'>
                    <div>
                        <p className='text-[20px] text-[#FF9330] font-bold font-syne pb-2'>Service</p>
                        <h1 className='text-[64px] font-bold font-syne pb-12 relative after:absolute after:size-[62px] after:rounded-full after:bg-[#FFB646] after:top-[15px] after:left-[-2px] z-[1] after:z-[-1] '>My specialties</h1>
                    </div>
                    <div>
                        <p className='text-[18px] text-[#08080899]'>Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms </p>
                    </div>
                </div>
                {/* bottom section */}
                <div className='grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 mt-12'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                        {
                            cardItems?.map((items) => {
                                return <ServiceCard key={items.id} items={items}/>
                            })
                        }
                        
                    </div>
                    <div className='bg-black rounded-2xl relative px-6 py-9'>
                        <div className='flex justify-end '>
                        <MdArrowOutward className='text-[#FFB646] w-[80px] h-[80px] '/>
                        </div>
                        <div className='absolute bottom-6'>
                            <h2 className='text-[#FFB646] text-[18px] font-sans'>SAY HELLO!</h2>
                            <h2 className='text-white font-semibold text-[27px] font-syne'>hello@nuzaima.com</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)}

export default Service



