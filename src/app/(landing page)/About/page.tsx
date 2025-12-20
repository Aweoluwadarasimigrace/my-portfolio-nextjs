import React from 'react'
import AboutMyJourney from './component/about-my-journey'
import Education from './component/education'
import SkillMatrix from './component/skills and matrix'
import Experience from './component/experience'

const page = () => {
  return (
    <div>
        <AboutMyJourney />
        <Education />
        <SkillMatrix />
        <Experience />
    </div>
  )
}

export default page