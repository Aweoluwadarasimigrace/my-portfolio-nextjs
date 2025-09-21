import React from 'react'
import HeroSection from './component/herosection'
import AboutMe from './component/about-me section'
import ContactMe from './component/contact-me'

const page = () => {
  return (
    <div>
        <HeroSection />
        <AboutMe />
        <ContactMe />
    </div>
  )
}

export default page