import Image from 'next/image'
import React from 'react'
import Matrixian from '@/app/assets/matrixian.png'
import Google from '@/app/assets/google.png'
import Factual from '@/app/assets/factual.png'
import Airbnb from '@/app/assets/airbnb.png'
import chase from '@/app/assets/chase.png'
import Logitech from '@/app/assets/logitech.png'


const Companies = () => {
  return (
    <section className='pb-[120px]'>
        <div className="container">
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2'>
                <Image src={Matrixian} alt='image'/>
                <Image src={Google} alt='image'/>
                <Image src={Factual} alt='image'/>
                <Image src={Airbnb} alt='image'/>
                <Image src={chase} alt='image'/>
                <Image src={Logitech} alt='image'/>
            </div>
        </div>
    </section>
  )
}

export default Companies