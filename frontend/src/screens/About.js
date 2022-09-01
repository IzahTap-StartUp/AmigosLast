import React from 'react'
import PrimaryComponent from '../components/AboutPageComponents/AboutPrimaryComponent'
import SecondaryComponent from '../components/AboutPageComponents/AboutSecondaryComponent'
const About = () => {
  return (
    <div className='wrapper medium pt-[50px]'>
        <PrimaryComponent />
        <SecondaryComponent/>
    </div>
  )
}

export default About