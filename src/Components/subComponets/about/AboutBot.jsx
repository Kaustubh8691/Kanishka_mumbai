import React from 'react'
import Aboutcontact from './Aboutcontact'
import AboutDetail from './AboutDetail'
import AboutMail from './AboutMail'
import "./aboutbot.css"
const AboutBot = () => {
  return (
    <div className='about-bot'>
        <AboutDetail/>
        <Aboutcontact/>
        <AboutMail/>
        
    </div>
  )
}

export default AboutBot