import React from 'react'
import AboutExperience from '@/components/about_experience'
import AboutHeader from './AboutHeader'
import Header from '@/components/header'
import AboutCompany from '@/components/about_company'
import ContactSupportHero from '@/components/contactSupportHero'
import Milestone from '@/components/milestone'
import Footer from '@/components/footer'
function About() {
  return (
    <>
      <AboutHeader/>
      <AboutCompany/>
      <AboutExperience/>
      <ContactSupportHero/>
      <Milestone/>
      <Footer/>
    </>
  )
}

export default About
