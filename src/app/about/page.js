import React from 'react'
import AboutMe from './_components/AboutMe'
import Testimonials from '@/components/Testimonials'
import Vision from './_components/Vision'
import Companies from '@/components/Companies'
import Video from './_components/Video'
import Details from './_components/Details'


const page = () => {
  return (
    <div>
        <AboutMe/>
        <Vision/>
        <Video/>
        <Details/>
        <Testimonials/>
        <Companies/>
    </div>
  )
}

export default page