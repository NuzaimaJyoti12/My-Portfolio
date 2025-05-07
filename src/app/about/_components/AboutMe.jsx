import React from 'react'
import aboutImg from '@/app/about/image/about2.png'
import Image from 'next/image'
import signature from '@/app/about/image/signature.png'

const AboutMe = () => {
  return (
    <section className='mt-18 bg-[#FFE9D9] pt-20 pb-[120px]'>
      <div className="container">
          <div className='grid grid-cols-1 md:grid-cols-2 items-end'>
            <div>
              <Image src={aboutImg} alt='image'/>
            </div>
            <div>
              <h2 className='text-[#FF9330] text-[20px] leading-7 pb-2.5 font-syne font-bold'>
                About me
              </h2>
              <h4 className='text-[40px] sm:text-[50px] md:text-[60px] lg:text-[64px] leading-[72px] font-bold font-syne'>
                Nuzaima Rahman
              </h4>
              <h3 className='text-[20px] md:text-2xl font-bold font-syne leading-8 pt-[8px] pb-6'>
              Product Designer
              </h3>
              <p className='text-[#080808CC] text-[20px] font-syne font-bold leading-7 pb-[30px]'>
              A Product Designer & Developer and I am in the game for over 7+ years. I am proud of my works and ready to face the next challenge
              </p>
              <p className='text-[#08080899] text-[18px] leading-7 font-sans pb-[48px]'>
              That is where I come in. A lover of words, a wrangler of copy. Here to create copy that not only reflects who you are and what you stand for, but words that truly land with those that read them, calling your audience in and making them .
              </p>
              <Image src={signature} alt='image'/>
            </div>
          </div>
      </div>
    </section>
  )
}

export default AboutMe