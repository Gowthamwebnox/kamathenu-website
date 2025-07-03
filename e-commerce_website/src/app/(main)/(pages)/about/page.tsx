import React from 'react'
import AboutHero from './sections/Hero'
import Header from '@/app/components/layout/Header'
import YearsofExperience from './sections/YearsofExperience'
import Service from './sections/service'
import ChooseUs from './sections/chooseUs'
import Footer from '@/app/components/layout/Footer'

const AboutPage = () => {
  return (
    <>
    <Header headerColor={["black", "white"]} />
    <AboutHero/>
    <Footer/>
    </>
  )
}

export default AboutPage